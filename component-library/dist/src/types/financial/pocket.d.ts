import { Pocket as Pocket } from 'src/data-contracts/financial-service/data-contracts';
import { PocketType as PocketType } from 'src/data-contracts/financial-service/data-contracts';
import { SmartGoal as SmartGoal } from 'src/data-contracts/financial-service/data-contracts';
/**
 * Pocket represents the Pocket entity.
 *
 * @export
 * @class Pocket
 * @implements {IPocket}
 * */
export declare class PocketClass implements Pocket {
    /** id */
    id: string;
    /** the set of smart goals this user witholds */
    goals: SmartGoal[];
    /** The type of the pocket */
    type: PocketType;
    constructor(data: Partial<Pocket>);
    /**
     * Creates a random instance of the Pocket class with all fields populated.
     * @returns {Pocket} A random pocket.
     */
    static randomInstance(): Pocket;
}
