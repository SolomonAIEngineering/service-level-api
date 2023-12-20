import {
  ErrorResponse,
  PollAsyncTaskExecutionStatusResponse,
  TaskState,
} from 'src/main';
import { IRequest } from './IRequest';

class PollAsyncTaskExecutionRequest implements IRequest {
  /**
   * The user ID associated with the request.
   */
  taskId: string = '';

  /**
   * Creates an instance of PollAsyncTaskExecutionRequest.
   * @param data - Optional data to initialize the request.
   */
  constructor(data?: Partial<PollAsyncTaskExecutionRequest>) {
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
    return this.taskId !== '';
  }
}

class PollAsyncTaskExecutionResponseClass
  extends ErrorResponse
  implements PollAsyncTaskExecutionStatusResponse
{
  code = 0;
  err = '';
  token = '';
  status: TaskState = 'TASK_STATE_UNSPECIFIED';
  /** The task id */
  taskId: string = '';

  /**
   * Creates an instance of PollAsyncTaskExecutionResponseClass.
   * @param data - Optional data to initialize the response.
   */
  constructor(data?: Partial<PollAsyncTaskExecutionStatusResponse>) {
    super();
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }

  /**
   * Checks if the response is valid.
   * @returns True if the task id is not empty, otherwise false.
   */
  isValid(): boolean {
    return this.taskId !== '' && this.status !== 'TASK_STATE_UNSPECIFIED';
  }
}

export { PollAsyncTaskExecutionRequest, PollAsyncTaskExecutionResponseClass };
