import {
  createParser,
  ParsedEvent,
  ReconnectInterval,
} from 'eventsource-parser';
import { OpenAIModel } from 'src/components/AskSolomonAi/ChatHandler';
import { MelodyFinancialContext } from 'src/data-contracts/financial-service/data-contracts';

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
  model: OpenAIModel;
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
export async function OpenAIStream(
  payload: OpenAIStreamPayload,
  token: string,
) {
  const encoder = new TextEncoder();
  const decoder = new TextDecoder();

  let counter = 0;

  const requestHeaders: Record<string, string> = {
    'Content-Type': 'application/json',
    // open ai key
    // TODO: this should be in a .env file or passed in as part of the library configuraton
    Authorization: `Bearer ${token}`,
  };

  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    headers: requestHeaders,
    method: 'POST',
    body: JSON.stringify(payload),
  });

  const stream = new ReadableStream({
    async start(controller) {
      // callback
      function onParse(event: ParsedEvent | ReconnectInterval) {
        if (event.type === 'event') {
          const data = event.data;
          // https://beta.openai.com/docs/api-reference/completions/create#completions/create-stream
          if (data === '[DONE]') {
            controller.close();
            return;
          }
          try {
            const json = JSON.parse(data);
            const text = json.choices[0].delta?.content || '';
            if (counter < 2 && (text.match(/\n/) || []).length) {
              // this is a prefix character (i.e., "\n\n"), do nothing
              return;
            }
            const queue = encoder.encode(text);
            controller.enqueue(queue);
            counter++;
          } catch (e) {
            // maybe parse error
            controller.error(e);
          }
        }
      }

      // stream response (SSE) from OpenAI may be fragmented into multiple chunks
      // this ensures we properly read chunks and invoke an event for each SSE event stream
      const parser = createParser(onParse);
      // for await (const chunk of res.body as any) {
      //   parser.feed(decoder.decode(chunk));
      // }
      const status = true;
      if (res.body !== null) {
        const reader = res.body.getReader();
        while (status) {
          const { done, value } = await reader.read();

          if (done) {
            break;
          }

          if (value) {
            parser.feed(decoder.decode(value));
          }
        }
      }
    },
  });

  return stream;
}

/**
 * Handler for processing chat requests and generating AI responses.
 * @param req - Request object containing the last 10 messages, the user, and the financial context.
 * @returns A readable stream containing the AI's responses.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handler = async (req: {
  last10messages: ChatGPTMessage[];
  user: string;
  financialContext: MelodyFinancialContext;
  apiToken: string;
  model: OpenAIModel;
  temperature: number;
  top_p: number;
  frequency_penalty: number;
  presence_penalty: number;
  max_tokens: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}): Promise<ReadableStream<any>> => {
  const {
    last10messages,
    user,
    apiToken,
    model,
    temperature,
    max_tokens,
    top_p,
    frequency_penalty,
    presence_penalty,
  } = req;
  const messages: ChatGPTMessage[] = [
    {
      role: 'system',
      content: `Introducing a specialized AI assistant designed expressly for the financial intricacies faced by small businesses. This state-of-the-art tool combines deep financial expertise, strategic insight, and unparalleled eloquence, meticulously calibrated to navigate the complex landscape of business finance.

This AI is more than just a tool—it is a trusted financial collaborator for your business. Its methodical approach ensures informed financial decision-making, fostering a comprehensive understanding of fiscal matters tailored to the needs of small enterprises. From investment strategies to payroll intricacies, tax obligations to cash flow management, it offers concise, authoritative guidance.

Recognizing the unique challenges and opportunities inherent to small businesses, this assistant not only respects every financial decision but also proffers astute strategies for optimization and growth. With a commitment to remaining at the forefront of financial technologies and market trends, it guarantees that your business is consistently armed with up-to-date knowledge and best practices.

Welcome your business's financial consultant: always precise, continuously enlightening, and dedicated to your enterprise's fiscal excellence.`,
    },
  ];

  // only push the latest message from the user

  messages.push(...last10messages);

  const payload: OpenAIStreamPayload = {
    model: model,
    messages: messages,
    temperature: temperature,
    max_tokens: max_tokens,
    top_p: top_p,
    frequency_penalty: frequency_penalty,
    presence_penalty: presence_penalty,
    stream: true,
    user: user,
    n: 1,
  };

  return await OpenAIStream(payload, apiToken);
};

export { handler };
