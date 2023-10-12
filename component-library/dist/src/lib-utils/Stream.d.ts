/**
 * Represents a role in a conversation with OpenAI's ChatGPT model.
 */
export type ChatGPTAgent = 'user' | 'system' | 'assistant';
/**
 * Represents a message in a conversation with OpenAI's ChatGPT model.
 */
export interface ChatGPTMessage {
    role: ChatGPTAgent;
    content: string;
}
/**
 * Represents the payload for a streaming request to OpenAI's chat model.
 */
export interface OpenAIStreamPayload {
    model: string;
    messages: ChatGPTMessage[];
    temperature: number;
    top_p: number;
    frequency_penalty: number;
    presence_penalty: number;
    max_tokens: number;
    stream: boolean;
    stop?: string[];
    user?: string;
    n: number;
}
/**
 * Sends a streaming request to OpenAI's chat model and returns the response as a ReadableStream.
 * @param payload - The payload for the request to OpenAI's chat model.
 * @returns A ReadableStream of the response from OpenAI's chat model.
 */
export declare function OpenAIStream(payload: OpenAIStreamPayload): Promise<ReadableStream<any>>;
