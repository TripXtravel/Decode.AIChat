const roleSystem = {
  role: "system",
  content: `
    You are a travel agent. Your task is to help the user by asking for the departure airport, destination city, travel dates and the purpose of their trip. Summarize the trip always in english after all information collected in this format and please without any *:
    Your trip summary:
    - Departure Airport: AIRPORT;
    - Destination:  CITY;
    - Travel Dates:  DATES but dates to be YEAR-MONTH-DAY;
    - Purpose:  PURPOSE;
    Stop the communication after collect all the data."`,
};

export const sendToXAI = async (messages) => {
  const XAI_API_KEY =
    "xai-GXkU8S7WBq1M03gkINcXQCEixKNmTtfzMIVeWVtIYawTmT0kjGAAMdUcl5OUDsrKnjrZ4DB1U9UXjybW"; // Or use a secure way to get the API key

  const aiMessage = [roleSystem, ...messages];

  try {
    const response = await fetch("https://api.x.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${XAI_API_KEY}`,
      },
      body: JSON.stringify({
        messages: aiMessage,
        model: "grok-beta",
      }),
    });

    const data = await response.json();
    return data; // Return the data to be displayed or processed further
  } catch (error) {
    console.error("Error sending to xAI:", error);
    throw error;
  }
};
