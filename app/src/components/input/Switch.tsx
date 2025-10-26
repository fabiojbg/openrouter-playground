import React from 'react';

interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
}

export default function Switch({ checked, onChange, label }: SwitchProps) {
  return (
    <div className="flex items-center justify-between text-sm">
      <label htmlFor={`switch-${label}`} className="font-medium cursor-pointer">
        {label}
      </label>
      <button
        id={`switch-${label}`}
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={`
          relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200
          ${checked ? 'bg-blue-600' : 'bg-white/20'}
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600
        `}
      >
        <span className="sr-only">Toggle {label}</span>
        <span
          aria-hidden="true"
          className={`
            pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200
            ${checked ? 'translate-x-5' : 'translate-x-0'}
          `}
        />
      </button>
    </div>
  );
}
