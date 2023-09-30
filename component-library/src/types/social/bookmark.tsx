import { Publication } from './publication';

export interface IBookmark {
  /** the id of the blocked record */
  id: number;
  postIds: string[];
  publications: Publication[];
}

/**
 * Represents a user's bookmarks within the application.
 *
 * The `Bookmark` class captures the various posts, publications, or other items that a user has marked for reference or quick access.
 *
 * @remarks
 * Each bookmark is uniquely identified with an ID, and can contain an array of post IDs and an array of publication objects, both of which the user has bookmarked.
 *
 * @example
 * Creating an instance of `Bookmark`:
 * ```ts
 * const bookmarkData = {
 *   id: 1,
 *   postIds: ["post123", "post456"],
 *   publications: [new Publication({ ... }), new Publication({ ... })],
 * };
 * const userBookmark = new Bookmark(bookmarkData);
 * console.log(userBookmark.postIds); // Outputs: ["post123", "post456"]
 * ```
 *
 * @property id - The unique identifier for the bookmark record.
 * @property postIds - An array of post IDs that the user has bookmarked.
 * @property publications - An array of `Publication` instances that the user has bookmarked.
 *
 * @implements {IBookmark}
 * @author [Your Name or the Original Author's Name if you know it]
 */
export class Bookmark implements IBookmark {
  /** the id of the blocked record */
  id: number = 0;
  postIds: string[] = [];
  publications: Publication[] = [];

  constructor(data: Partial<Bookmark>) {
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }
}
