import React from "react";
import { useOpenAI } from "@/context/OpenAIProvider";
import Dropdown from "./../../../input/Dropdown";
import useModels from "./../../../hooks/useModels";
export default function CurrentModel(_a) {
    var _b = useOpenAI(), config = _b.config, updateConfig = _b.updateConfig;
    var _c = useModels(), models = _c.models, loadingModels = _c.loadingModels;
    var handleUpdateConfig = function (id, value) {
        var _a;
        updateConfig((_a = {},
            _a[id] = value,
            _a));
    };
    return (<div className="p-1 text-primary">
      <h3 className="text-sm font-medium">CURRENT MODEL</h3>
      <Dropdown options={loadingModels
            ? []
            : models.map(function (_a) {
                var id = _a.id;
                return ({ label: id, value: id });
            })} className="border-white/10 text-primary/80" value={config.model} onSelect={function (option) { return handleUpdateConfig("model", option); }}/>
    </div>);
}
