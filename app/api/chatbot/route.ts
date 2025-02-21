import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { message } = await req.json();

        const response = await fetch("https://api-inference.huggingface.co/models/meta-llama/Llama-3-70B-Instruct", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
            },
            body: JSON.stringify({
                inputs: message,
                parameters: { max_new_tokens: 200 }, // Adjust token limit
            }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`API Error: ${errorText}`);
        }

        const data = await response.json();

        if (!data || !data.length || !data[0]?.generated_text) {
            throw new Error("Invalid response from Hugging Face API");
        }

        return NextResponse.json({ reply: data[0].generated_text });
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ reply: "Sorry, something went wrong." });
    }
}