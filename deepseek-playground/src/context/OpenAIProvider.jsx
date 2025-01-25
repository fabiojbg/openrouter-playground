var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { clearHistory, getHistory, storeConversation, deleteConversationFromHistory, updateConversation, } from "@/utils/History";
import { defaultConfig, OpenAIChatModels } from "@/utils/OpenAI";
import React, { useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/context/AuthProvider";
var CHAT_ROUTE = "/";
var defaultContext = {
    systemMessage: {
        role: "system",
        content: "You are a helpful AI chatbot.",
    },
    messages: [],
    config: defaultConfig,
    updateSystemMessage: function (content) { },
    addMessage: function () { },
    removeMessage: function (id) { },
    conversationName: "",
    conversationId: "",
    deleteConversation: function () { },
    updateConversationName: function () { },
    conversations: {},
    clearConversations: function () { },
    clearConversation: function () { },
    loadConversation: function (id, conversation) { },
    toggleMessageRole: function (id) { },
    updateMessageContent: function (id, content) { },
    updateConfig: function (newConfig) { },
    submit: function () { },
    loading: true,
    error: "",
};
var OpenAIContext = React.createContext(defaultContext);
export default function OpenAIProvider(_a) {
    var _this = this;
    var children = _a.children;
    var token = useAuth().token;
    var router = useRouter();
    var _b = React.useState(false), loading = _b[0], setLoading = _b[1];
    var _c = React.useState(""), error = _c[0], setError = _c[1];
    // Conversation state
    var _d = React.useState({}), conversations = _d[0], setConversations = _d[1];
    var _e = React.useState(""), conversationId = _e[0], setConversationId = _e[1];
    var _f = React.useState(""), conversationName = _f[0], setConversationName = _f[1];
    var _g = React.useState(defaultContext.systemMessage), systemMessage = _g[0], setSystemMessage = _g[1];
    var _h = React.useState(defaultConfig), config = _h[0], setConfig = _h[1];
    var _j = React.useState([]), messages = _j[0], setMessages = _j[1];
    // Load conversation from local storage
    useEffect(function () {
        setConversations(getHistory());
    }, []);
    var updateSystemMessage = function (content) {
        setSystemMessage({
            role: "system",
            content: content,
        });
    };
    var removeMessage = function (id) {
        setMessages(function (prev) {
            return __spreadArray([], prev.filter(function (message) { return message.id !== id; }), true);
        });
    };
    var toggleMessageRole = function (id) {
        setMessages(function (prev) {
            var index = prev.findIndex(function (message) { return message.id === id; });
            if (index === -1)
                return prev;
            var message = prev[index];
            return __spreadArray(__spreadArray(__spreadArray([], prev.slice(0, index), true), [
                __assign(__assign({}, message), { role: message.role === "user" ? "assistant" : "user" })
            ], false), prev.slice(index + 1), true);
        });
    };
    var updateConfig = function (newConfig) {
        setConfig(function (prev) {
            // If model changes set max tokens to half of the model's max tokens
            if (newConfig.model && newConfig.model !== prev.model) {
                newConfig.max_tokens = Math.floor(OpenAIChatModels[newConfig.model].maxLimit / 2);
            }
            return __assign(__assign({}, prev), newConfig);
        });
    };
    var updateMessageContent = function (id, content) {
        setMessages(function (prev) {
            var index = prev.findIndex(function (message) { return message.id === id; });
            if (index === -1)
                return prev;
            var message = prev[index];
            return __spreadArray(__spreadArray(__spreadArray([], prev.slice(0, index), true), [
                __assign(__assign({}, message), { content: content })
            ], false), prev.slice(index + 1), true);
        });
    };
    var handleStoreConversation = useCallback(function () {
        if (messages.length === 0)
            return;
        var conversation = {
            name: conversationName,
            systemMessage: systemMessage,
            messages: messages,
            config: config,
            lastMessage: Date.now(),
        };
        var id = storeConversation(conversationId, conversation);
        setConversationId(id);
        setConversations(function (prev) {
            var _a;
            return (__assign(__assign({}, prev), (_a = {}, _a[id] = conversation, _a)));
        });
        if (router.pathname === CHAT_ROUTE)
            router.push("/chat/".concat(id));
    }, [conversationId, messages]);
    useEffect(function () {
        handleStoreConversation();
    }, [messages, systemMessage, config]);
    var loadConversation = function (id, conversation) {
        setConversationId(id);
        var systemMessage = conversation.systemMessage, messages = conversation.messages, config = conversation.config, name = conversation.name;
        setSystemMessage(systemMessage);
        setMessages(messages);
        updateConfig(config);
        setConversationName(name);
    };
    var clearConversations = useCallback(function () {
        clearHistory();
        setMessages([]);
        setConversationId("");
        setConversations({});
        router.push("/");
    }, []);
    var clearConversation = function () {
        setMessages([]);
        setSystemMessage(defaultContext.systemMessage);
        setConversationId("");
    };
    var deleteConversation = function (id) {
        deleteConversationFromHistory(id);
        setConversations(function (prev) {
            var _a = prev, _b = id, _ = _a[_b], rest = __rest(_a, [typeof _b === "symbol" ? _b : _b + ""]);
            return rest;
        });
        if (id === conversationId)
            clearConversation();
    };
    var updateConversationName = function (id, name) {
        setConversations(function (prev) {
            var _a;
            var conversation = prev[id];
            if (!conversation)
                return prev;
            return __assign(__assign({}, prev), (_a = {}, _a[id] = __assign(__assign({}, conversation), { name: name }), _a));
        });
        if (id === conversationId)
            setConversationName(name);
        updateConversation(id, { name: name });
    };
    var submit = useCallback(function (messages_) {
        if (messages_ === void 0) { messages_ = []; }
        return __awaiter(_this, void 0, void 0, function () {
            var decoder, _a, body, ok, reader, value_1, chunkValue, error_2, done, message_1, _b, value_2, doneReading, chunkValue, error_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (loading)
                            return [2 /*return*/];
                        setLoading(true);
                        messages_ = messages_.length ? messages_ : messages;
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 8, , 9]);
                        decoder = new TextDecoder();
                        return [4 /*yield*/, fetch("https://api.deepseek.com/api/completion", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                    Authorization: "Bearer ".concat(token),
                                },
                                body: JSON.stringify(__assign(__assign({}, config), { messages: __spreadArray([systemMessage], messages_, true).map(function (_a) {
                                        var role = _a.role, content = _a.content;
                                        return ({
                                            role: role,
                                            content: content,
                                        });
                                    }) })),
                            })];
                    case 2:
                        _a = _c.sent(), body = _a.body, ok = _a.ok;
                        if (!body)
                            return [2 /*return*/];
                        reader = body.getReader();
                        if (!!ok) return [3 /*break*/, 4];
                        return [4 /*yield*/, reader.read()];
                    case 3:
                        value_1 = (_c.sent()).value;
                        chunkValue = decoder.decode(value_1);
                        error_2 = JSON.parse(chunkValue).error;
                        throw new Error((error_2 === null || error_2 === void 0 ? void 0 : error_2.message) ||
                            "Failed to fetch response, check your API key and try again.");
                    case 4:
                        done = false;
                        message_1 = {
                            id: messages_.length,
                            role: "assistant",
                            content: "",
                        };
                        setMessages(function (prev) {
                            message_1.id = prev.length;
                            return __spreadArray(__spreadArray([], prev, true), [message_1], false);
                        });
                        _c.label = 5;
                    case 5:
                        if (!!done) return [3 /*break*/, 7];
                        return [4 /*yield*/, reader.read()];
                    case 6:
                        _b = _c.sent(), value_2 = _b.value, doneReading = _b.done;
                        done = doneReading;
                        chunkValue = decoder.decode(value_2);
                        message_1.content += chunkValue;
                        updateMessageContent(message_1.id, message_1.content);
                        return [3 /*break*/, 5];
                    case 7: return [3 /*break*/, 9];
                    case 8:
                        error_1 = _c.sent();
                        setMessages(function (prev) {
                            return __spreadArray(__spreadArray([], prev, true), [
                                {
                                    id: prev.length,
                                    role: "assistant",
                                    content: error_1.message,
                                },
                            ], false);
                        });
                        return [3 /*break*/, 9];
                    case 9:
                        setLoading(false);
                        return [2 /*return*/];
                }
            });
        });
    }, [config, messages, systemMessage, loading, token]);
    var addMessage = useCallback(function (content, submit_, role) {
        if (content === void 0) { content = ""; }
        if (submit_ === void 0) { submit_ = false; }
        if (role === void 0) { role = "user"; }
        setMessages(function (prev) {
            var messages = __spreadArray(__spreadArray([], prev, true), [
                {
                    id: prev.length,
                    role: role,
                    content: content || "",
                },
            ], false);
            submit_ && submit(messages);
            return messages;
        });
    }, [submit]);
    var value = React.useMemo(function () { return ({
        systemMessage: systemMessage,
        messages: messages,
        config: config,
        loading: loading,
        updateSystemMessage: updateSystemMessage,
        addMessage: addMessage,
        removeMessage: removeMessage,
        conversationId: conversationId,
        conversationName: conversationName,
        updateConversationName: updateConversationName,
        deleteConversation: deleteConversation,
        loadConversation: loadConversation,
        clearConversation: clearConversation,
        conversations: conversations,
        clearConversations: clearConversations,
        toggleMessageRole: toggleMessageRole,
        updateMessageContent: updateMessageContent,
        updateConfig: updateConfig,
        submit: submit,
        error: error,
    }); }, [
        systemMessage,
        messages,
        config,
        loading,
        addMessage,
        submit,
        conversationId,
        conversations,
        clearConversations,
        error,
    ]);
    return (<OpenAIContext.Provider value={value}>{children}</OpenAIContext.Provider>);
}
export var useOpenAI = function () { return React.useContext(OpenAIContext); };
