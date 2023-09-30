import { ErrorResponse } from '../error';

/*
 * CheckEmailExistsRequest is used to check if the email address
 * exists in the database
 *
 * @class CheckEmailExistsRequest
 * */
class CheckEmailExistsRequest {
  /** The email of the user of interest */
  email: string = '';

  constructor(data?: Partial<CheckEmailExistsRequest>) {
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }
}

/*
 * CheckEmailExistsResponse is used to check if the email address matches the provided
 * email address
 *
 * @export
 * @class CheckEmailExistsResponse
 * @extends {ErrorResponse}
 * */
class CheckEmailExistsResponse extends ErrorResponse {
  exists = false;

  constructor(data?: Partial<CheckEmailExistsResponse>) {
    super();
    if (data) {
      this.create(data);
    }
  }

  private create(
    base?: Partial<CheckEmailExistsResponse>,
  ): CheckEmailExistsResponse {
    return this.fromPartial(base ?? {});
  }

  private fromPartial(
    object: Partial<CheckEmailExistsResponse>,
  ): CheckEmailExistsResponse {
    const message = new CheckEmailExistsResponse();
    message.exists = object.exists ?? false;
    return message;
  }
}

export { CheckEmailExistsResponse, CheckEmailExistsRequest };
