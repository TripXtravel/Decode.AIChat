"use client";

import Hotel from "./components/Hotel";

export default function PackageCard({ offer, index }) {
  const { flight, hotel, packages } = offer;

  return (
    <div className="h-[100%] border border-gray-300 rounded-[16px] flex flex-col">
      <Hotel hotel={hotel} flight={flight} packages={packages} index={index} />
    </div>
  );
}
