"use client";
import Offers from "../components/offers";
import { useMessages } from "../context/MessagesContext";
import useOffers from "../hooks/useOffers";

export default function page() {
  const { messages } = useMessages();
  console.log(messages, "MESSAGES");
  const { data, isLoading } = useOffers();

  return isLoading ? (
    <div className="text-lg flex w-[100%] h-[100vh] justify-center items-center">
      Loading...
    </div>
  ) : (
    <Offers data={data} isLoading={isLoading} />
  );
}
