import { useOpenAI } from "@/context/OpenAIProvider";
import React from "react";
import Dropdown from "../input/Dropdown";
import Slider from "../input/Slider";
import { OpenAIConfig } from "@/utils/OpenAI";
import useModels from "../hooks/useModels";

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
