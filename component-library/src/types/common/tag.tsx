import { Tags } from 'src/data-contracts/user-service/data-contracts';
import { getRandomString } from 'src/lib-utils/utils';

/**
 * Represents a metadata tag.
 *
 * The `Tag` class provides a structured representation for tags, commonly used for categorization or metadata annotation.
 * Each tag can have a name, a description, and associated metadata.
 *
 * @remarks
 * The class provides utility methods like `getName`, `getDescription`, and `getMetadata` for fetching properties with a safe default value.
 *
 * @example Constructing a `Tag`:
 *
 * ```ts
 * // Example data
 * const tagData = {
 *   id: "unique-tag-id",
 *   tagName: "ExampleTag",
 *   tagDescription: "A description for the ExampleTag",
 *   metadata: ["meta1", "meta2"]
 * };
 *
 * const exampleTag = new Tag(tagData);
 * console.log(exampleTag.getName()); // Outputs: "ExampleTag"
 * ```
 *
 * @property id - A unique identifier for the tag.
 * @property tagName - The name of the tag.
 * @property tagDescription - A brief description of what the tag represents.
 * @property metadata - An array of associated metadata strings.
 *
 * @author Yoan Yomba
 */
class TagClass implements Tags {
  id?: string;
  tagName?: string;
  tagDescription?: string;
  metadata?: string[] = [];

  /**
   * Initializes a new instance of the `Tag` class.
   * @param {Partial<Tag>} [data] - Data used to populate the properties of the class.
   */
  constructor(data?: Partial<Tags>) {
    if (data)
      Object.assign(this, {
        ...data,
        metadata: data?.metadata || [],
      });
  }

  static randomInstance(): Tags {
    // Placeholder implementation for generating a random Tag
    // You will need to create an actual instance with random data here
    return new TagClass({
      id: getRandomString(10),
      tagName: getRandomString(10),
      tagDescription: getRandomString(10),
      metadata: [getRandomString(10), getRandomString(10)],
    });
  }

  /**
   * Fetches the tag's description or provides a default empty string if not set.
   * @returns The tag's description or an empty string.
   */
  getDescription(): string {
    return this.tagDescription || '';
  }

  /**
   * Fetches the tag's name or provides a default empty string if not set.
   * @returns The tag's name or an empty string.
   */
  getName(): string {
    return this.tagName || '';
  }

  /**
   * Fetches the tag's metadata or provides a default empty array if not set.
   * @returns The tag's metadata array or an empty array.
   */
  getMetadata(): string[] {
    return this.metadata || [];
  }
}

export { TagClass };
