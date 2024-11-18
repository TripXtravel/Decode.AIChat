"use client";
import { useEffect, useRef } from "react";
import { useMessages } from "../context/MessagesContext";
import Link from "next/link";

export default function Messages() {
  const { messages, isLoading, params } = useMessages();

  const messageContainerRef = useRef(null);

  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight;
    }
  }, [messages]); // Scroll to the bottom whenever the messages change

  return (
    <div className="w-[100%] p-4 h-[500px] flex flex-col justify-end overflow-auto bg-gradient-to-r from-purple-100 to-blue-300 rounded-tr-[16px] rounded-tl-[16px]">
      {messages.length === 0 ? (
        <div className="flex justify-center items-center w-[100%] h-[100%] text-xl">
          Hello, My Friend! Ready to plan your next adventure?
        </div>
      ) : (
        <div
          className="flex flex-col gap-10 relative overflow-auto"
          ref={messageContainerRef}
        >
          {messages.map((message, index) => (
            <div
              key={index}
              className={
                message.role !== "assistant" ? "flex justify-end" : "flex"
              }
            >
              {message.role === "assistant" ? (
                <div className="flex bg-green-200 p-4 rounded-[8px] max-w-[50%] relative right-[0]">
                  {message.content}
                </div>
              ) : message.role === "user" ? (
                <div className="bg-blue-500 p-4 rounded-[8px] max-w-[50%]">
                  {message.content}
                </div>
              ) : null}
            </div>
          ))}
          {params && (
            <div className="text-lg font-bold p-4 rounded-[8px] relative right-[0] bg-green-200 max-w-[100%] ">
              <Link href="/offers">
                <div className="flex flex-row gap-2 items-center">
                  Click here to see your tailor made Packages
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z"
                    />
                  </svg>
                </div>
              </Link>
            </div>
          )}
        </div>
      )}
      {isLoading && <div>Searching...</div>}
    </div>
  );
}
