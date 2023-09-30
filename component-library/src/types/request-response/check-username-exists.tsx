import { ErrorResponse } from '../error';
import { IRequest } from './IRequest';

/*
 * CheckUsernameExistsRequests is used to assert if a username exists in the database
 *
 * @class CheckUsernameExistsRequest
 * @implements {IRequest}
 * */
export class CheckUsernameExistsRequest implements IRequest {
  /** The username of the user of interest */
  username: string = '';

  constructor(data?: Partial<CheckUsernameExistsRequest>) {
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }

  /*
   * Validates the username of the user of interest in not
   * empty or invalid
   *
   * @returns {boolean}
   *
   * @memberOf CheckUsernameExistsRequest
   * */
  isValid(): boolean {
    return this.username !== '';
  }
}

/*
 * CheckUsernameExistsResponse is used to assert if a username exists in the database
 *
 * @export
 * @class CheckUsernameExistsResponse
 * @extends {ErrorResponse}
 * */
export class CheckUsernameExistsResponse extends ErrorResponse {
  exists = false;

  constructor(data?: Partial<CheckUsernameExistsResponse>) {
    super();
    if (data) {
      this.create(data);
    }
  }

  private create(
    base?: Partial<CheckUsernameExistsResponse>,
  ): CheckUsernameExistsResponse {
    return this.fromPartial(base ?? {});
  }

  private fromPartial(
    object: Partial<CheckUsernameExistsResponse>,
  ): CheckUsernameExistsResponse {
    const message = new CheckUsernameExistsResponse();
    message.exists = object.exists ?? false;
    return message;
  }
}
