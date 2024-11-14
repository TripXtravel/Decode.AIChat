"use client";
// contexts/MessageContext.js
import { createContext, useContext, useState } from "react";
import { sendToXAI } from "../routes/sendMessage";
import { parseStringToObj } from "../utils/parseStringToObj";

// Create a context with a default value
const MessageContext = createContext();

// Custom hook to use the MessageContext
export const useMessages = () => useContext(MessageContext);

// MessageProvider component to wrap the app and provide the context

export const MessageProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [params, setParams] = useState(null);

  // Function to add a message
  const addMessage = async (e, userMessage) => {
    e.preventDefault();

    setIsLoading(true);
    const updatedMessage = [
      ...messages,
      { role: "user", content: userMessage },
    ];

    setMessages(updatedMessage);

    try {
      const data = await sendToXAI(updatedMessage);

      const assistant = data.choices[0].message;

      setIsLoading(false);
      setMessages((prev) => [...prev, assistant]);

      const obj = await parseStringToObj(assistant.content);

      setParams(obj);
    } catch (error) {
      setIsLoading(false);
    }
  };

  // Function to clear messages
  const clearMessages = () => {
    setMessages([]);
  };

  return (
    <MessageContext.Provider
      value={{ messages, addMessage, clearMessages, isLoading, params }}
    >
      {children}
    </MessageContext.Provider>
  );
};
