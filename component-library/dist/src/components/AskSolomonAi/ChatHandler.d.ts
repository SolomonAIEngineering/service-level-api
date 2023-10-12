import { MelodyFinancialContext } from 'src/data-contracts/financial-service/data-contracts';
import { ChatGPTMessage } from 'src/lib-utils/Stream';
/**
 * Type definition for the request to process a chat.
 */
interface HandlerRequest {
    /** The last 10 chat messages, for context. */
    last10messages: ChatGPTMessage[];
    /** Identifier for the user initiating the chat. */
    user: string;
    /** Financial context relevant for the chat. */
    financialContext: MelodyFinancialContext;
}
/**
 * `ChatProcessor` class is responsible for processing chat requests and interfacing
 * with the AI model to generate relevant responses.
 *
 * @remarks
 * It takes in the last 10 chat messages, user identifier, and financial context to
 * generate a payload which is then passed to the AI model for processing. The AI model
 * returns a readable stream containing the responses.
 *
 * @example
 * ```tsx
 * const processor = new ChatProcessor();
 * const response = await processor.process(request);
 * ```
 */
export declare class ChatProcessor {
    /**
     * Processes the chat request and fetches the AI response.
     *
     * @param req - Request object containing the last 10 chat messages, user identifier, and financial context.
     * @returns A readable stream from the AI containing the responses.
     */
    process(req: HandlerRequest): Promise<ReadableStream<any>>;
}
export {};
