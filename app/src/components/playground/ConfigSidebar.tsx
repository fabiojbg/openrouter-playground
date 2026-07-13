import { useOpenAI } from "@/context/OpenAIProvider";
import React from "react";
import Dropdown from "../input/Dropdown";
import Slider from "../input/Slider";
import { OpenAIConfig } from "@/utils/OpenAI";
import useModels from "../hooks/useModels";
import SegmentedControl from "../input/SegmentedControl";

type Props = {};

export default function ConfigSidebar({}: Props) {
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
    <div className="hidden min-w-[338px] flex-col items-stretch gap-y-4 p-4 md:flex">
      <Dropdown
        label="Model"
        options={
          loadingModels
            ? []
            : (models.map(({ id }) => ({ label: id, value: id })) as any)
        }
        value={config.model}
        onSelect={(option) => handleUpdateConfig("model", option)}
      />
      <div className="text-sm text-gray-600 space-y-1 mt-1">
        <div className="mb-4">
          <SegmentedControl
            label="Variant"
            options={[
              { label: "None", value: "none" },
              { label: "Nitro", value: "nitro" },
              { label: "Exacto", value: "exacto" },
            ]}
            value={config.variant || "none"}
            onChange={(value) => handleUpdateConfig("variant", value)}
          />
          {config.variant && config.variant !== "none" && (
            <div className="text-[11px] opacity-70 italic leading-snug pl-1 -mt-1">
              {config.variant === "nitro" ? (
                <>
                  Prioritizes speed (throughput).{" "}
                  <a
                    href="https://openrouter.ai/docs/guides/routing/model-variants/nitro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:opacity-100 transition-opacity"
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
                    className="underline hover:opacity-100 transition-opacity"
                  >
                    Read docs
                  </a>
                </>
              )}
            </div>
          )}
        </div>
        {(config.model?.startsWith("google/") || config.model?.startsWith("openai/") || config.model?.startsWith("~google/") || config.model?.startsWith("~openai/")) && (
          <div className="mb-4">
            <SegmentedControl
              label="Service Tier"
              options={[
                { label: "Normal", value: "default" },
                { label: "Flex", value: "flex" },
              ]}
              value={config.service_tier || "flex"}
              onChange={(value) => handleUpdateConfig("service_tier", value)}
            />
          </div>
        )}
        <div className="flex flex-col gap-y-1 mb-4">
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
        <div>
          Context Length:{" "}
          {models
            .find((model) => model.id === config.model)
            ?.context?.toLocaleString("en-US", { useGrouping: true }) || "N/A"}
        </div>
        <div>
          Input ($/1M tokens):{" $ "}
          {(
            parseFloat(
              models.find((model) => model.id === config.model)?.inputFee || "0"
            ) * 1000000
          ).toLocaleString("en-US", {
            minimumFractionDigits: 4,
            maximumFractionDigits: 6,
          }) || "0.000"}
        </div>
        <div>
          Output ($/1M tokens):{" $ "}
          {(
            parseFloat(
              models.find((model) => model.id === config.model)?.outputFee ||
                "0"
            ) * 1000000
          ).toLocaleString("en-US", {
            minimumFractionDigits: 3,
            maximumFractionDigits: 3,
          }) || "0.000"}
        </div>
      </div>

      <Slider
        label="temperature"
        range={[0, 1]}
        step={0.01}
        value={config.temperature as number}
        onChange={(value: OpenAIConfig["temperature"]) =>
          handleUpdateConfig("temperature", value)
        }
      />
      <Slider
        label="maximum length"
        range={[
          0,
          models.find((model) => model.id === config.model)?.maxLimit || 8192,
        ]}
        step={1}
        value={config.max_tokens as number}
        onChange={(value: OpenAIConfig["max_tokens"]) =>
          handleUpdateConfig("max_tokens", value)
        }
      />
      <Slider
        label="top p"
        range={[0, 1]}
        step={0.01}
        value={config.top_p as number}
        onChange={(value: OpenAIConfig["top_p"]) =>
          handleUpdateConfig("top_p", value)
        }
      />
      <Slider
        label="frequency penalty"
        range={[0, 1]}
        step={0.01}
        value={config.frequency_penalty as number}
        onChange={(value: OpenAIConfig["frequency_penalty"]) =>
          handleUpdateConfig("frequency_penalty", value)
        }
      />
      <Slider
        label="presence penalty"
        range={[0, 1]}
        step={0.01}
        value={config.presence_penalty as number}
        onChange={(value: OpenAIConfig["presence_penalty"]) =>
          handleUpdateConfig("presence_penalty", value)
        }
      />
    </div>
  );
}
