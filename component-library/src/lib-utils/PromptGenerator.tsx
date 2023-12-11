/**
 * Importing MelodyFinancialContext and UserAccount from specific modules
 */

import { MelodyFinancialContext } from 'src/data-contracts/financial-service/data-contracts';
import {
  BusinessAccount,
  UserAccount,
} from 'src/data-contracts/user-service/data-contracts';

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
   * A private instance of UserAccount.
   */
  private _userAccount: UserAccount | BusinessAccount = {};

  /**
   * The constructor of the PromptContext class.
   * @param globalContext The global financial context.
   * @param userAccount The user account.
   */
  public constructor(
    globalContext: MelodyFinancialContext,
    userAccount: UserAccount | BusinessAccount,
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

  /**
   * getComplianceAdvice method is used to provide compliance advice based on New York regulations and additional context.
   * @param question The compliance question to be addressed.
   * @param userKey The identifier for the small business seeking advice.
   * @param additionalContext Additional context to tailor the compliance advice.
   * @param isSmallBusiness Flag to determine if the user is a small business (always true for this method).
   * @returns A string value representing the tailored compliance advice.
   */
  public getComplianceAdvice(
    question: string,
    userKey: string,
    additionalContext?: string,
    isSmallBusiness: boolean = true,
  ): string {
    if (additionalContext) {
      const complianceContext: string =
        JSON.stringify(additionalContext).trim();
      const questionPrefix = `Given the New York compliance regulations 
            ${this._globalContext}, and these additional 
            details ${complianceContext}`;
      if (isSmallBusiness) {
        return `${questionPrefix}, as a compliance officer specializing in small business regulations with 
             a focus on New York state laws, provide personalized compliance guidance for ${userKey}: 
             ${question}`;
      } else {
        return `${questionPrefix}, as a compliance officer specializing in helping solo-entrepreneurs with regulations with
              a focus on New York state laws, provide personalized compliance guidance for ${userKey}: 
              ${question}`;
      }
    }

    // For small businesses, the isSmallBusiness flag is always true, but it's kept for consistency and future scalability
    if (isSmallBusiness) {
      return `
          Given the New York compliance regulations
          ${JSON.stringify(
            this._globalContext,
          )}, as a compliance officer specializing in small business regulations. Provide personalized 
          compliance guidance for the following issue: ${question} 
          for the small business identified by ${userKey}. Ensure your advice is specific to New York state laws 
          and give practical steps for compliance. Reference any relevant legal texts or precedents where necessary. 
          `;
    } else {
      return `
          Given the New York compliance regulations
          ${JSON.stringify(
            this._globalContext,
          )}, as a compliance officer specializing in small business regulations. Provide personalized 
          compliance guidance for the following issue: ${question} 
          for the small business identified by ${userKey}. Ensure your advice is specific to New York state laws 
          and give practical steps for compliance. Reference any relevant legal texts or precedents where necessary. 
          `;
    }
  }

  /**
   * getRiskAssessment method is used to provide risk assessment based on New York small business environment and additional context.
   * @param question The risk-related question to be addressed.
   * @param userKey The identifier for the small business seeking risk assessment.
   * @param additionalContext Additional context to tailor the risk assessment.
   * @param isSmallBusiness Flag to determine if the user is a small business (always true for this method).
   * @returns A string value representing the tailored risk assessment.
   */
  public getRiskAssessment(
    question: string,
    userKey: string,
    additionalContext?: string,
    isSmallBusiness: boolean = true,
  ): string {
    if (additionalContext) {
      const riskContext: string = JSON.stringify(additionalContext).trim();
      const questionPrefix = `Considering the specific risks associated with small businesses in New York 
            and the following additional details ${riskContext},`;
      if (isSmallBusiness) {
        return `${questionPrefix} as a risk officer with expertise in the New York small business sector, provide a detailed 
             risk assessment for ${userKey}: ${question}`;
      } else {
        return `${questionPrefix} as a risk officer with expertise in the New York small business sector, provide a detailed 
             risk assessment for ${userKey}: ${question}`;
      }
    }

    // Since this method is specifically for small businesses, the isSmallBusiness flag is set to true by default
    if (isSmallBusiness) {
      return `
          Considering the specific risks associated with small businesses in New York 
          ${JSON.stringify(
            this._globalContext,
          )}, as a risk officer, conduct a thorough risk assessment for the issue: ${question} 
          for the small business ${userKey}. Your assessment should include identification of potential risks, 
          evaluation of their impact, and recommended mitigation strategies. Be sure to address the unique 
          challenges that New York small businesses face. Reference relevant local regulations and industry standards 
          as necessary.
          `;
    } else {
      return `
          Considering the specific risks associated with small businesses in New York 
          ${JSON.stringify(
            this._globalContext,
          )}, as a risk officer, conduct a thorough risk assessment for the issue: ${question} 
          for the small business ${userKey}. Your assessment should include identification of potential risks, 
          evaluation of their impact, and recommended mitigation strategies. Be sure to address the unique 
          challenges that New York small businesses face. Reference relevant local regulations and industry standards 
          as necessary.
          `;
    }
  }

  /**
   * getFinancialContextBasedPrompt method is used to get the prompt based on the global financial context and additional context.
   * @param question The question to be used for the prompt.
   * @param additionalContext Additional context to be used to generate the prompt.
   * @returns A string value representing the prompt.
   */
  public getFinancialContextBasedPrompt(
    question: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    additionalContext?: any,
    isSmallBusiness: boolean = true,
  ): string {
    if (additionalContext) {
      const questionContext: string = JSON.stringify(additionalContext).trim();
      if (isSmallBusiness) {
        return `Given the global context 
               ${JSON.stringify(this._globalContext)}, and this additional 
              details ${questionContext} act as a financial planning team advising this small business, and answer
            this question in a personal fashion for ${
              this._userAccount.username
            }: ${question}`;
      } else {
        return `Given the global context 
               ${JSON.stringify(this._globalContext)}, and this additional 
              details ${questionContext} act as a financial advisor advising this solo entrepreneur, and answer
            this question in a personal fashion for ${
              this._userAccount.username
            }: ${question}`;
      }
    }

    if (isSmallBusiness) {
      return `
            Given this financial context
            ${JSON.stringify(
              this._globalContext,
            )}, act as a financial planning team advising this small buisness. Answer the following question : ${question} in a personal fashion for ${
        this._userAccount.username
      }. Be specific and give actionable solutions. Refer to the business' financial context. Be sure to show citations. 
            `;
    } else {
      return `
            Given this financial context
            ${JSON.stringify(
              this._globalContext,
            )}, act as a financial advisor team advising this solo entrepreneur. Answer the following question : ${question} in a personal fashion for ${
        this._userAccount.username
      }. Be specific and give actionable solutions. Refer to the entrepreneur' financial context. Be sure to show citations. 
            `;
    }
  }
}

/**
 * Exporting the PromptContext class.
 */
export { PromptContext };
