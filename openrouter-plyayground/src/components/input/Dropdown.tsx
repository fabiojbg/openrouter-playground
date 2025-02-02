import { useOpenAI } from "@/context/OpenAIProvider";
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

  useEffect(() => {
    if (show) {
      searchInputRef.current?.focus();
    }
  }, [show]);

  const handleSelect = (option: string) => {
    onSelect(option);
    setShow(false);
  };

  const filteredOptions = options.filter(option =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative flex flex-col rounded">
      <label className="text-xs font-medium text-gray-700">{label}</label>
      <button
        className={`text-md mt-2 flex flex-row items-center justify-between rounded border border-gray-300 p-2 focus:outline-none ${className}`}
        onClick={() => setShow(!show)}
      >
        {value}
        <MdExpandMore />
      </button>

      {show && (
        <div className="absolute max-h-64 overflow-y-scroll bottom-0 right-0 z-[100] flex min-w-full translate-y-[calc(100%+10px)] flex-col items-stretch rounded border border-gray-300 bg-white py-2 shadow">
          {label && (
            <span className="px-4 py-2 text-sm font-medium text-gray-700">
              {label.toUpperCase()}
            </span>
          )}
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Search..."
            className="px-4 py-2 border border-gray-300 rounded mb-2 text-black"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {filteredOptions.map((option, i) => (
            <button
              key={i}
              className={`px-4 py-2 text-left text-gray-700 ${
                value === option.value
                  ? "cursor-auto bg-blue-500 text-white"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
