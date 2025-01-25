import React from "react";
import { MdExpandMore } from "react-icons/md";
export default function Dropdown(_a) {
    var label = _a.label, options = _a.options, value = _a.value, className = _a.className, onSelect = _a.onSelect;
    var _b = React.useState(false), show = _b[0], setShow = _b[1];
    var handleSelect = function (option) {
        onSelect(option);
        setShow(false);
    };
    return (<div className="relative flex flex-col rounded">
      <label className="text-xs font-medium text-gray-700">{label}</label>
      <button className={"text-md mt-2 flex flex-row items-center justify-between rounded border border-gray-300 p-2 focus:outline-none ".concat(className)} onClick={function () { return setShow(!show); }}>
        {value}

        <MdExpandMore />
      </button>

      {show && (<div className="absolute bottom-0 right-0 z-[100] flex min-w-full translate-y-[calc(100%+10px)] flex-col items-stretch rounded border border-gray-300 bg-white py-2 shadow">
          {label && (<span className="px-4 py-2 text-sm font-medium text-gray-700">
              {label.toUpperCase()}
            </span>)}
          {options.map(function (option, i) { return (<button key={i} className={"px-4 py-2 text-left text-gray-700 ".concat(value === option.value
                    ? "cursor-auto bg-blue-500 text-white"
                    : "hover:bg-gray-100")} onClick={function () { return handleSelect(option.value); }}>
              {option.label}
            </button>); })}
        </div>)}
    </div>);
}
