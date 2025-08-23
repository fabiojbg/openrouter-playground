import React from "react";
import { useOpenAI } from "@/context/OpenAIProvider";
import { MdSend, MdUndo } from "react-icons/md"; // Added MdUndo

type Props = {};

export default function ChatInput({}: Props) {
  const { addMessage, loading, messages, removeLastMessage, loadingAuth, loadingModels } = useOpenAI(); // Destructure loadingAuth and loadingModels
  const textAreaRef = React.useRef<HTMLTextAreaElement>(null);
  const isSubmittingRef = React.useRef(false); // New: Local flag to prevent double submission

  const [input, setInput] = React.useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Always prevent default first

    if (loading || isSubmittingRef.current) {
      // If already loading (globally) or locally submitting, ignore this call
      return;
    }

    isSubmittingRef.current = true; // Set local flag to true
    addMessage(input, true, "user");
    setInput("");

    // Reset the local flag after a short delay.
    // This allows the global `loading` state from `useOpenAI` to catch up
    // and correctly manage subsequent submission attempts.
    setTimeout(() => {
      isSubmittingRef.current = false;
    }, 500); // Adjust delay if needed, 500ms is a reasonable starting point
  };

  React.useEffect(() => {
    const resize = () => {
      if (textAreaRef.current) {
        textAreaRef.current.style.height = "40px";
        textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
      }
    };

    resize();
  }, [input]);

  // Handle submitting with enter
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        // Pass a synthetic event or null, as the actual event object from keydown
        // is not fully compatible with React.FormEvent<HTMLFormElement>
        // when called from handleSubmit directly. The `e.preventDefault()` is handled above.
        handleSubmit(e as any); // The `e as any` is necessary here due to type mismatch
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleSubmit]); // handleSubmit is a dependency and will recreate, detaching/attaching listener each time

  return (
    <div className="fixed bottom-0 flex h-40 w-full bg-gradient-to-t from-[rgb(var(--bg-secondary))] to-transparent md:w-[calc(100%-260px)]">
      <form
        className="mx-auto flex h-full w-full max-w-4xl items-end justify-center p-4 pb-10"
        onSubmit={handleSubmit}
      >
        <div className="relative flex w-full flex-row rounded border border-stone-500/20 bg-tertiary shadow-xl">
          <textarea
            ref={textAreaRef}
            className="max-h-[200px] w-full resize-none border-none bg-tertiary p-4 text-primary outline-none"
            onChange={handleChange}
            value={input}
            rows={1}
            disabled={loading || loadingAuth || loadingModels} // Disable if loading, auth is loading, or models are loading
          />
          {messages.length > 0 && ( // Only show undo button if there are messages
            <button
              type="button" // Changed to type="button" to prevent form submission
              onClick={removeLastMessage}
              className="rounded p-4 text-primary hover:bg-primary/50"
              title="Remove last message"
              disabled={loading || loadingAuth || loadingModels} // Disable if loading, auth is loading, or models are loading
            >
              <MdUndo />
            </button>
          )}
          <button
            type="submit"
            className="rounded p-4 text-primary hover:bg-primary/50"
            disabled={loading || loadingAuth || loadingModels} // Disable if loading, auth is loading, or models are loading
          >
            {loading || loadingAuth || loadingModels ? ( // Show spinner if any of these are loading
              <div className="mx-auto h-5 w-5 animate-spin rounded-full border-b-2 border-white" />
            ) : (
              <MdSend />
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
