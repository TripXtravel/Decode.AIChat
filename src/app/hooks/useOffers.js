"use client";
import { useEffect, useState } from "react";
import { useMessages } from "../context/MessagesContext";

export default function useOffers() {
  const { params } = useMessages();
  const [offers, setOffers] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const response = await fetch(
          "https://sunbeam-healthy-coyote.ngrok-free.app/packages/search",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "ngrok-skip-browser-warning": true,
            },
            body: JSON.stringify({ SearchParameters: params }),
          }
        );

        console.log(response, "RESPONSE");

        const data = await response.json();

        if (data.status !== 400) {
          setOffers(data);
        } else {
          setOffers({});
        }

        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching offers:", error);
        setIsLoading(false);
      }
    };

    fetchOffers();
  }, []);

  console.log(offers, "OFFERS");
  return { data: offers, isLoading };
}
