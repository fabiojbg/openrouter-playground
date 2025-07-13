import React, { useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import rangeParser from "parse-numeric-range";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import tsx from "react-syntax-highlighter/dist/cjs/languages/prism/tsx";
import typescript from "react-syntax-highlighter/dist/cjs/languages/prism/typescript";
import scss from "react-syntax-highlighter/dist/cjs/languages/prism/scss";
import bash from "react-syntax-highlighter/dist/cjs/languages/prism/bash";
import markdown from "react-syntax-highlighter/dist/cjs/languages/prism/markdown";
import python from "react-syntax-highlighter/dist/cjs/languages/prism/python";
import cpp from "react-syntax-highlighter/dist/cjs/languages/prism/cpp";
import json from "react-syntax-highlighter/dist/cjs/languages/prism/json";
import MathJax from "react-mathjax";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

import "katex/dist/katex.min.css"; // `rehype-katex` does not import the CSS for you

SyntaxHighlighter.registerLanguage("tsx", tsx);
SyntaxHighlighter.registerLanguage("typescript", typescript);
SyntaxHighlighter.registerLanguage("scss", scss);
SyntaxHighlighter.registerLanguage("bash", bash);
SyntaxHighlighter.registerLanguage("markdown", markdown);
SyntaxHighlighter.registerLanguage("python", python);
SyntaxHighlighter.registerLanguage("cpp", cpp);
SyntaxHighlighter.registerLanguage("json", json);
SyntaxHighlighter.registerLanguage("json", json);

const syntaxTheme = oneDark;

type Props = {
  content: string;
  reasoning?: string;
  reasoningTime?: number; // Added reasoningTime prop
  isReasoning?: boolean; // Added isReasoning prop
};

export default function AssistantMessageContent({ content, reasoning, reasoningTime, isReasoning, ...props }: Props) {
  const reasoningRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reasoningRef.current) {
      reasoningRef.current.scrollTop = reasoningRef.current.scrollHeight;
    }
  }, [reasoning]);

  const MarkdownComponents: any = {
    // Work around for not rending <em> and <strong> tags
    em: ({ node, inline, className, children, ...props }: any) => {
      return (
        <em className={`${className} font-italic`} {...props}>
          {children}
        </em>
      );
    },
    strong: ({ node, inline, className, children, ...props }: any) => {
      return (
        <strong className={`${className} font-bold`} {...props}>
          {children}
        </strong>
      );
    },

    pre: ({ node, inline, className, children, ...props }: any) => {
      return (
        <pre className={`m-0 relative ${className || ""}`} {...props}>
          {children}
        </pre>
      );
    },

    math: (props: any) => <MathJax.Node formula={props.value} />,
    inlineMath: (props: any) => <MathJax.Node inline formula={props.value} />,

    code({ node, inline, className, ...props }: any) {
      const hasLang = /language-(\w+)/.exec(className || "");
      const hasMeta = node?.data?.meta;

      const applyHighlights: object = (applyHighlights: number) => {
        if (hasMeta) {
          const RE = /{([\d,-]+)}/;
          const metadata = node.data.meta?.replace(/\s/g, "");
          const strlineNumbers = RE?.test(metadata)
            ? RE?.exec(metadata)?.[1]
            : "0";
          const highlightLines = rangeParser(strlineNumbers || "0");
          const highlight = highlightLines;
          const data: string = highlight.includes(applyHighlights)
            ? "highlight"
            : "";
          return { data };
        } else {
          return {};
        }
      };

      return hasLang ? (
        <div className="relative">
        <SyntaxHighlighter
          style={syntaxTheme}
          language={hasLang[1]}
          PreTag="div"
          className="overflow-hidden rounded-md"
          showLineNumbers={true}
          wrapLines={hasMeta}
          useInlineStyles={true}
          lineProps={applyHighlights}
        >
          {props.children}
        </SyntaxHighlighter>
          <button
            onClick={() => {
              const codeContent = Array.isArray(props.children) 
                ? props.children.join('') 
                : props.children;
              // Check if navigator.clipboard and writeText are available
              if (typeof navigator !== 'undefined' && navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(codeContent);
              } else {
                // Fallback for environments where clipboard API is not available (e.g., older browsers, non-secure contexts)
                const textArea = document.createElement('textarea');
                textArea.value = codeContent;
                textArea.style.position = 'fixed'; // Avoid scrolling to bottom
                textArea.style.left = '-9999px'; // Move off-screen
                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();
                try {
                  document.execCommand('copy');
                } catch (err) {
                  console.error('Fallback: Oops, unable to copy', err);
                }
                document.body.removeChild(textArea);
              }
              // Show copied message
              const copiedMessage = document.createElement('div');
              copiedMessage.textContent = 'Copied to clipboard';
              copiedMessage.style.position = 'fixed';
              copiedMessage.style.top = '50%';
              copiedMessage.style.left = '50%';
              copiedMessage.style.transform = 'translate(-50%, -50%)';
              copiedMessage.style.backgroundColor = 'rgba(103, 235, 14, 0.64)';
              copiedMessage.style.color = 'white';
              copiedMessage.style.padding = '1rem 2rem';
              copiedMessage.style.borderRadius = '0.5rem';
              copiedMessage.style.zIndex = '10000';
              copiedMessage.style.fontSize = '1.25rem';
              copiedMessage.style.fontWeight = 'bold';
              document.body.appendChild(copiedMessage);
              setTimeout(() => {
                document.body.removeChild(copiedMessage);
              }, 3000);
            }}
            className="absolute right-2 top-2 rounded bg-gray-700/80 px-2 py-1 text-sm text-white backdrop-blur hover:bg-gray-600/80"
          >
            Copy
          </button>
        </div>
      ) : (
        <code className={className} {...props} />
      );
    },
  };

  return (
    <>
      {reasoning && (
        <>
          {reasoningTime !== undefined && (
            <p className="font-bold text-sm text-gray-500 dark:text-gray-400 mb-0 mt-3">
              Reasoning: ({reasoningTime.toFixed(1)}s)
            </p>
          )}          
          {reasoningTime === undefined && (
            <p className="font-bold text-sm text-gray-500 dark:text-gray-400 mb-0 mt-3">Reasoning:</p> )}            
          <div ref={reasoningRef} className="text-sm text-gray-500 dark:text-gray-400 max-h-60 overflow-y-auto">
            <ReactMarkdown
              remarkPlugins={[remarkMath]}
              rehypePlugins={[rehypeKatex]}
              components={MarkdownComponents}
              {...props}
            >
              {reasoning}
            </ReactMarkdown>
          </div>
        </>
      )}
      <ReactMarkdown
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeKatex]}
        components={MarkdownComponents}
        {...props}
      >
        {content}
      </ReactMarkdown>
    </>
  );
}
