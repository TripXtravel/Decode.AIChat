export const fetchBook = async () => {
  try {
    const response = await fetch(
      "https://sunbeam-healthy-coyote.ngrok-free.app/packages/book",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": true,
        },
        body: JSON.stringify({ PackageToken: "262626" }),
      }
    );
    console.log(response, "RESPONSE");

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching book:", error);
  }
};
