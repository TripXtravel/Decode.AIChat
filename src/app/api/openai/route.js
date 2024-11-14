import createChatCompletion from "@/app/utils/openai";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    const response = await createChatCompletion();

    return NextResponse.json({
      message: "Chat completed successfully",
      response: response,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req, res) {
  try {
    const response = await fetch("https://api.x.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key":
          "xai-GXkU8S7WBq1M03gkINcXQCEixKNmTtfzMIVeWVtIYawTmT0kjGAAMdUcl5OUDsrKnjrZ4DB1U9UXjybW",
      },
      body: JSON.stringify({
        model: "grok-beta",
        messages: [
          {
            role: "system",
            content:
              "You are Grok, a chatbot inspired by the Hitchhiker's Guide to the Galaxy.",
          },
          {
            role: "user",
            content:
              "What is the meaning of life, the universe, and everything?",
          },
        ],
      }),
    });

    return NextResponse.json({
      message: "Chat completed successfully",
      response: response,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  // Handle POST request if needed
  return NextResponse.json({ message: "Hello, World!" });
}

export async function PUT(req, res) {
  // Handle PUT request if needed
  return NextResponse.json({ message: "Hello, World!" });
}
