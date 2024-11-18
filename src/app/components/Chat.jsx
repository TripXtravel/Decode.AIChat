"use client";
import { useState } from "react";

import { useMessages } from "../context/MessagesContext";

export default function Chat() {
  const [input, setInput] = useState("");
  const { addMessage, params } = useMessages();

  function handleOnSubmit(e) {
    e.preventDefault();
    addMessage(e, input);
    setInput("");
  }

  return (
    <form
      className="flex flex-col gap-4 oveflow-auto h-[100%] w-full"
      onSubmit={handleOnSubmit}
    >
      <div className="mt-auto w-full flex gap-4 flex-row border-t border-gray-300 relative rounded-b-[16px] shadow-inner shadow-[inset_0px_2px_6px_rgba(0,0,0,0.5)]">
        <input
          type="text"
          className="w-[100%] h-[70px]  rounded-b-[16px] p-2 focus:outline-none focus:ring-0"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-200 p-4 h-[66px] w-[100px] rounded-br-[16px] absolute right-[1px] top-[2px] border-gray-300 border-l"
        >
          Send
        </button>
      </div>
    </form>
  );
}
