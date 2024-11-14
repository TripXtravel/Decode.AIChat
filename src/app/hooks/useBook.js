import React, { useEffect } from "react";

export default function useBook() {
  useEffect(() => {
    fetchOffers();
  }, []);
  return <div>useBook</div>;
}
