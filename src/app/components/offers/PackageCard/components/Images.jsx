"use client";

export default function Images({ images, index }) {
  const image = images[index] ? images[index] : images[0];

  return (
    <img
      src={image} // The path to your image
      alt="Description of image"
      className="border rounded-bl-[16px] rounded-tl-[16px] "
      style={{
        width: "250px",
        height: "100%",
      }}
    />
  );
}
