import { Bookmark, UserProfile, UserTags } from 'src/data-contracts/social-service/data-contracts';
/**
 * Represents a user's social profile on the platform.
 *
 * The SocialUserProfile captures various details about a user's presence and activity in the social aspect of the platform. This includes details such as interests (tags), followers and following counts, profile image, and timelines.
 *
 * @remarks
 * Each social user profile is uniquely identified by its ID. It has a name, privacy setting (private or public), followers and following counts, and three distinct timelines: notification, personal feed, and news feed.
 *
 * @example
 * Creating an instance of `SocialUserProfile`:
 * ```ts
 * const profileData = {
 *   id: 12345,
 *   tags: [new Tag('Technology'), new Tag('AI')],
 *   name: "techenthusiast",
 *   private: false,
 *   followers: 500,
 *   following: 150,
 *   notificationFeedTimelineId: "notif12345",
 *   personalFeedTimelineId: "persfeed12345",
 *   newsFeedTimelineId: "newsfeed12345",
 *   profileImageUrl: "https://example.com/path/to/profile/image.jpg",
 *   algoliaId: "alg12345"
 * };
 * const userProfile = new SocialUserProfile(profileData);
 * console.log(userProfile.name); // Outputs: "techenthusiast"
 * ```
 *
 * @property id - The unique identifier of the user profile.
 * @property tags - An array of tags representing the user's interests.
 * @property name - The name tied to the user profile. Must be at least 5 characters long.
 * @property private - A boolean indicating if only approved followers can see what this profile posts.
 * @property followers - The number of followers this user profile has.
 * @property following - The number of users or groups this user profile is following.
 * @property notificationFeedTimelineId - The ID for the timeline capturing notifications for anything the user/group is following.
 * @property personalFeedTimelineId - The ID for the personal timeline capturing activities of the user.
 * @property newsFeedTimelineId - The ID for the news feed displaying all followed activities and groups the user is interested in.
 * @property profileImageUrl - The URL pointing to the user's profile image.
 * @property bookmarks - All content that the user has bookmarked on the platform.
 * @property algoliaId - The ID referencing this user in the Algolia platform.
 *
 * @implements {ISocialUserProfile}
 * @author ["yoan yomba"]
 */
export declare class SocialUserProfileClass implements UserProfile {
    /** User profile ID */
    id: string;
    /** Tags are interests */
    tags: UserTags[];
    /**
     * Profile name is the name tied to the user profile
     * user name must be at least 5 characters long
     */
    name: string;
    /**
     * Private defines wether only approved followers can see what this profile
     * posts
     */
    private: boolean;
    /** Followers outlines the number of followers this user profile has */
    followers: string;
    /** Number of people account is following */
    following: string;
    /**
     * Notification timeline Id. Notification for anything a user/group is
     * following
     */
    notificationFeedTimelineId: string;
    /** Personal timeline ID Has activities for a user that can be followed */
    personalFeedTimelineId: string;
    /**
     * Newsfeed timeline ID Displays all followed and group activities the user
     * follows
     */
    newsFeedTimelineId: string;
    /** ProfileImageUrl witholds the url of a given profile image */
    profileImageUrl: string;
    /** all the bookmarked pieces of content on the platform */
    bookmarks: Bookmark;
    /** The id of the algolia record referencing this user */
    algoliaId: string;
    constructor(data: Partial<UserProfile>);
}
