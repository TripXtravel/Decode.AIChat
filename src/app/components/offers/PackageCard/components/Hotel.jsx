"use client";

import numberToWords from "number-to-words";
import Flight from "./Flight";
import Images from "./Images";
import { useWallet } from "@/app/context/WalletContext";
import { fetchBook } from "@/app/utils/fetchBook";

export default function Hotel({ hotel, flight, packages, index }) {
  const { onClickPay } = useWallet();
  const { name, checkIn, checkOut, rooms, images } = hotel;

  const summary = packages.find((pack) => pack.hotelid === parseInt(hotel.id));

  return (
    <div className="flex flex-row h-[100%] justify-between">
      <Images images={images} index={index} />
      <div className="flex flex-col  p-4">
        <div className="font-bold text-lg">{name}</div>
        <div className="text-l">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </div>
        <Flight flight={flight} />
        <div className="flex flex-row justify-end">
          <div className="flex flex-row items-center gap-2 border-[2px] border-gray-300 rounded-[16px] p-1 min-w-[100px] justify-center">
            <div className="text-sm font-bold">{summary.price?.currency}</div>
            <div className="text-lg font-bold "> {summary.price?.total}</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[200px] bg-gray-200 border-l border-gray-300 rounded-r-[16px] gap-1 relative min-w-[250px]">
        <div className="flex flex-col">
          <div className="border-b border-gray-300  rounded-tr-[16px] p-2 text-xs bg-gray-50">
            Check In: <br />
            <strong> {new Date(checkIn).toLocaleString()}</strong>
          </div>
          <div className="border-b border-gray-300 text-xs font-size p-1 bg-gray-50">
            Check Out: <br />{" "}
            <strong> {new Date(checkOut).toLocaleString()}</strong>
          </div>
        </div>
        <div className="flex flex-col p-2">
          {rooms.map((room, index) => (
            <div className="flex flex-col gap-1" key={index}>
              <div className="font-bold text-sm">
                {room.supplierRoomName} {index + 1}
              </div>
              <div className="flex flex-row gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                  />
                </svg>
                <div>
                  Adults
                  {" " +
                    numberToWords.toWords(room.adults).charAt(0).toUpperCase() +
                    numberToWords.toWords(room.adults).slice(1).toLowerCase()}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="border border-gray-300 rounded-br-[16px] mt-auto  w-[100%]">
          <button
            className="bg-blue-300 rounded-br-[8px] p-2 h-[100%] w-[100%]"
            onClick={async () => {
              const book = await fetchBook();

              const { nftJson, nftImage } = book.result;

              onClickPay(nftJson, nftImage, summary.price?.total);
            }}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
