import React, { useEffect, useState } from "react";

interface Props {
  code: string;
  isStreaming?: boolean;
}

let mermaidInstance: any = null;

export default function MermaidRenderer({ code, isStreaming }: Props) {
  const [svg, setSvg] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

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

  return (
    <div
      className="mermaid-svg-container w-full flex justify-center overflow-auto p-2"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
