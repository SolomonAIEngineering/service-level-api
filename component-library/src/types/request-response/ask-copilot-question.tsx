import { IRequest } from './IRequest';
import { ErrorResponse } from '../error/error-response';
import {
  RecordAskCopilotQuestionResponse,
  FinancialUserProfileType,
} from 'src/main';

/**
 * Represents a request to ask a question to GitHub Copilot.
 */
class RecordAskCopilotQuestionRequestClass implements IRequest {
  /**
   * The user ID associated with the request.
   */
  userId: string = '';

  /**
   * The profile type associated with the request.
   */
  profileType: FinancialUserProfileType =
    'FINANCIAL_USER_PROFILE_TYPE_UNSPECIFIED';

  /**
   * Creates an instance of AskCopilotQuestionRequestClass.
   * @param data - Optional data to initialize the request.
   */
  constructor(data?: Partial<RecordAskCopilotQuestionRequestClass>) {
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
    return (
      this.userId !== '' &&
      this.profileType !== 'FINANCIAL_USER_PROFILE_TYPE_UNSPECIFIED'
    );
  }
}

class RecordAskCopilotQuestionResponseClass
  extends ErrorResponse
  implements RecordAskCopilotQuestionResponse
{
  code = 0;
  err = '';
  token = '';
  success: boolean = false;
  remainingQuota: number = 0;

  /**
   * Creates an instance of AskCopilotQuestionResponseClass.
   * @param data - Optional data to initialize the response.
   */
  constructor(data?: Partial<RecordAskCopilotQuestionResponse>) {
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
   * Gets the question quota.
   * @returns The question quota.
   */
  getRemainingQuota(): number {
    return this.remainingQuota;
  }
}

export {
  RecordAskCopilotQuestionResponseClass,
  RecordAskCopilotQuestionRequestClass,
};
