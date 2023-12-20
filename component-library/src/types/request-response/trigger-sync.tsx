import {
  FinancialAccountType,
  FinancialUserProfileType,
  TriggerSyncRequest,
  TriggerSyncResponse,
} from '../../data-contracts/financial-service/data-contracts';
import { ErrorResponse } from '../error';
import { IRequest } from './IRequest';

class TriggerSyncRequestClass implements TriggerSyncRequest, IRequest {
  /**
   * the account id associated with the user
   * @format uint64
   */
  userId: string = '';
  /**
   * the account id associated with the user
   * @format uint64
   */
  financialAccountId: string = '';
  /**
   * tha financial account type
   * @example "username:testuser"
   */
  financialAccountType: FinancialAccountType =
    'FINANCIAL_ACCOUNT_TYPE_UNSPECIFIED';

  /** @example "username:testuser" */
  profileType: FinancialUserProfileType =
    'FINANCIAL_USER_PROFILE_TYPE_UNSPECIFIED';

  constructor(data?: Partial<TriggerSyncRequestClass>) {
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }

  isValid(): boolean {
    return (
      this.userId !== '' &&
      this.profileType !== 'FINANCIAL_USER_PROFILE_TYPE_UNSPECIFIED' &&
      this.financialAccountId !== '' &&
      this.financialAccountType !== 'FINANCIAL_ACCOUNT_TYPE_UNSPECIFIED'
    );
  }
}

class TriggerSyncResponseClass
  extends ErrorResponse
  implements TriggerSyncResponse
{
  code = 0;
  err = '';
  token = '';
  taskId: string = '';

  constructor(data?: Partial<TriggerSyncResponseClass>) {
    super();
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }

  isValid(): boolean {
    return this.taskId !== '';
  }

  getTaskId(): string {
    return this.taskId;
  }
}

export { TriggerSyncRequestClass, TriggerSyncResponseClass };
