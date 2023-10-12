import { Category as Category } from 'src/data-contracts/financial-service/data-contracts';
export declare class CategoryClass implements Category {
    /** id */
    id: string;
    /** The name of the category */
    name: string;
    /** The description of the category */
    description: string;
    /** the sub categories of the category */
    subcategories: string[];
    constructor(data: Partial<Category>);
    /**
     * Creates a random instance of the Category class with all fields populated.
     * @returns {Category} A random Category.
     */
    static randomInstance(): Category;
}
