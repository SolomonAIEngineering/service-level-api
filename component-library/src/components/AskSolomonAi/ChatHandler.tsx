import { MelodyFinancialContext } from 'src/data-contracts/financial-service/data-contracts';
import {
  ChatGPTMessage,
  OpenAIStream,
  OpenAIStreamPayload,
} from 'src/lib-utils/Stream';

export type OpenAIModel = ' gpt-4-turbo' | 'gpt-4' | 'gpt-3.5' | 'gpt-3.5-turbo';

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
  /**
   * OpenAI API key.
   */
  openAIApiKey: string;
  model: OpenAIModel;
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
export class ChatProcessor {
  /**
   * Processes the chat request and fetches the AI response.
   *
   * @param req - Request object containing the last 10 chat messages, user identifier, and financial context.
   * @returns A readable stream from the AI containing the responses.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async process(req: HandlerRequest): Promise<ReadableStream<any>> {
    const { last10messages, user, openAIApiKey, model } = req;
    const messages: ChatGPTMessage[] = [
      {
        role: 'system',
        content: `Imagine an AI assistant...`, // (abbreviated for brevity)
      },
    ];

    messages.push(...last10messages);

    const payload: OpenAIStreamPayload = {
      model: model,
      messages: messages,
      temperature: 0.7,
      max_tokens: 900,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      stream: true,
      user: user,
      n: 1,
    };

    return await OpenAIStream(payload, openAIApiKey);
  }
}
