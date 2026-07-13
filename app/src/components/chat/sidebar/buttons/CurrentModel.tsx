import React from "react";
import { useOpenAI } from "@/context/OpenAIProvider";
import Dropdown from "./../../../input/Dropdown";
import Switch from "./../../../input/Switch";
import SegmentedControl from "./../../../input/SegmentedControl";
import useModels from "./../../../hooks/useModels";
import { OpenAIConfig } from '@/utils/OpenAI';

type Props = {};

export default function CurrentModel({}: Props) {
  const { config, updateConfig } = useOpenAI();
  const { models, loadingModels } = useModels();

  const handleUpdateConfig = <K extends keyof OpenAIConfig>(
    id: K,
    value: OpenAIConfig[K] | undefined
  ) => {
    updateConfig({
      [id]: value,
    });
  };

  return (
    <div className="p-1 text-primary">
      <h3 className="text-sm font-medium">CURRENT MODEL</h3>
      <Dropdown
        options={
          loadingModels
            ? []
            : (models.map(({ id }) => ({ label: id, value: id })) as any)
        }
        className="border-white/10 text-primary/80"
        value={config.model}
        onSelect={(option) => handleUpdateConfig("model", option)}
      />

      {/* Wrapping div to apply context sensitive padding and margin */}
      <div className="mt-2 pl-1">
        <SegmentedControl
          label="Variant"
          options={[
            { label: "None", value: "none" },
            { label: "Nitro", value: "nitro" },
            { label: "Exacto", value: "exacto" },
          ]}
          value={config.variant || "none"}
          onChange={(value) => handleUpdateConfig("variant", value as any)}
        />
        {config.variant && config.variant !== "none" && (
          <div className="text-[11px] text-white/60 italic leading-snug mb-2 pl-1">
            {config.variant === "nitro" ? (
              <>
                Prioritizes speed (throughput).{" "}
                <a
                  href="https://openrouter.ai/docs/guides/routing/model-variants/nitro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-white transition-colors"
                >
                  Read docs
                </a>
              </>
            ) : (
              <>
                Prioritizes quality/reliability (tool-calling).{" "}
                <a
                  href="https://openrouter.ai/docs/guides/routing/model-variants/exacto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-white transition-colors"
                >
                  Read docs
                </a>
              </>
            )}
          </div>
        )}
        {(config.model?.startsWith("google/") || config.model?.startsWith("openai/") || config.model?.startsWith("~google/") || config.model?.startsWith("~openai/")) && (
          <SegmentedControl
            label="Service Tier"
            options={[
              { label: "Normal", value: "default" },
              { label: "Flex", value: "flex" },
            ]}
            value={config.service_tier || "flex"}
            onChange={(value) => handleUpdateConfig("service_tier", value as any)}
          />
        )}
        <div className="flex flex-col gap-y-1 my-2">
          <label className="text-sm font-medium opacity-80">Reasoning Effort</label>
          <div className="flex flex-wrap gap-1 bg-black/20 p-1 rounded-md">
            {[
              { label: "Not Set", value: "not-set" },
              { label: "None", value: "none" },
              { label: "Low", value: "low" },
              { label: "Medium", value: "medium" },
              { label: "High", value: "high" },
              { label: "xHigh", value: "xhigh" },
              { label: "Max", value: "max" },
            ].map((option) => {
              const isActive = (config.reasoning?.effort || "not-set") === option.value;
              return (
                <button
                  key={option.value}
                  onClick={() => {
                    const effort = option.value === "not-set" ? undefined : (option.value as any);
                    handleUpdateConfig("reasoning", {
                      ...(config.reasoning || {}),
                      effort,
                    });
                  }}
                  className={`px-2 py-1 text-xs font-medium rounded transition-all duration-200 ${
                    isActive
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
        <Switch
          label="Enable Model Web Search"
          checked={!!config.isOnline}
          onChange={(checked) => updateConfig({ isOnline: checked })}
        />
      </div>
    </div>
  );
}
