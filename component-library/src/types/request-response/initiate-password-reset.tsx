import { ErrorResponse } from '../error';

export interface RequestPasswordResetRequest {
  email: string;
}

export class RequestPasswordResetResponse extends ErrorResponse {
  success: boolean = false;

  constructor(data: Partial<RequestPasswordResetResponse>) {
    super(data);
    if (data) {
      Object.assign(this, data);
    }
  }
}
