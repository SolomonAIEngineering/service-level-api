import { ErrorResponse } from '../error';

/*
 * CheckEmailExistsRequest is used to check if the email address
 * exists in the database
 *
 * @class CheckEmailExistsRequest
 * */
class CheckEmailExistsRequestClass {
  /** The email of the user of interest */
  email: string = '';

  constructor(data?: Partial<CheckEmailExistsRequestClass>) {
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
class CheckEmailExistsResponseClass extends ErrorResponse {
  exists = false;

  constructor(data?: Partial<CheckEmailExistsResponseClass>) {
    super();
    if (data) {
      this.create(data);
    }
  }

  private create(
    base?: Partial<CheckEmailExistsResponseClass>,
  ): CheckEmailExistsResponseClass {
    return this.fromPartial(base ?? {});
  }

  private fromPartial(
    object: Partial<CheckEmailExistsResponseClass>,
  ): CheckEmailExistsResponseClass {
    const message = new CheckEmailExistsResponseClass();
    message.exists = object.exists ?? false;
    return message;
  }
}

export { CheckEmailExistsResponseClass, CheckEmailExistsRequestClass };
