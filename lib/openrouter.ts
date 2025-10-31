import OpenAI from "openai";

/**
 * OpenRouter API client configuration
 * OpenRouter is compatible with the OpenAI SDK
 */
export const openrouter = new OpenAI({
	apiKey: process.env.OPENROUTER_API_KEY,
	baseURL: "https://openrouter.ai/api/v1",
	defaultHeaders: {
		"HTTP-Referer": process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
		"X-Title": "AthenaMind",
	},
});

/**
 * Example function to chat with OpenRouter
 * @param message - The user message
 * @param model - The model to use (default: "openai/gpt-3.5-turbo")
 */
export async function chat(message: string, model = "openai/gpt-3.5-turbo") {
	const completion = await openrouter.chat.completions.create({
		model,
		messages: [{ role: "user", content: message }],
	});

	return completion.choices[0].message.content;
}
