import React, { useState, useRef, useEffect } from "react";
import { MdExpandMore } from "react-icons/md";

type Props = {
  label?: string;
  options: { label: string; value: string }[];
  value: string;
  className?: string;
  onSelect: (option: string) => void;
};

export default function Dropdown({
  label,
  options,
  value,
  className,
  onSelect,
}: Props) {
  const [show, setShow] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null); // Add a ref for the dropdown container

  useEffect(() => {
    if (show) {
      searchInputRef.current?.focus();

      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          setShow(false);
        }
      };

      const handleClickOutside = (event: MouseEvent) => {
        if (
          show &&
          dropdownRef.current && // Check if dropdownRef exists
          !dropdownRef.current.contains(event.target as Node) // Check if click is outside the dropdown container
        ) {
          setShow(false);
        }
      };

      document.addEventListener("keydown", handleEscape);
      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("keydown", handleEscape);
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [show]);

  const handleSelect = (option: string) => {
    onSelect(option);
    setShow(false);
  };

  const filteredOptions = options.filter(option => {
    const lowerCaseLabel = option.label.toLowerCase();
    const searchWords = searchTerm.toLowerCase().split(" ").filter(Boolean); // Split by space and remove empty strings

    return searchWords.every(word => lowerCaseLabel.includes(word));
  });

  return (
    <div className="relative flex flex-col rounded w-full">
      {label && <label className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">{label}</label>}
      <button
        className={`text-sm flex flex-row items-center justify-between rounded border border-gray-200 dark:border-white/10 bg-secondary/30 hover:bg-secondary/60 py-1.5 px-3 focus:outline-none transition-all duration-200 dropdown-button text-primary/90 w-full ${className || ""}`}
        onClick={() => setShow(!show)}
      >
        <span className="truncate pr-4">{value}</span>
        <MdExpandMore className="text-lg opacity-60 flex-shrink-0" />
      </button>

      {show && (
        <div
          ref={dropdownRef}
          className="absolute top-full left-0 w-full z-[100] mt-1.5 flex flex-col rounded border border-gray-200 dark:border-white/10 bg-secondary shadow-2xl shadow-black/40 overflow-hidden"
        >
          {label && (
            <span className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-gray-400 border-b border-gray-200 dark:border-white/10 shrink-0">
              {label}
            </span>
          )}
          <div className="p-1.5 border-b border-gray-200 dark:border-white/10 shrink-0">
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search..."
              className="w-full px-2.5 py-1.5 text-xs bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none text-primary placeholder-gray-400 dark:placeholder-white/30"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex flex-col max-h-56 overflow-y-auto py-1 scrollbar scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-white/10 scrollbar-track-transparent">
            {filteredOptions.length === 0 ? (
              <span className="px-3 py-2 text-xs text-gray-500 dark:text-gray-400 text-center italic shrink-0">
                No models found
              </span>
            ) : (
              filteredOptions.map((option, i) => {
                const isActive = value === option.value;
                return (
                  <button
                    key={i}
                    className={`px-3 py-0.5 text-sm text-left truncate rounded transition-all duration-150 mx-1 my-0.5 shrink-0 ${isActive
                      ? "bg-blue-500/15 text-blue-600 dark:text-blue-400 font-semibold cursor-default"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white"
                      }`}
                    onClick={() => !isActive && handleSelect(option.value)}
                  >
                    {option.label}
                  </button>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
}
