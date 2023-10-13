import { ErrorResponse } from '../error';

export interface RequestPasswordResetRequestClass {
  email: string;
}

export class RequestPasswordResetResponseClass extends ErrorResponse {
  success: boolean = false;

  constructor(data: Partial<RequestPasswordResetResponseClass>) {
    super(data);
    if (data) {
      Object.assign(this, data);
    }
  }
}
