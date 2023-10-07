import {
  getRandomNumber,
  getRandomString,
  getRandomSubcategories,
} from 'src/lib-utils/utils';

import { Category as Category } from 'src/data-contracts/financial-service/data-contracts';
/*
 * The Categories table stores information about the different categories of expenses or income,
 * such as "Housing", "Food", "Transportation", and "Entertainment". Each category has one or more
 * subcategories, which are stored in the Subcategories table.
 *
 * For example, the "Housing" category might have subcategories for "Rent", "Utilities", and "Home Maintenance".
 *
 * @export
 * @class Category
 * @implements {ICategory}
 * */
export class CategoryClass implements Category {
  /** id */
  id = '0';
  /** The name of the category */
  name = '';
  /** The description of the category */
  description = '';
  /** the sub categories of the category */
  subcategories: string[] = [];

  constructor(data: Partial<Category>) {
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }

  /**
   * Creates a random instance of the Category class with all fields populated.
   * @returns {Category} A random Category.
   */
  static randomInstance(): Category {
    return new CategoryClass({
      id: getRandomNumber(1, 10000).toString(),
      name: getRandomString(5),
      description: getRandomString(10),
      subcategories: getRandomSubcategories(),
    });
  }
}
