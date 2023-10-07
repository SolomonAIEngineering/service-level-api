/**
 * Importing MelodyFinancialContext and UserAccount from specific modules
 */

import { MelodyFinancialContext } from 'src/data-contracts/financial-service/data-contracts';
import { UserAccount } from 'src/data-contracts/user-service/data-contracts';

/**
 * IContextPrompt interface defines a contract for the PromptContext class.
 * It has one method getFinancialContextBasedPrompt, which should return a string value.
 */
interface IContextPrompt {
  /**
   * @param question The question to be used for the prompt.
   * @param additionalContext Additional context to be used to generate the prompt.
   * @returns A string value representing the prompt.
   */
  getPrompt(
    question: string,
    userKey: string,
    additionalContext?: string | undefined,
    isBusinessAccount?: boolean,
  ): string;
}

/**
 * The PromptContext class implements the IContextPrompt interface.
 * It is a Singleton class that holds global financial context and user account.
 */
class PromptContext implements IContextPrompt {
  /**a
   * A private instance of MelodyFinancialContext to hold the global context.
   */
  private _globalContext: MelodyFinancialContext = {};

  /**
   * A private static instance of the PromptContext for Singleton implementation.
   */
  private static instance: PromptContext;

  /**
   * A private instance of UserAccount.
   */
  private _userAccount = {};

  /**
   * The constructor of the PromptContext class.
   * @param globalContext The global financial context.
   * @param userAccount The user account.
   */
  public constructor(
    globalContext: MelodyFinancialContext,
    userAccount: UserAccount,
  ) {
    this._globalContext = globalContext;
    this._userAccount = userAccount;
  }

  /**
   * getPrompt method is used to get the prompt based on the global financial context and additional context.
   * @param question The question to be used for the prompt.
   * @param additionalContext Additional context to be used to generate the prompt.
   * @returns A string value representing the prompt.
   */
  public getPrompt(
    question: string,
    userKey: string,
    additionalContext?: string,
    isBusinessAccount?: boolean,
  ): string {
    if (additionalContext) {
      const questionContext: string = JSON.stringify(additionalContext).trim();
      const questionPrefix = `Given this global context 
              ${this._globalContext}, and this additional 
              details ${questionContext}`;
      if (isBusinessAccount) {
        return `${questionPrefix}, act as a chief member of the financial planning
                 team with 20 years of exp. and, answer
                 this question in a personal fashion for this business ${userKey}: ${question}`;
      } else {
        return `${questionPrefix} act as a financial advisor with 20 years of exp., answer
            this question in a personal fashion for ${userKey}: ${question}`;
      }
    }

    if (isBusinessAccount) {
      return `
            Given this financial context
            ${JSON.stringify(
              this._globalContext,
            )}, act as a chief member of the financial planning team. Answer the following question : ${question} 
            in a personal fashion for this business ${userKey}. Be specific and give actionable solutions.
             Refer to the users financial context. Be sure to show citations. 
            `;
    } else {
      return `
            Given this financial context
            ${JSON.stringify(
              this._globalContext,
            )}, act as a cool financial advisor. Answer the following question : ${question} 
            in a personal fashion for ${userKey}. Be specific and give actionable solutions.
             Refer to the users financial context. Be sure to show citations. 
            `;
    }
  }
}

/**
 * Exporting the PromptContext class.
 */
export { PromptContext };
