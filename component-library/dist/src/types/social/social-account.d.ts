import { Bookmark } from 'src/data-contracts/social-service/data-contracts';
import { Tags } from 'src/data-contracts/user-service/data-contracts';
/**
 * Represents a social account in the platform.
 *
 * A `SocialAccount` is a representation of a user's social presence on the platform. It captures details about followers, following, tags (interests), profile imagery, and more.
 *
 * @remarks
 * Each `SocialAccount` is uniquely identified by its ID and is associated with a user profile. It also provides details like the number of followers, the number of users it's following, and tags associated with it.
 *
 * @example
 * Initializing a new instance of `SocialAccount`:
 * ```ts
 * const accountData = {
 *   id: "12345",
 *   followers: "500",
 *   following: "150",
 *   name: "techuser",
 *   tags: [new Tag('Technology'), new Tag('AI')],
 *   profileImageUrl: "https://example.com/path/to/profile/image.jpg"
 * };
 * const socialAccount = new SocialAccount(accountData);
 * console.log(socialAccount.name); // Outputs: "techuser"
 * ```
 *
 * @property followers - The number of followers this profile has.
 * @property following - The number of users this profile is following.
 * @property id - The unique identifier for the social account.
 * @property name - The name or username associated with the social account.
 * @property tags - An array of tags (interests) associated with this profile.
 * @property private - A boolean indicating if this account is private or public.
 * @property profileImageUrl - The URL pointing to the user's profile image.
 * @property userProfileid - The ID of the user that owns this social account. Kept for backwards compatibility with earlier versions.
 *
 * @author [yoan yomba]
 */
declare class SocialAccount {
    /**
     * The number of followers this profile has.
     *
     * @type {string}
     */
    followers: string;
    /**
     * The number of users this profile is following.
     *
     * @type {string}
     */
    following: string;
    /**
     * the id of the profile
     *
     * @type {string}
     */
    id: string;
    /**
     * this is the username of the profile
     *
     * @type {string}
     */
    name: string;
    /**
     * The set of tags associated to this profile
     *
     * @type {Tag[]}
     */
    tags: Tags[];
    /**
     * Deliniates wether the profile is a private or public one
     *
     * @type {boolean}
     */
    private: boolean;
    /**
     * The profile image url.
     *
     * @type {string}
     */
    profileImageUrl: string;
    /**
     * User profile id.
     * This is the id of the user that owns the profile.
     * NOTE: this is the same as the id field referenced above.
     * However we are keeping this field for backwards compatibility.
     *
     * @type {string}
     */
    userProfileid: string;
    bookmarks: Bookmark | undefined;
    /**
     * Creates an instance of Profile.
     *
     * @constructor
     * @param {?Partial<Profile>} [data]
     */
    constructor(data?: Partial<SocialAccount>);
    /**
     * Checks if the profile is private.
     * @returns {boolean} True if the profile is private, false otherwise.
     */
    isPrivate(): boolean;
    /**
     * Deciphers wether or not to show the profile's content
     * @returns {boolean} True if the profile is not private, false otherwise.
     */
    shouldShowContent(): boolean;
    /**
     * Gets the profile image url.
     *
     * @returns {string} The profile image url.
     */
    getProfileImageUrl(): string;
    /**
     * Gets the tags of the profile.
     *
     * @returns {(Tag[] | string[])} The tags of the profile.
     */
    getTags(): Tags[] | string[];
    /**
     * Gets the number of tags the profile has.
     *
     * @returns {number} The number of tags the profile has.
     */
    getTagCount(): number;
    /**
     * Gets the tag names of the profile.
     * @returns {string[]} The tag names of the profile.
     */
    getTagNames(): string[];
    /**
     * Gets the number of followers this profile has.
     *
     * @returns {string} The number of followers this profile has.
     */
    getFollowerCount(): number;
    /**
     * Get the number of users following this profile.
     * @returns {string} The number of users following this profile.
     */
    getfollowingCount(): number;
}
export { SocialAccount };
