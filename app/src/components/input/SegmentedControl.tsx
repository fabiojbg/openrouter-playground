import React from 'react';

type Option<T> = {
  label: string;
  value: T;
};

interface SegmentedControlProps<T extends string> {
  options: Option<T>[];
  value: T;
  onChange: (value: T) => void;
  label?: string;
}

export default function SegmentedControl<T extends string>({
  options,
  value,
  onChange,
  label,
}: SegmentedControlProps<T>) {
  return (
    <div className="flex items-center justify-between my-2">
      {label && <label className="text-sm font-medium opacity-80">{label}</label>}
      <div className="flex bg-black/20 p-1 rounded-md">
        {options.map((option) => {
          const isActive = value === option.value;
          return (
            <button
              key={option.value}
              onClick={() => onChange(option.value)}
              className={`px-2 py-1 text-xs font-medium rounded-md transition-all duration-200 ${isActive
                ? 'bg-white/20 text-white shadow-sm'
                : 'text-white/50 hover:text-white/80'
                }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
