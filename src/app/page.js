"use client";
import Chat from "./components/Chat";
import Messages from "./components/Messages";

export default function Home() {
  return (
    <div className="relative grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)] bg-gradient-to-r from-purple-400 to-blue-500">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <div className="bg-gray-50  rounded-[16px] border border-gray-300 w-[80vw]  h-[100%] flex flex-col align-center ">
          <Messages />
          <Chat />
        </div>
      </main>
    </div>
  );
}
