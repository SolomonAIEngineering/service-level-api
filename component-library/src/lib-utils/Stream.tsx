import {
  createParser,
  ParsedEvent,
  ReconnectInterval,
} from 'eventsource-parser';

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
export async function OpenAIStream(payload: OpenAIStreamPayload) {
  const encoder = new TextEncoder();
  const decoder = new TextDecoder();

  let counter = 0;

  const requestHeaders: Record<string, string> = {
    'Content-Type': 'application/json',
    // open ai key
    // TODO: this should be in a .env file or passed in as part of the library configuraton
    Authorization: `Bearer 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`,
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
