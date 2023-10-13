import { ErrorResponse } from '../error';
import { IRequest } from './IRequest';

/*
 * CheckUsernameExistsRequests is used to assert if a username exists in the database
 *
 * @class CheckUsernameExistsRequest
 * @implements {IRequest}
 * */
export class CheckUsernameExistsRequestClass implements IRequest {
  /** The username of the user of interest */
  username: string = '';

  constructor(data?: Partial<CheckUsernameExistsRequestClass>) {
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
export class CheckUsernameExistsResponseClass extends ErrorResponse {
  exists = false;

  constructor(data?: Partial<CheckUsernameExistsResponseClass>) {
    super();
    if (data) {
      this.create(data);
    }
  }

  private create(
    base?: Partial<CheckUsernameExistsResponseClass>,
  ): CheckUsernameExistsResponseClass {
    return this.fromPartial(base ?? {});
  }

  private fromPartial(
    object: Partial<CheckUsernameExistsResponseClass>,
  ): CheckUsernameExistsResponseClass {
    const message = new CheckUsernameExistsResponseClass();
    message.exists = object.exists ?? false;
    return message;
  }
}
