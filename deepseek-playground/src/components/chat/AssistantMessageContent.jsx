var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from "react";
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
var syntaxTheme = oneDark;
export default function AssistantMessageContent(_a) {
    var content = _a.content, props = __rest(_a, ["content"]);
    var MarkdownComponents = {
        // Work around for not rending <em> and <strong> tags
        em: function (_a) {
            var node = _a.node, inline = _a.inline, className = _a.className, children = _a.children, props = __rest(_a, ["node", "inline", "className", "children"]);
            return (<span className={className} {...props}>
          _{children}_
        </span>);
        },
        strong: function (_a) {
            var node = _a.node, inline = _a.inline, className = _a.className, children = _a.children, props = __rest(_a, ["node", "inline", "className", "children"]);
            return (<span className={className} {...props}>
          __{children}__
        </span>);
        },
        pre: function (_a) {
            var node = _a.node, inline = _a.inline, className = _a.className, children = _a.children, props = __rest(_a, ["node", "inline", "className", "children"]);
            return (<pre className={"m-0 ".concat(className || "")} {...props}>
          {children}
        </pre>);
        },
        math: function (props) { return <MathJax.Node formula={props.value}/>; },
        inlineMath: function (props) { return <MathJax.Node inline formula={props.value}/>; },
        code: function (_a) {
            var _b;
            var node = _a.node, inline = _a.inline, className = _a.className, props = __rest(_a, ["node", "inline", "className"]);
            var hasLang = /language-(\w+)/.exec(className || "");
            var hasMeta = (_b = node === null || node === void 0 ? void 0 : node.data) === null || _b === void 0 ? void 0 : _b.meta;
            var applyHighlights = function (applyHighlights) {
                var _a, _b;
                if (hasMeta) {
                    var RE = /{([\d,-]+)}/;
                    var metadata = (_a = node.data.meta) === null || _a === void 0 ? void 0 : _a.replace(/\s/g, "");
                    var strlineNumbers = (RE === null || RE === void 0 ? void 0 : RE.test(metadata))
                        ? (_b = RE === null || RE === void 0 ? void 0 : RE.exec(metadata)) === null || _b === void 0 ? void 0 : _b[1]
                        : "0";
                    var highlightLines = rangeParser(strlineNumbers || "0");
                    var highlight = highlightLines;
                    var data = highlight.includes(applyHighlights)
                        ? "highlight"
                        : "";
                    return { data: data };
                }
                else {
                    return {};
                }
            };
            return hasLang ? (<SyntaxHighlighter style={syntaxTheme} language={hasLang[1]} PreTag="div" className="overflow-hidden rounded-md" showLineNumbers={true} wrapLines={hasMeta} useInlineStyles={true} lineProps={applyHighlights}>
          {props.children}
        </SyntaxHighlighter>) : (<code className={className} {...props}/>);
        },
    };
    return (<ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]} components={MarkdownComponents} {...props}>
      {content}
    </ReactMarkdown>);
}
