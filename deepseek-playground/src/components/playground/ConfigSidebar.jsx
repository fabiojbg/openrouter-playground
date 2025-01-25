import { useOpenAI } from "@/context/OpenAIProvider";
import React from "react";
import Dropdown from "../input/Dropdown";
import Slider from "../input/Slider";
import { OpenAIChatModels } from "@/utils/OpenAI";
import useModels from "../hooks/useModels";
export default function ConfigSidebar(_a) {
    var _b = useOpenAI(), config = _b.config, updateConfig = _b.updateConfig;
    var _c = useModels(), models = _c.models, loadingModels = _c.loadingModels;
    var handleUpdateConfig = function (id, value) {
        var _a;
        updateConfig((_a = {},
            _a[id] = value,
            _a));
    };
    return (<div className="hidden min-w-[240px] flex-col items-stretch gap-y-4 p-4 md:flex">
      <Dropdown label="Model" options={loadingModels
            ? []
            : models.map(function (_a) {
                var id = _a.id;
                return ({ label: id, value: id });
            })} value={config.model} onSelect={function (option) { return handleUpdateConfig("model", option); }}/>
      <Slider label="temperature" range={[0, 1]} step={0.01} value={config.temperature} onChange={function (value) {
            return handleUpdateConfig("temperature", value);
        }}/>
      <Slider label="maximum length" range={[0, OpenAIChatModels[config.model].maxLimit || 8192]} step={1} value={config.max_tokens} onChange={function (value) {
            return handleUpdateConfig("max_tokens", value);
        }}/>
      <Slider label="top p" range={[0, 1]} step={0.01} value={config.top_p} onChange={function (value) {
            return handleUpdateConfig("top_p", value);
        }}/>
      <Slider label="frequency penalty" range={[0, 1]} step={0.01} value={config.frequency_penalty} onChange={function (value) {
            return handleUpdateConfig("frequency_penalty", value);
        }}/>
      <Slider label="presence penalty" range={[0, 1]} step={0.01} value={config.presence_penalty} onChange={function (value) {
            return handleUpdateConfig("presence_penalty", value);
        }}/>
    </div>);
}
