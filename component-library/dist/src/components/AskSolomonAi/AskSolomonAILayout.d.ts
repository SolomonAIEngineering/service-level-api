/// <reference types="react" />
import { MelodyFinancialContext } from 'src/data-contracts/financial-service/data-contracts';
import { UserAccount } from 'src/data-contracts/user-service/data-contracts';
/**
 * This is the main layout for the Analytic AI card.
 *
 * @param children - The child components to render within this component.
 * @param className - The CSS classes to apply to the component.
 * @param context - The context for the AI to operate in.
 *
 * @example
 * ```
 * <AskSolomonAILayout context={context}>
 *   <ChildComponent />
 * </AskSolomonAILayout>
 * ```
 */
declare const AskSolomonAILayout: React.FC<{
    children: React.ReactNode;
    className?: string;
    context: any;
    sampleQuestions: string[];
    userKey: string;
    financialContext: MelodyFinancialContext;
    userAccount: UserAccount;
}>;
export { AskSolomonAILayout };
