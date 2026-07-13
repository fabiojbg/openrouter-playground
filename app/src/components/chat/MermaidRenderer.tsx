import React, { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import { MdZoomIn, MdZoomOut, MdRefresh, MdClose, MdZoomOutMap } from "react-icons/md";

interface Props {
  code: string;
  isStreaming?: boolean;
}

let mermaidInstance: any = null;

export default function MermaidRenderer({ code, isStreaming }: Props) {
  const [svg, setSvg] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    let isMounted = true;

    async function renderDiagram() {
      if (!svg) {
        setLoading(true);
      }
      try {
        if (!mermaidInstance) {
          const mermaidModule = await import("mermaid");
          mermaidInstance = mermaidModule.default;
          mermaidInstance.initialize({
            startOnLoad: false,
            theme: "dark",
            securityLevel: "loose",
            suppressErrorRendering: true,
            fontFamily: "var(--font-sans, Inter, sans-serif)",
            themeVariables: {
              background: "#111827",
              primaryColor: "#1f2937",
              primaryTextColor: "#f3f4f6",
              lineColor: "#4b5563",
            }
          });
        }

        // Generate a valid unique DOM id for mermaid (must start with a letter)
        const id = `mermaid-svg-${Math.floor(Math.random() * 1000000)}`;

        // Render diagram
        const renderResult = await mermaidInstance.render(id, code);

        if (isMounted) {
          setError(null);
          if (typeof renderResult === "string") {
            setSvg(renderResult);
          } else if (renderResult && typeof renderResult === "object" && "svg" in renderResult) {
            setSvg(renderResult.svg);
          } else {
            throw new Error("Invalid render response format from Mermaid");
          }
          setLoading(false);
        }
      } catch (err: any) {
        console.error("Mermaid render error:", err);
        if (isMounted) {
          if (isStreaming) {
            // Keep loading or keep showing the last valid SVG while streaming
            if (!svg) {
              setLoading(true);
            }
          } else {
            setError(err?.message || "Failed to render Mermaid diagram.");
            setLoading(false);
          }
        }
      }
    }

    renderDiagram();

    return () => {
      isMounted = false;
    };
  }, [code]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center p-6 text-gray-400 text-sm">
        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white mb-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <span>Rendering diagram...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full bg-red-950/40 border border-red-500/30 text-red-200 p-4 rounded-md my-2 text-xs font-mono overflow-auto">
        <div className="font-semibold text-sm mb-1 text-red-400">Mermaid Render Error</div>
        <p className="mb-2 text-gray-300">{error}</p>
        <div className="border-t border-red-500/20 pt-2">
          <span className="text-gray-400 font-semibold block mb-1">Source Code:</span>
          <pre className="bg-black/30 p-2 rounded text-gray-300 overflow-x-auto whitespace-pre">{code}</pre>
        </div>
      </div>
    );
  }

  const cleanPreviewSvg = svg
    .replace(/max-width:\s*[^;"]+;?/g, "max-width: 100%; max-height: 530px;")
    .replace(/(?<![\w-])width:\s*[^;"]+;?/g, "width: auto;")
    .replace(/(?<![\w-])height:\s*[^;"]+;?/g, "height: auto;");

  return (
    <>
      <div
        className="mermaid-svg-container w-full max-h-[550px] flex items-center justify-center overflow-auto p-2 cursor-pointer hover:bg-gray-800/10 dark:hover:bg-white/5 active:bg-gray-800/20 dark:active:bg-white/10 transition-colors duration-200 rounded-lg relative group border border-transparent hover:border-white/10"
        onClick={() => setIsOpen(true)}
        title="Click to zoom & pan"
      >
        <div className="w-full flex justify-center" dangerouslySetInnerHTML={{ __html: cleanPreviewSvg }} />
        {/* Hover overlay cue */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300 rounded-lg pointer-events-none">
          <div className="flex items-center gap-2 px-4 py-2 bg-gray-950/95 border border-white/10 rounded-full text-white text-xs font-semibold shadow-xl backdrop-blur-md transform scale-95 group-hover:scale-100 transition-all duration-300">
            <MdZoomOutMap className="text-sm text-indigo-400" />
            <span>Click to zoom & pan</span>
          </div>
        </div>
      </div>
      {isOpen && mounted && createPortal(
        <MermaidModal svg={svg} onClose={() => setIsOpen(false)} />,
        document.body
      )}
    </>
  );
}

interface ModalProps {
  svg: string;
  onClose: () => void;
}

function MermaidModal({ svg, onClose }: ModalProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgWrapperRef = useRef<HTMLDivElement>(null);
  
  const [scale, setScale] = useState(1);
  const [translation, setTranslation] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  
  // Touch state
  const [touchStartDist, setTouchStartDist] = useState<number | null>(null);
  const [touchStartScale, setTouchStartScale] = useState<number>(1);

  // Reset zoom and pan
  const handleReset = () => {
    setScale(1);
    setTranslation({ x: 0, y: 0 });
  };

  // Zoom by factor
  const handleZoom = (factor: number) => {
    setScale(prev => Math.max(0.15, Math.min(15, prev * factor)));
  };

  // Wheel zoom
  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    e.preventDefault();
    const zoomFactor = 1.15;
    if (e.deltaY < 0) {
      setScale(prev => Math.min(prev * zoomFactor, 15));
    } else {
      setScale(prev => Math.max(prev / zoomFactor, 0.15));
    }
  };

  // Mouse drag panning
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.button !== 0) return; // Only left click
    setIsDragging(true);
    setDragStart({ x: e.clientX - translation.x, y: e.clientY - translation.y });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    setTranslation({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Keyboard events (Esc to close)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // Lock body scroll when open
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  // Touch event handlers for mobile
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length === 1) {
      const touch = e.touches[0];
      setIsDragging(true);
      setDragStart({ x: touch.clientX - translation.x, y: touch.clientY - translation.y });
      setTouchStartDist(null);
    } else if (e.touches.length === 2) {
      setIsDragging(false);
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      setTouchStartDist(dist);
      setTouchStartScale(scale);
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length === 1 && isDragging) {
      const touch = e.touches[0];
      setTranslation({
        x: touch.clientX - dragStart.x,
        y: touch.clientY - dragStart.y
      });
    } else if (e.touches.length === 2 && touchStartDist !== null) {
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      const ratio = dist / touchStartDist;
      setScale(Math.max(0.15, Math.min(15, touchStartScale * ratio)));
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setTouchStartDist(null);
  };

  // Clean the SVG string to strip out inline width/height and max-width style overrides
  // so that the SVG scales up and down smoothly based on the container transforms
  const cleanSvg = svg
    .replace(/max-width:\s*[^;"]+;?/g, "max-width: none;")
    .replace(/(?<![\w-])width:\s*[^;"]+;?/g, "width: auto;")
    .replace(/(?<![\w-])height:\s*[^;"]+;?/g, "height: auto;");

  return (
    <div className="fixed inset-0 bg-black/75 backdrop-blur-md z-[9999] flex items-center justify-center p-4 transition-all duration-300">
      {/* Backdrop click closer */}
      <div className="absolute inset-0" onClick={onClose} />
      
      {/* Modal Card */}
      <div 
        className="relative w-[95vw] h-[95vh] bg-slate-950/95 border border-white/10 rounded-2xl flex flex-col overflow-hidden shadow-2xl shadow-black/50 z-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-slate-950/40 select-none">
          <div>
            <h3 className="text-lg font-semibold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Mermaid Diagram Interactive Viewer
            </h3>
            <p className="text-xs text-gray-400 mt-0.5">
              Drag to pan • Scroll to zoom • Double-click to reset
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Zoom Controls */}
            <div className="flex items-center gap-1 px-2.5 py-1 bg-white/5 border border-white/10 rounded-full">
              <button
                onClick={() => handleZoom(0.8)}
                className="p-1.5 text-gray-400 hover:text-white hover:bg-white/5 rounded-full active:scale-95 transition-all"
                title="Zoom Out"
              >
                <MdZoomOut className="text-base" />
              </button>
              
              <span className="text-xs font-mono font-bold tracking-wider text-gray-300 px-1 min-w-[3rem] text-center">
                {Math.round(scale * 100)}%
              </span>
              
              <button
                onClick={() => handleZoom(1.2)}
                className="p-1.5 text-gray-400 hover:text-white hover:bg-white/5 rounded-full active:scale-95 transition-all"
                title="Zoom In"
              >
                <MdZoomIn className="text-base" />
              </button>
              
              <div className="w-[1px] h-3.5 bg-white/10 mx-0.5" />
              
              <button
                onClick={handleReset}
                className="p-1.5 text-gray-400 hover:text-white hover:bg-white/5 rounded-full active:scale-95 transition-all"
                title="Reset position and zoom"
              >
                <MdRefresh className="text-base" />
              </button>
            </div>

            <div className="w-[1px] h-6 bg-white/10" />

            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-white p-2 rounded-lg bg-white/5 hover:bg-white/10 active:scale-95 transition-all duration-200"
              title="Close viewer"
            >
              <MdClose className="text-xl" />
            </button>
          </div>
        </div>

        {/* Viewport Canvas */}
        <div 
          ref={containerRef}
          className="flex-1 w-full h-full relative overflow-hidden select-none cursor-grab active:cursor-grabbing bg-slate-950/20"
          onWheel={handleWheel}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onDoubleClick={handleReset}
        >
          <div
            ref={svgWrapperRef}
            style={{
              transform: `translate(${translation.x}px, ${translation.y}px) scale(${scale})`,
              transformOrigin: "center",
              transition: isDragging ? "none" : "transform 0.15s cubic-bezier(0.2, 0.8, 0.2, 1)",
            }}
            className="absolute inset-0 flex items-center justify-center p-8 [&_svg]:max-w-none [&_svg]:w-auto [&_svg]:h-auto [&_svg]:transition-none"
            dangerouslySetInnerHTML={{ __html: cleanSvg }}
          />
        </div>
      </div>
    </div>
  );
}
