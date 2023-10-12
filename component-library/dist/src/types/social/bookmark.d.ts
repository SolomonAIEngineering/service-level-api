import { Bookmark as Bookmark, Publication } from 'src/data-contracts/social-service/data-contracts';
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
export declare class BookmarkClass implements Bookmark {
    /** the id of the blocked record */
    id: string;
    postIds: string[];
    publications: Publication[];
    constructor(data: Partial<Bookmark>);
}
