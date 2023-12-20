import {
  AskCopilotQuestionRequest,
  AskCopilotQuestionResponse,
} from 'src/data-contracts/user-service/data-contracts';
import { IRequest } from './IRequest';
import { ErrorResponse } from '../error/error-response';

/**
 * Represents a request to ask a question to GitHub Copilot.
 */
export class AskCopilotQuestionRequestClass
  implements IRequest, AskCopilotQuestionRequest
{
  /**
   * The user ID associated with the request.
   */
  userId: string = '';

  /**
   * Creates an instance of AskCopilotQuestionRequestClass.
   * @param data - Optional data to initialize the request.
   */
  constructor(data?: Partial<AskCopilotQuestionRequest>) {
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }

  /**
   * Checks if the request is valid.
   * @returns True if the user ID is not empty, otherwise false.
   */
  isValid(): boolean {
    return this.userId !== '';
  }
}

export class AskCopilotQuestionResponseClass
  extends ErrorResponse
  implements AskCopilotQuestionResponse
{
  code = 0;
  err = '';
  token = '';
  canAsk: boolean = false;
  remainingQuota: number = 0;

  /**
   * Creates an instance of AskCopilotQuestionResponseClass.
   * @param data - Optional data to initialize the response.
   */
  constructor(data?: Partial<AskCopilotQuestionResponse>) {
    super();
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }

  /**
   * Checks if the response is valid.
   * @returns True if the response is valid, otherwise false.
   */
  isValid(): boolean {
    return this.code === 0;
  }

  /**
   * Checks if the user can ask a question.
   * @returns True if the user can ask a question, otherwise false.
   */
  canAskQuestion(): boolean {
    return this.canAsk;
  }

  /**
   * Gets the question quota.
   * @returns The question quota.
   */
  getRemainingQuota(): number {
    return this.remainingQuota;
  }
}
