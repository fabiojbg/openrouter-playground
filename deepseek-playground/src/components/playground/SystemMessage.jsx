import { useOpenAI } from "@/context/OpenAIProvider";
import React from "react";
import TextArea from "../input/TextArea";
export default function SystemMessage(_a) {
    var _b = useOpenAI(), updateSystemMessage = _b.updateSystemMessage, systemMessage = _b.systemMessage;
    return (<TextArea title="System" className="grow" placeholder="You are a helpful assistant." value={systemMessage.content} onChange={function (e) { return updateSystemMessage(e.target.value); }}/>);
}
