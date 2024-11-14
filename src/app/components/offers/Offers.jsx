"use client";
import PackageCard from "./PackageCard";

const dataTEst = {
  searchToken: null,
  languageCode: null,
  hotels: [
    {
      id: "1",
      referenceToken: null,
      name: "Hotel 1",
      rooms: [
        {
          adults: 2,
          type: "HolidayHome",
          travellerIds: [123, 231],
        },
        {
          adults: 2,
          type: "HolidayHome",
          travellerIds: [123, 231],
        },
      ],
      checkIn: "2024-12-04T12:23:21.1517267+01:00",
      checkOut: "2024-12-11T12:23:21.1517366+01:00",
      remarks: "No pets allowed",
      bookability: '{ "type": "BOOKABILITY_TYPE_AVAILABLE" }',
    },
    {
      id: "2",
      referenceToken: null,
      name: "Hotel 2",
      rooms: [
        {
          adults: 2,
          type: "StandardRoom",
          travellerIds: [345, 678],
        },
      ],
      checkIn: "2024-12-05T12:23:21.1517267+01:00",
      checkOut: "2024-12-12T12:23:21.1517366+01:00",
      remarks: "Breakfast included",
      bookability: '{ "type": "BOOKABILITY_TYPE_UNAVAILABLE" }',
    },
    {
      id: "3",
      referenceToken: null,
      name: "Hotel 3",
      rooms: [
        {
          adults: 3,
          type: "Suite",
          travellerIds: [789, 456],
        },
      ],
      checkIn: "2024-12-06T12:23:21.1517267+01:00",
      checkOut: "2024-12-13T12:23:21.1517366+01:00",
      remarks: "No smoking rooms",
      bookability: '{ "type": "BOOKABILITY_TYPE_REQUEST" }',
    },
    {
      id: "4",
      referenceToken: null,
      name: "Hotel 4",
      rooms: [
        {
          adults: 3,
          type: "Suite",
          travellerIds: [789, 456],
        },
      ],
      checkIn: "2024-12-06T12:23:21.1517267+01:00",
      checkOut: "2024-12-13T12:23:21.1517366+01:00",
      remarks: "No smoking rooms",
      bookability: '{ "type": "BOOKABILITY_TYPE_REQUEST" }',
    },
  ],
  flights: [
    {
      id: "1",
      productToken: null,
      legs: [
        {
          departureAirport: "AYT",
          destinationAirport: "DBX",
          travelTime: 0,
          isOvernight: false,
          nonstop: false,
          fareClass: null,
          carrier: "WIZZ AIR",
          flightNumber: null,
          departureTime: "2024-12-04T12:23:21.1517802+01:00",
          arrivalTime: "2024-12-11T12:23:21.1517824+01:00",
          flightTime: 0,
          aircraftIataCode: null,
          includedServices: null,
        },
      ],
      prices: null,
      bookability:
        '{ "type": "BOOKABILITY_TYPE_AVAILABLE", "confirmationTime": { "hours": 1, "minutes": 10 } }',
    },
    {
      id: "2",
      productToken: null,
      legs: [
        {
          departureAirport: "LAX",
          destinationAirport: "JFK",
          travelTime: 300,
          isOvernight: true,
          nonstop: true,
          fareClass: "Economy",
          carrier: "DELTA",
          flightNumber: "DL123",
          departureTime: "2024-12-05T15:00:00+01:00",
          arrivalTime: "2024-12-05T18:00:00+01:00",
          flightTime: 300,
          aircraftIataCode: "A320",
          includedServices: "Food, WiFi",
        },
      ],
      prices: null,
      bookability:
        '{ "type": "BOOKABILITY_TYPE_UNAVAILABLE", "confirmationTime": { "hours": 2, "minutes": 30 } }',
    },
    {
      id: "3",
      productToken: null,
      legs: [
        {
          departureAirport: "LAX",
          destinationAirport: "JFK",
          travelTime: 300,
          isOvernight: true,
          nonstop: true,
          fareClass: "Economy",
          carrier: "DELTA",
          flightNumber: "DL123",
          departureTime: "2024-12-05T15:00:00+01:00",
          arrivalTime: "2024-12-05T18:00:00+01:00",
          flightTime: 300,
          aircraftIataCode: "A320",
          includedServices: "Food, WiFi",
        },
      ],
      prices: null,
      bookability:
        '{ "type": "BOOKABILITY_TYPE_UNAVAILABLE", "confirmationTime": { "hours": 2, "minutes": 30 } }',
    },
    {
      id: "4",
      productToken: null,
      legs: [
        {
          departureAirport: "LAX",
          destinationAirport: "JFK",
          travelTime: 300,
          isOvernight: true,
          nonstop: true,
          fareClass: "Economy",
          carrier: "DELTA",
          flightNumber: "DL123",
          departureTime: "2024-12-05T15:00:00+01:00",
          arrivalTime: "2024-12-05T18:00:00+01:00",
          flightTime: 300,
          aircraftIataCode: "A320",
          includedServices: "Food, WiFi",
        },
      ],
      prices: null,
      bookability:
        '{ "type": "BOOKABILITY_TYPE_UNAVAILABLE", "confirmationTime": { "hours": 2, "minutes": 30 } }',
    },
  ],
  packages: [
    {
      id: "cd663809-7e1a-43e8-8843-75ec92ea9cb7",
      hotelid: 1,
      flightId: 1,
      price: {
        total: 6,
        currency: "CAM",
      },
    },
    {
      id: "e4738390-1c4a-42d6-9e2a-8a4f8a1e3abc",
      hotelid: 2,
      flightId: 2,
      price: {
        total: 12,
        currency: "USD",
      },
    },
    {
      id: "f6a6a807-b7c6-4f8a-a9d3-ead0c2e2e123",
      hotelid: 3,
      flightId: 3,
      price: {
        total: 20,
        currency: "EUR",
      },
    },
    {
      id: "f6a6a807-b7c6-4f8a-a9d3-ead0c2e2e123",
      hotelid: 4,
      flightId: 4,
      price: {
        total: 20,
        currency: "EUR",
      },
    },
  ],
};

export default function Offers({ data }) {
  if (
    Object.keys(data).length === 0 ||
    data.hotels === null ||
    data.flights === null ||
    data.packages === null
  ) {
    return (
      <div className="text-lg flex w-[100%] h-[100vh] justify-center items-center">
        No offers found
      </div>
    );
  }

  const { flights, hotels, packages } = data;

  // Create a map of hotels by their id
  const hotelMap = new Map(hotels.map((hotel) => [hotel.id, hotel]));
  const flightsMap = new Map(flights.map((flight) => [flight.id, flight]));

  // Merge hotels and flights based on id
  const combinedArray = packages.map((pack) => {
    const hotel = hotelMap.get(pack.hotelid.toString());
    const flight = flightsMap.get(pack.flightId.toString());

    return {
      id: pack.id,
      hotel: hotel || null, // Include hotel data if it exists
      flight: flight || null, // Include flight data if it exists
      packages: packages || null, // Include packages data if it exists
    };
  });

  return (
    <div className="w-full h-[100%] p-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[100%]">
        {combinedArray.map((offer, index) => (
          <PackageCard key={offer.id} offer={offer} index={index} />
        ))}
      </div>
    </div>
  );
}

// <div className="border border-gray-300 p-4 h-[200px] w-[200px]">
//   <button className="bg-blue-200 rounded-[8px] p-2" onClick={onClickPay}>
//     Pay
//   </button>
// </div>
