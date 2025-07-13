import React from 'react';
import { OpenAIChatMessage } from '../../utils/OpenAI/OpenAI.types';

interface ResponseStatsProps {
  message: OpenAIChatMessage;
  onClose: () => void;
}

const ResponseStats: React.FC<ResponseStatsProps> = ({ message, onClose }) => {
  if (!message.usage) {
    return null;
  }

  const { usage, reasoningTime } = message; // Destructure usage and reasoningTime from message

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center z-50">
      <div className="bg-white px-6 py-3 rounded-lg shadow-xl max-w-sm mx-auto dark:bg-gray-800 text-gray-900 dark:text-gray-100">
        <h2 className="text-xl font-bold mb-4 mt-1">Response Statistics</h2>
        <div className="grid grid-cols-2 gap-x-4">
          <div className="py-1 px-2 font-semibold">Time to First Token:</div>
          <div className="py-1 px-2">{usage.timeToFirstToken?.toFixed(2) || 'N/A'} s</div>

          <div className="py-1 px-2 font-semibold">Reasoning Time:</div>
          <div className="py-1 px-2">{reasoningTime?.toFixed(2) || 'N/A'} s</div>

          <div className="py-1 px-2 font-semibold">Total Time:</div>
          <div className="py-1 px-2">{usage.totalTime?.toFixed(2) || 'N/A'} s</div>

          <div className="py-1 px-2 font-semibold">Tokens per second:</div>
          <div className="py-1 px-2">{usage.tokensPerSecond?.toFixed(2) || 'N/A'}</div>

          <div className="py-1 px-2 font-semibold">Total tokens:</div>
          <div className="py-1 px-2">{usage.total_tokens}</div>

          <div className="py-1 px-2 font-semibold">Prompt tokens:</div>
          <div className="py-1 px-2">{usage.prompt_tokens}</div>

          <div className="py-1 px-2 font-semibold">Reasoning tokens:</div>
          <div className="py-1 px-2">{usage.completion_tokens_details?.reasoning_tokens || 'N/A'}</div>

          <div className="py-1 px-2 font-semibold">Completion Tokens:</div>
          <div className="py-1 px-2">{usage.completion_tokens}</div>

          <div className="py-1 px-2 font-semibold">Cached Tokens:</div>
          <div className="py-1 px-2">{usage.prompt_tokens_details?.cached_tokens || 'N/A'}</div>

          <div className="py-1 px-2 font-semibold">Cost:</div>
          <div className="py-1 px-2">$ {usage.cost?.toFixed(6) || 'N/A'}</div>
        </div>
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResponseStats;
