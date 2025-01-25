import React from "react";
export default function TextArea(_a) {
    var title = _a.title, placeholder = _a.placeholder, _b = _a.className, className = _b === void 0 ? "" : _b, value = _a.value, onChange = _a.onChange;
    var _c = React.useState(value || ""), value_ = _c[0], setValue = _c[1];
    var handleChange = function (e) {
        setValue(e.target.value);
        onChange === null || onChange === void 0 ? void 0 : onChange(e);
    };
    return (<div className={"m-4 flex flex-col rounded border border-gray-300 p-4 ".concat(className)}>
      <label className="text-xs font-medium text-gray-700">
        {title.toUpperCase()}
      </label>
      <textarea className="text-md mt-2 flex-1 resize-none text-gray-700 focus:outline-none" placeholder={placeholder} value={value_} onChange={handleChange}/>
    </div>);
}
