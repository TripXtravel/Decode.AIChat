"use client";

export default function Flight({ flight }) {
  const { legs } = flight;

  return (
    <div className="flex flex-col gap-1  border-t border-gray-300 pt-4 mt-4">
      <div className="font-bold text-lg">Flight</div>
      <div className="flex flex-col   justify-center align-center">
        {legs.map((leg, index) => {
          const {
            departureAirport,
            destinationAirport,
            arrivalTime,
            departureTime,
          } = leg;

          console.log(leg, "LEG");
          return (
            <div
              key={index}
              className="flex flex-row w-[100%] height-[100%] relative"
            >
              {/* <div className="absolute top-[-10px] z-10 bg-white left-[10px] border border-gray-300 rounded-[16px] p-2 text-xs min-w-[50px] h-[25px]">
              {carrier}
            </div> */}
              <div className="flex flex-row gap-2 items-center py-2">
                <div className="flex flex-col gap-1 items-center py-1">
                  <div>{departureAirport}</div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                    />
                  </svg>
                </div>
                <div className="flex flex-col gap-1 items-center">
                  {index === 0 && (
                    <div className="text-xs">
                      Departure Time
                      <div>{new Date(departureTime).toLocaleString()}</div>
                    </div>
                  )}
                  <div className="w-[100%] border border-gray-300" />
                  {index === 1 && (
                    <div className="text-xs">
                      Departure Time
                      <div>{new Date(arrivalTime).toLocaleString()}</div>
                    </div>
                  )}
                </div>
                <div className="flex flex-col gap-1 items-center py-2">
                  <div>{destinationAirport}</div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
