/**
 * Importing MelodyFinancialContext and UserAccount from specific modules
 */
import { MelodyFinancialContext } from 'src/data-contracts/financial-service/data-contracts';
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
    getPrompt(question: string, userKey: string, additionalContext?: string | undefined, isBusinessAccount?: boolean): string;
}
/**
 * The PromptContext class implements the IContextPrompt interface.
 * It is a Singleton class that holds global financial context and user account.
 */
declare class PromptContext implements IContextPrompt {
    /**a
     * A private instance of MelodyFinancialContext to hold the global context.
     */
    private _globalContext;
    /**
     * The constructor of the PromptContext class.
     * @param globalContext The global financial context.
     * @param userAccount The user account.
     */
    constructor(globalContext: MelodyFinancialContext);
    /**
     * getPrompt method is used to get the prompt based on the global financial context and additional context.
     * @param question The question to be used for the prompt.
     * @param additionalContext Additional context to be used to generate the prompt.
     * @returns A string value representing the prompt.
     */
    getPrompt(question: string, userKey: string, additionalContext?: string, isBusinessAccount?: boolean): string;
}
/**
 * Exporting the PromptContext class.
 */
export { PromptContext };
