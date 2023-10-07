/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/**
 * AcceptFollowProfileRequestResponse: Represent the object returned as a
 * response to the accept follow profile request
 */
export interface AcceptFollowProfileResponse {
  success?: boolean;
}

export type AcceptFollowRequestData = any;

/**
 * AccountType used to differ the type of profile an operation
 * is being performed against
 * @default "ACCOUNT_TYPE_UNSPECIFIED"
 */
export type AccountType =
  | 'ACCOUNT_TYPE_UNSPECIFIED'
  | 'ACCOUNT_TYPE_USER'
  | 'ACCOUNT_TYPE_COMMUNITY';

/** Actor references the profile performing an operation */
export interface Actor {
  /** AccountType is the type of account this actor is */
  actorType: AccountType;
  /** Communtiy is the community profile who's performing a given operation */
  community: CommunityProfile;
  /** UserProfile is the user profile who's performing a given operation */
  userProfile: UserProfile;
}

export type AddCommentQualityScoreData = any;

export interface AddCommentQualityScoreResponse {
  comment?: Comment;
}

export type AddEditorToAPublicationData = any;

export interface AddPostQualityScoreResponse {
  pollPost?: PollPost;
  regularPost?: Post;
  sharedPost?: SharedPost;
}

export type AddPostToAThreadData = any;

export type AddPostToPublicationData = any;

export interface AddPostToPublicationResponse {
  /**
   * Use Case
   * - An online magazine, a publication with a fixed publication staff that posts stories around a specific topic
   * - A community publication, a publication that accepts stories published around Medium
   * - A company blog, a publication that is created specifically to share company news
   * - A collection of individual stories by a single author that are parts of a larger whole
   */
  publication?: Publication;
}

export interface AddPostToThreadResponse {
  pollPost?: PollPost;
  regularPost?: Post;
  sharedPost?: SharedPost;
}

export interface AddPublicationEditorResponse {
  /**
   * Use Case
   * - An online magazine, a publication with a fixed publication staff that posts stories around a specific topic
   * - A community publication, a publication that accepts stories published around Medium
   * - A company blog, a publication that is created specifically to share company news
   * - A collection of individual stories by a single author that are parts of a larger whole
   */
  publication?: Publication;
}

export type AddQualityScoreData = any;

export interface Any {
  '@type'?: string;
  [key: string]: any;
}

export interface BaseTimeline {
  activities?: Array<FeedActivity>;
}

export type BlockUserProfileData = any;

/**
 * BlockUserProfileResponse: Represents the object returned as a response to the
 * block user request
 */
export interface BlockUserProfileResponse {
  success?: boolean;
}

export interface Bookmark {
  /**
   * the id of the blocked record
   * @format uint64
   */
  id?: string;
  postIds?: Array<string>;
  publications?: Array<Publication>;
}

export type BookmarkAPostData = any;

export type BookmarkAPublicationData = any;

export interface BookmarkPostResponse {
  bookmark?: Bookmark;
}

export interface BookmarkPublicationResponse {
  bookmark?: Bookmark;
}

export interface Comment {
  /**
   * AffinityScore is the average rating users on the platform associate with a
   * piece of content. It is taken as the weighted average across all reactions
   * for the particular post
   * @gotag: bson:"affinityScore"
   * @format uint64
   */
  affinityScore?: string;
  /**
   * AccountType is the account type of the creator of this piece of
   * content
   * @gotag: bson:"authorAccountType"
   */
  authorAccountType?: AccountType;
  /**
   * Profile image of the person making this comment
   * @gotag: bson:"authorProfileImage"
   * @minLength 1
   * @example "test-user"
   */
  authorProfileImage: string;
  /**
   * Username of the person making the comment
   * @gotag: bson:"authorUsername"
   * @minLength 1
   * @example "test-user"
   */
  authorUsername: string;
  /**
   * Content defining the comment
   * @gotag: bson:"content"
   */
  content?: string;
  /**
   * Time when the comment was created
   * @gotag: bson:"createdAt"
   */
  createdAt?: string;
  /**
   * Blob of extra content tied to the comment
   * @gotag: bson:"extra"
   */
  extra?: Record<string, string>;
  /**
   * Hashtags defined in the comment
   * @gotag: bson:"hashtags"
   */
  hashtags?: Array<string>;
  /**
   * Comment ID
   * @gotag: bson:"_id,omitempty"
   */
  id?: string;
  /**
   * Media payload tied to the comment
   * @gotag: bson:"media"
   */
  media?: Media;
  /**
   * Profiles mentioned in the comment
   * @gotag: bson:"mentions"
   */
  mentions?: Array<string>;
  /**
   * the set of notes associated to this piece of content
   * @gotag: bson:"notes"
   */
  notes?: Array<Note>;
  /**
   * ID of either the user profile or the community profile creating the comment
   * @gotag: bson:"profileId"
   * @format uint64
   */
  profileId?: string;
  /**
   * QualityScore is the quality of the given piece of content.
   * It is taken as the weighted average across all reactions for the particular
   * post
   * @gotag: bson:"qualityScore"
   * @format uint64
   */
  qualityScore?: string;
  /**
   * Responses to a given comment
   * @gotag: bson:"replies"
   */
  replies?: Array<CommentReply>;
  /**
   * Platform wide ID of the user creating the comment
   * @gotag: bson:"simfinyPlatformUserId"
   * @format uint64
   */
  simfinyPlatformUserId?: string;
  /**
   * UserIDToAffinityScoreMap witholds a mapping of all user profiles who left
   * an affinity score
   * @gotag: bson:"userIdToAffinityScoreMap"
   */
  userIdToAffinityScoreMap?: Record<string, string>;
  /**
   * a map of user ids to reactions left by users
   * @gotag: bson:"userIdToReactionMap"
   */
  userIdToReactionMap?: Record<string, Reaction>;
  /**
   * ReportCount details the number of reports were associated with a post
   * A report is used as a signal to disclose the post's content are in
   * violation of platform rules
   * @gotag: bson:"userIdToReportsMap"
   */
  userIdToReportsMap?: Record<string, string>;
}

export interface CommentReply {
  /**
   * AffinityScore is the average rating users on the platform associate with a
   * piece of content. It is taken as the weighted average across all reactions
   * for the particular post
   * @gotag: bson:"affinityScore"
   * @format uint64
   */
  affinityScore?: string;
  /**
   * AccountType is the account type of the creator of this piece of
   * content
   * @gotag: bson:"authorAccountType"
   */
  authorAccountType?: AccountType;
  /**
   * Profile image of the person making this comment
   * @gotag: bson:"authorProfileImage"
   * @minLength 1
   * @example "test-user"
   */
  authorProfileImage: string;
  /**
   * Username of the person making the comment
   * @gotag: bson:"authorUsername"
   * @minLength 1
   * @example "test-user"
   */
  authorUsername: string;
  /**
   * Content defining the comment
   * @gotag: bson:"content"
   */
  content?: string;
  /**
   * Time when the comment was created
   * @gotag: bson:"createdAt"
   */
  createdAt?: string;
  /**
   * Blob of extra content tied to the comment response
   * @gotag: bson:"extra"
   */
  extra?: Record<string, string>;
  /**
   * Hashtags defined in the comment
   * @gotag: bson:"hashtags"
   */
  hashtags?: Array<string>;
  /**
   * Response ID
   * @gotag: bson:"_id,omitempty"
   */
  id?: string;
  /**
   * Media payload associated to the response
   * @gotag: bson:"media"
   */
  media?: Media;
  /**
   * Profiles mentioned in the comment
   * @gotag: bson:"mentions"
   */
  mentions?: Array<string>;
  /**
   * ID of either the user profile or the community profile creating the comment response
   * @gotag: bson:"profileId"
   * @format uint64
   */
  profileId?: string;
  /**
   * QualityScore is the quality of the given piece of content.
   * It is taken as the weighted average across all reactions for the particular
   * post
   * @gotag: bson:"qualityScore"
   * @format uint64
   */
  qualityScore?: string;
  /**
   * ID of the user creating the comment response
   * @gotag: bson:"simfinyPlatformUserId"
   * @format uint64
   */
  simfinyPlatformUserId?: string;
  /**
   * UserIDToAffinityScoreMap witholds a mapping of all user profiles who left
   * an affinity score
   * @gotag: bson:"userIdToAffinityScoreMap"
   */
  userIdToAffinityScoreMap?: Record<string, string>;
  /**
   * a map of user ids to reactions left by users
   * @gotag: bson:"userIdToReactionMap"
   */
  userIdToReactionMap?: Record<string, Reaction>;
  /**
   * the report count for this comment reply
   * @gotag: bson:"userIdToReportsMap"
   */
  userIdToReportsMap?: Record<string, string>;
}

/** CommunityProfile: The profile object tied to a given community */
export interface CommunityProfile {
  /**
   * The id of the algolia record referencing this community
   * @example "asndlkhaskhdhasgdahsf-feed-id"
   */
  algoliaId: string;
  /**
   * Defines rules community members must abide by
   * community rules must be at least 50 characters long
   * @example "community rules useful for generating a test community that we can test against. a community is really cool and ideal"
   */
  communityRules: string;
  /**
   * Desscription defines additional info about the community
   * community description must be at least 50 characters long
   * @example "community description useful for generating a test community that we can test against. a community is really cool and ideal"
   */
  description: string;
  /**
   * Followers outlines the number of followers this user profile has
   * @format int64
   */
  followers: string;
  /**
   * Community profile ID
   * @format uint64
   */
  id?: string;
  /**
   * Community name is the name tied to the community profile
   * community name must be at least 5 characters long
   * @example "test-community"
   */
  name: string;
  /**
   * Newsfeed timeline ID Displays all followed and group activities the user
   * follows
   * @example "asndlkhaskhdhasgdahsf-feed-id"
   */
  newsFeedTimelineId: string;
  /**
   * Notification timeline Id. Notification for anything a user/group is
   * following
   * @example "asndlkhaskhdhasgdahsf-feed-id"
   */
  notificationFeedTimelineId: string;
  /**
   * Personal timeline ID Has activities for a user that can be followed
   * @example "asndlkhaskhdhasgdahsf-feed-id"
   */
  personalFeedTimelineId: string;
  /**
   * Private defines wether only approved followers can see what this profile
   * posts
   */
  private: boolean;
  /**
   * ProfileImageUrl witholds the url of a given profile image
   * @example "asndlkhaskhdhasgdahsf.jpg"
   */
  profileImageUrl: string;
  /**
   * Defines topics assoociated with the community of interest
   * must create at least 1 topic
   */
  topics?: Array<Topic>;
  /** Visible defines wether just about anyone can find this group */
  visible: boolean;
}

export interface ContentInsights {
  entities?: Array<Entities>;
  language?: string;
  /** @format float */
  languageConfidence?: number;
  /**
   * @format uint64
   * @example 10
   */
  sentenceCount?: string;
  sentiment?: Sentiment;
  /** @format uint64 */
  wordCount?: string;
}

export type CreateCommentData = any;

export interface CreateCommentReplyResponse {
  comment?: Comment;
}

/**
 * CreateCommentResponse: Represent the object returned as a
 * response to the create comment request
 */
export interface CreateCommentResponse {
  pollPost?: PollPost;
  regularPost?: Post;
  sharedPost?: SharedPost;
}

export type CreateCommunityProfileData = any;

/**
 * CreateCommunityProfileRequest: Represents the request object invoked against
 * the social service to create a community profile account
 */
export interface CreateCommunityProfilePayload {
  /** the community profile being created | type: json_object */
  profile: CommunityProfile;
}

/**
 * CreateCommunityProfileResponse: Represents the response object returned as a
 * response to the `create-community` request
 */
export interface CreateCommunityProfileResponse {
  profile?: CommunityProfile;
}

export type CreateNoteData = any;

export interface CreateNotePayload {
  note?: Note;
  postType: PostType;
}

export interface CreateNoteResponse {
  pollPost?: PollPost;
  regularPost?: Post;
  sharedPost?: SharedPost;
}

export type CreatePollData = any;

export interface CreatePollResponse {
  pollId?: string;
}

export type CreatePostData = any;

/**
 * CreatePostResponse: Represent the object returned as a
 * response to the create post request
 */
export interface CreatePostResponse {
  post?: Post;
}

export type CreatePublicationData = any;

export interface CreatePublicationResponse {
  /** @format uint64 */
  id?: string;
}

/**
 * CreateTopicResponse: Represent the object returned as a response to the
 * create topic request
 */
export interface CreateTopicResponse {
  /** @format uint64 */
  topicId?: string;
}

export type CreateUserProfileData = any;

/**
 * CreateUserProfileRequest: Represents the request object invoked against the
 * social service to create a user profile account
 */
export interface CreateUserProfilePayload {
  /** the set of ids of community profiles to follow */
  idsOfCommunitiesToFollow?: Array<string>;
  isPrivate?: boolean;
  profileImageUrl: string;
  tags: Array<Tags>;
  username: string;
}

/**
 * CreateUserProfileResponse: Represents the response object returned as a
 * response to the `create-user` request
 */
export interface CreateUserProfileResponse {
  /** @format uint64 */
  virtualProfileId?: string;
}

export type DeleteAPostFromAPublicationData = any;

export type DeleteComment2Data = any;

export type DeleteCommentData = any;

export type DeleteCommentReplyData = any;

export interface DeleteCommentReplyResponse {
  comment?: Comment;
}

/**
 * DeleteCommentResponse: Represent the object returned as a
 * response to the delete comment request
 */
export interface DeleteCommentResponse {
  sucess?: boolean;
}

export type DeleteCommunityProfileData = any;

/**
 * DeleteCommunityProfileResponse: Represent the response object returned as a response
 * to the `delete profile` and `delete-community` request
 */
export interface DeleteCommunityProfileResponse {
  success?: boolean;
}

export type DeleteEditorToAPublicationData = any;

export type DeleteNoteData = any;

export interface DeleteNoteResponse {
  success?: boolean;
}

export type DeletePollData = any;

export interface DeletePollResponse {
  success?: boolean;
}

export type DeletePostData = any;

export interface DeletePostFromPublicationResponse {
  success?: boolean;
}

/**
 * DeletePostResponse: Represent the object returned as a
 * response to the delete post request
 */
export interface DeletePostResponse {
  success?: boolean;
}

export interface DeletePublicationEditorResponse {
  success?: boolean;
}

export interface DeletePublicationResponse {
  success?: boolean;
}

export type DeleteUserProfileData = any;

/**
 * DeleteUserProfileResponse: Represent the response object returned as a response
 * to the `delete profile` and `delete-community` request
 */
export interface DeleteUserProfileResponse {
  success?: boolean;
}

export type DeletesABookmarkedPostsData = any;

export type DeletesABookmarkedPublicationData = any;

export type DeletesAPostFromAThreadData = any;

export type DiscoverProfilesData = any;

export interface DiscoverProfilesResponse {
  communityProfiles?: Array<CommunityProfile>;
  topics?: Array<Topic>;
  userProfiles?: Array<UserProfile>;
}

export type EditCommentReplyData = any;

export interface EditCommentReplyResponse {
  reply?: CommentReply;
}

export type EditCommunityProfileData = any;

/**
 * UpdateCommunityProfileResponse: Represents the object returned as a response
 * to `update-commmunity-profile` request
 */
export interface EditCommunityProfileResponse {
  profile?: CommunityProfile;
}

export interface EditNoteResponse {
  pollPost?: PollPost;
  regularPost?: Post;
  sharedPost?: SharedPost;
}

/**
 * EditPostResponse: Represent the object returned as a
 * response to the update post request
 */
export interface EditPostResponse {
  success?: boolean;
}

export type EditUserProfileData = any;

/**
 * EditUserProfileResponse: Represents the object returned as a response to
 * `update-user-profile` request
 */
export interface EditUserProfileResponse {
  profile?: UserProfile;
}

export interface Entities {
  label?: string;
  text?: string;
}

/** FeedActivity references an actvitiy present in a given user's timeline */
export interface FeedActivity {
  /** Actor refers to profile who created the object in the Activity */
  actor: Actor;
  /** Extra encompasses any additional activity metadata */
  extra?: Record<string, string>;
  /**
   * ForeignID is used as a reference identifier between our datastore
   * and getstream
   */
  foreignId?: string;
  /** The ID of the activity from the context of getstream */
  getstreamActivityId: string;
  origin?: string;
  pollPost?: PollPost;
  regularPost?: Post;
  /**
   * Score associated to an activity
   * @format uint64
   */
  score?: string;
  sharedPost?: SharedPost;
  /**
   * Object	Describes the target of the activity. The precise meaning of the
   * activity's target is dependent on the activities verb, but will often be
   * the object the English preposition "to". For instance, in the activity,
   * "John saved a movie to his wishlist", the target of the activity is
   * "wishlist".
   */
  target?: string;
  /** Time is the time this activity was created at */
  time?: string;
  /**
   * The TO field allows you to specify a list of feeds to which the activity
   * should be copied. One way to think about it is as the CC functionality of
   * email.
   */
  to?: Array<string>;
  /** Identifies the action that the activity describes. */
  verb?: PostType;
}

/**
 * FeedType encompasses the various types of feeds a profile can have
 * (in conjuction) with getstream.
 *
 *  - FEED_TYPE_PERSONAL: UserFeed is a profile's personal feed
 *  - FEED_TYPE_NEWS: NewsFeed is a profile's timeline
 *  - FEED_TYPE_NOTIFICATION: NotificationFeed encompasses a profile's notification feed
 * @default "FEED_TYPE_UNSPECIFIED"
 */
export type FeedType =
  | 'FEED_TYPE_UNSPECIFIED'
  | 'FEED_TYPE_PERSONAL'
  | 'FEED_TYPE_NEWS'
  | 'FEED_TYPE_NOTIFICATION';

export type FollowCommunityProfileData = any;

/**
 * FollowProfileResponse: Represent the object returned as a response to the
 * follow profile user request
 */
export interface FollowCommunityProfileResponse {
  success?: boolean;
}

/**
 * FollowProfileResponse: Represent the object returned as a response to the
 * follow profile user request
 */
export interface FollowProfileResponse {
  success?: boolean;
}

export type FollowUserProfileData = any;

export interface GetAccountsFollowingResponse {
  communities?: Array<CommunityProfile>;
  users?: Array<UserProfile>;
}

export type GetBlogPostsByTagData = any;

export interface GetBlogPostsByTagResponse {
  posts?: Array<Post>;
}

export type GetBookmarkedPostsData = any;

export interface GetBookmarkedPostsResponse {
  posts?: Array<Post>;
}

export type GetCommentRepliesData = any;

export interface GetCommentRepliesResponse {
  replies?: Array<CommentReply>;
}

export type GetCommunitiesUserFollowsData = any;

/**
 * GetCommunitiesUserFollowsResponse: Represent the response object invoked
 * against the social service to get all the communities a given user follows
 */
export interface GetCommunitiesUserFollowsResponse {
  communities?: Array<CommunityProfile>;
}

export type GetCommunityBlogPostsData = any;

export interface GetCommunityBlogPostsResponse {
  posts?: Array<Post>;
}

export type GetCommunityFeedData = any;

/**
 * GetCommunityFeedResponse: Represent the object returned as a
 * response to the get community feed request
 */
export interface GetCommunityFeedResponse {
  baseTimeline?: BaseTimeline;
  nextPageToken?: string;
  notificationTimeline?: NotificationTimeline;
}

export type GetCommunityProfileData = any;

/**
 * GetCommunityProfileResponse: Represents the object returned as a response to
 * `get-commmunity-profile` request
 */
export interface GetCommunityProfileResponse {
  metadata?: SocialRelationshipMetadata;
  profile?: CommunityProfile;
}

export type GetCommunityProfilesData = any;

export interface GetCommunityProfilesResponse {
  /** @format int32 */
  nextPageNumber?: number;
  profiles?: Array<CommunityProfile>;
}

export interface GetFollowersResponse {
  users?: Array<UserProfile>;
}

/**
 * GetPendingFollowRequestsResponse: Represent the response object invoked
 * against the social service to get all pending follow requests tied to a user
 */
export interface GetPendingFollowsResponse {
  requests?: Array<PendingFollowRequest>;
}

export type GetPollData = any;

export interface GetPollResponse {
  poll?: PollPost;
}

export type GetPollsData = any;

export interface GetPollsResponse {
  polls?: Array<PollPost>;
}

export type GetPost2Data = any;

export type GetPost3Data = any;

export type GetPostData = any;

/**
 * GetPostResponse: Represent the object returned as a
 * response to the get post request
 */
export interface GetPostResponse {
  post?: Post;
}

export interface GetPostThreadResponse {
  posts?: Array<Post>;
}

/**
 * GetPostsByTopicResponse: Represent the object returned as a
 * response to the get posts by topic request
 */
export interface GetPostsByTopicResponse {
  posts?: Array<Post>;
}

export type GetPublication2Data = any;

export type GetPublicationData = any;

export interface GetPublicationResponse {
  /**
   * Use Case
   * - An online magazine, a publication with a fixed publication staff that posts stories around a specific topic
   * - A community publication, a publication that accepts stories published around Medium
   * - A company blog, a publication that is created specifically to share company news
   * - A collection of individual stories by a single author that are parts of a larger whole
   */
  publication?: Publication;
}

export type GetTopics2Data = any;

export type GetTopics3Data = any;

export type GetTopicsData = any;

/**
 * GetTopicsOfCommunitiesUserFollowsResponse: Represent the response object
 * invoked against the social service to get all the communities a given user
 * follows
 */
export interface GetTopicsOfCommunitiesUserFollowsResponse {
  topic?: Array<Topic>;
}

export type GetUserFeedData = any;

/**
 * GetUserFeedResponse: Represent the object returned as a
 * response to the get user feed request
 */
export interface GetUserFeedResponse {
  baseTimeline?: BaseTimeline;
  nextPageToken?: string;
  notificationTimeline?: NotificationTimeline;
}

export type GetUserProfileData = any;

/**
 * GetUserProfileResponse: Represents the object returned as a response to
 * `get-user-profile` request
 */
export interface GetUserProfileResponse {
  metadata?: SocialRelationshipMetadata;
  profile?: UserProfile;
}

export type GetUserProfilesData = any;

export interface GetUserProfilesResponse {
  /** @format int32 */
  nextPageNumber?: number;
  profiles?: Array<UserProfile>;
}

export type GetUsersAndCommunitiesFollowingData = any;

export type GetsAPostsThreadData = any;

export type HealthCheckData = any;

/**
 * ServiceHealthResponse: Represent the object returned as a response to the
 * service health api invocation
 */
export interface HealthCheckResponse {
  healthy?: boolean;
}

export interface Media {
  createdAt?: string;
  id?: string;
  link?: string;
  metadata?: MediaMetadata;
}

/** @default "MEDIA_CROP_UNSPECIFIED" */
export type MediaCrop =
  | 'MEDIA_CROP_UNSPECIFIED'
  | 'MEDIA_CROP_TOP'
  | 'MEDIA_CROP_BOTTOM'
  | 'MEDIA_CROP_LEFT'
  | 'MEDIA_CROP_RIGHT'
  | 'MEDIA_CROP_CENTER';

export interface MediaMetadata {
  crop?: MediaCrop;
  id?: string;
  /** @format int64 */
  imageHeight?: string;
  /** @format int64 */
  imageWidth?: string;
  resize?: MediaResize;
  type?: MediaType;
}

/** @default "MEDIA_RESIZE_UNSPECIFIED" */
export type MediaResize =
  | 'MEDIA_RESIZE_UNSPECIFIED'
  | 'MEDIA_RESIZE_CLIP'
  | 'MEDIA_RESIZE_CROP'
  | 'MEDIA_RESIZE_SCALE';

/** @default "MEDIA_TYPE_UNSPECIFIED" */
export type MediaType =
  | 'MEDIA_TYPE_UNSPECIFIED'
  | 'MEDIA_TYPE_IMAGE'
  | 'MEDIA_TYPE_VIDEO';

/**
 * A note is a response a user can leave on another user's piece of content. Notes can
 * only be seen by the user who created the content (private) and should serve as some form of
 * intimate feedback protocol
 */
export interface Note {
  /**
   * AccountType is the account type of the creator of this piece of
   * content
   * @gotag: bson:"authorAccountType"
   */
  authorAccountType?: AccountType;
  /**
   * Profile image of the person making this note
   * @gotag: bson:"authorProfileImage"
   */
  authorProfileImage: string;
  /**
   * Username of the person making the note
   * @gotag: bson:"authorUserName"
   */
  authorUserName: string;
  /**
   * Content defining the note
   * @gotag: bson:"content"
   */
  content: string;
  /**
   * Time when the note was created
   * @gotag: bson:"createdAt"
   */
  createdAt?: string;
  /**
   * Hashtags defined in the note
   * @gotag: bson:"hashtags"
   */
  hashtags?: Array<string>;
  /**
   * Note ID
   * @gotag: bson:"_id,omitempty"
   */
  id?: string;
  /**
   * Media payload tied to the note
   * @gotag: bson:"media"
   */
  media?: Media;
  /**
   * Profiles mentioned in the note - NOTE: only the creator of the article whom this
   * note is attached to and the mentioned members will be notified. Additionally, this note
   * will only be viewable by those folks
   * @gotag: bson:"mentions"
   */
  mentions?: Array<string>;
  /**
   * ID of either the user profile or the community profile creating the note
   * @gotag: bson:"profileId"
   * @format uint64
   */
  profileId?: string;
  /**
   * Platform wide ID of the user creating the note
   * @gotag: bson:"simfinyPlatformUserId"
   * @format uint64
   */
  simfinyPlatformUserId?: string;
}

export interface NotificationActivity {
  activityId?: string;
  actorName?: string;
  foreignId?: string;
  object?: string;
  origin?: string;
  target?: string;
  time?: string;
  verb?: string;
}

export interface NotificationFeedGroup {
  activities?: Array<NotificationActivity>;
  /** @format uint64 */
  activityCount?: string;
  /** @format uint64 */
  actorCount?: string;
  createdAt?: string;
  feedGroupId?: string;
  group?: string;
  isRead?: boolean;
  isSeen?: boolean;
  updatedAt?: string;
  verb?: string;
}

export interface NotificationTimeline {
  activities?: Array<NotificationFeedGroup>;
}

/**
 * PendingFollowRequest defines the record describing the given pending follow
 * relationship
 */
export interface PendingFollowRequest {
  /** The time the follow request originated */
  createdAt: string;
  /**
   * The ID of the follow request
   * @format uint64
   */
  followRequestId?: string;
  /** The profile who initiated follow request */
  followerRequestionToFollow: UserProfile;
}

export interface PollPost {
  /**
   * PostType defines the intent of the post
   * @gotag: bson:"action"
   */
  action: PostType;
  /**
   * AffinityScore is the average rating users on the platform associate with a
   * piece of content. It is taken as the weighted average across all reactions
   * for the particular post
   * @gotag: bson:"affinityScore"
   * @format uint64
   */
  affinityScore?: string;
  /**
   * AccountType is the account type of the creator of this piece of
   * content
   * @gotag: bson:"authorAccountType"
   */
  authorAccountType?: AccountType;
  /**
   * Profile image of the person making this comment
   * @gotag: bson:"authorProfileImage"
   */
  authorProfileImage?: string;
  /**
   * Username of the person making the comment
   * @gotag: bson:"authorUsername"
   */
  authorUsername?: string;
  /**
   * BackgroundImageUrl signifies an image to associate to a post object.
   * Such urls are only associated when a post is an article or short story
   * @gotag: bson:"backgroundImageUrl"
   */
  backgroundImageUrl?: string;
  /**
   * Comments tied to the post
   * @gotag: bson:"comments"
   */
  comments?: Array<Comment>;
  /**
   * Content is the content the post witholds
   * Content is a string of text that is at least 50 characters long
   * @gotag: bson:"content"
   */
  content: string;
  /**
   * Time post was created at
   * @gotag: bson:"createdAt"
   */
  createdAt?: string;
  /**
   * Blob of extra content tied to the post
   * @gotag: bson:"extra"
   */
  extra?: Record<string, string>;
  /**
   * Hashtags defined in the post
   * @gotag: bson:"hashtags"
   */
  hashtags?: Array<string>;
  /**
   * Post ID
   * @gotag: bson:"_id,omitempty"
   */
  id?: string;
  /**
   * Insights is a map of all insights associated to a post
   * @gotag: bson:"insights"
   */
  insights?: ContentInsights;
  /**
   * Media associated with the post
   * @gotag: bson:"media"
   */
  media?: Media;
  /**
   * Profiles mentioned in the post
   * @gotag: bson:"mentions"
   */
  mentions?: Array<string>;
  /**
   * the set of notes associated to this piece of content
   * @gotag: bson:"notes"
   */
  notes?: Array<Note>;
  /**
   * the distribution of poll responses (in percentage form)
   * @gotag: bson:"pollDistribution"
   */
  pollDistribution?: Record<string, number>;
  /**
   * the end date of the given poll
   * @gotag: bson:"pollEndDate"
   * @format date-time
   */
  pollEndDate?: string;
  /**
   * the set of options the poll witholds
   * @gotag: bson:"pollOptions"
   */
  pollOptions: Array<string>;
  /**
   * ID of the profile creating the post
   * @gotag: bson:"profileId"
   * @format uint64
   */
  profileId?: string;
  /**
   * QualityScore is the quality of the given piece of content.
   * It is taken as the weighted average across all reactions for the particular
   * post
   * @gotag: bson:"qualityScore"
   * @format uint64
   */
  qualityScore?: string;
  /**
   * ID of the user creating the post
   * @gotag: bson:"simfinyPlatformUserId"
   * @format uint64
   */
  simfinyPlatformUserId?: string;
  /**
   * Tags associated with the post
   * @gotag: bson:"tags"
   */
  tags?: Array<string>;
  /**
   * a thread a is a continuation of posts associated to a singular post
   * @gotag: bson:"thread"
   */
  thread?: Thread;
  /**
   * thread participant posts are not sent to get stream to be part of the social graph.
   * posts that are the parent of their thread are sent to get stream to comprise the social graph
   * @gotag: bson:"threadParticipantType"
   */
  threadParticipantType?: ThreadParticipantType;
  /**
   * Title of the post
   * @gotag: bson:"title"
   */
  title?: string;
  /**
   * The topic to which this post is currently associated to. For non-community
   * profiles, posts are not associated to any topic. However for the commmunity
   * case, posts are associated to topic
   * @gotag: bson:"topicName"
   */
  topicName?: string;
  /**
   * UserIDToAffinityScoreMap witholds a mapping of all user profiles who left
   * an affinity score
   * @gotag: bson:"userIdToAffinityScoreMap"
   */
  userIdToAffinityScoreMap?: Record<string, string>;
  /**
   * A hash map of user ids to poll responses left by users
   * @gotag: bson:"userIdToPollResponseMap"
   */
  userIdToPollResponsesMap?: Record<string, PollResponse>;
  /**
   * a map of user ids to reactions left by users
   * @gotag: bson:"userIdToReactionMap"
   */
  userIdToReactionMap?: Record<string, Reaction>;
  /**
   * ReportCount details the number of reports were associated with a post
   * A report is used as a signal to disclose the post's content are in
   * violation of platform rules
   * @gotag: bson:"userIdToReportsMap"
   */
  userIdToReportsMap?: Record<string, string>;
}

export interface PollResponse {
  /**
   * the id of the poll response
   * @gotag: bson:"_id,omitempty"
   */
  id?: string;
  /**
   * the index of the given response
   * @gotag: bson:"responseIdx"
   * @format uint64
   */
  responseIdx?: string;
  /**
   * the actual poll response left by the user
   * @gotag: bson:"responseValue"
   */
  responseValue?: string;
  /**
   * the user id who left the poll response
   * @gotag: bson:"userId"
   * @format uint64
   */
  userId?: string;
}

/**
 * Posts: Critical to activities and define the content sent over by users and
 * communities
 */
export interface Post {
  /**
   * PostType defines the intent of the post
   * @gotag: bson:"action"
   */
  action: PostType;
  /**
   * AffinityScore is the average rating users on the platform associate with a
   * piece of content. It is taken as the weighted average across all reactions
   * for the particular post
   * @gotag: bson:"affinityScore"
   * @format uint64
   */
  affinityScore?: string;
  /**
   * if the post is a question, this field will hold the response to the question by the ai
   * @gotag: bson:"aiGeneratedQuestionResponse"
   */
  aiGeneratedQuestionResponse?: string;
  /**
   * AccountType is the account type of the creator of this piece of
   * content
   * @gotag: bson:"authorAccountType"
   */
  authorAccountType?: AccountType;
  /**
   * Profile image of the person making this comment
   * @gotag: bson:"authorProfileImage"
   */
  authorProfileImage?: string;
  /**
   * Username of the person making the comment
   * @gotag: bson:"authorUsername"
   */
  authorUsername?: string;
  /**
   * BackgroundImageUrl signifies an image to associate to a post object.
   * Such urls are only associated when a post is an article or short story
   * @gotag: bson:"backgroundImageUrl"
   */
  backgroundImageUrl?: string;
  /**
   * Comments tied to the post
   * @gotag: bson:"comments"
   */
  comments?: Array<Comment>;
  /**
   * Content is the content the post witholds
   * Content is a string of text that is at least 50 characters long
   * @gotag: bson:"content"
   */
  content: string;
  /**
   * Time post was created at
   * @gotag: bson:"createdAt"
   */
  createdAt?: string;
  /**
   * Blob of extra content tied to the post
   * @gotag: bson:"extra"
   */
  extra?: Record<string, string>;
  /**
   * Hashtags defined in the post
   * @gotag: bson:"hashtags"
   */
  hashtags?: Array<string>;
  /**
   * Post ID
   * @gotag: bson:"_id,omitempty"
   */
  id?: string;
  /** @gotag: bson:"insights" */
  insights?: ContentInsights;
  /**
   * Media associated with the post
   * @gotag: bson:"media"
   */
  media?: Media;
  /**
   * Profiles mentioned in the post
   * @gotag: bson:"mentions"
   */
  mentions?: Array<string>;
  /**
   * the set of notes associated to this piece of content
   * @gotag: bson:"notes"
   */
  notes?: Array<Note>;
  /**
   * @gotag: bson:"profileId"
   * @format uint64
   */
  profileId?: string;
  /**
   * QualityScore is the quality of the given piece of content.
   * @gotag: bson:"qualityScore"
   * @format uint64
   */
  qualityScore?: string;
  /**
   * ReadingTime outlines the number of minutes it would take to read the
   * contents of this post
   * @gotag: bson:"readingTime"
   */
  readingTime?: string;
  /**
   * ID of the user creating the post
   * @gotag: bson:"simfinyPlatformUserId"
   * @format uint64
   */
  simfinyPlatformUserId?: string;
  /** @gotag: bson:"tags" */
  tags?: Array<string>;
  /**
   * a thread a is a continuation of posts associated to a singular post
   * @gotag: bson:"thread"
   */
  thread?: Thread;
  /**
   * thread participant posts are not sent to get stream to be part of the social graph.
   * posts that are the parent of their thread are sent to get stream to comprise the social graph
   * @gotag: bson:"threadParticipantType"
   */
  threadParticipantType?: ThreadParticipantType;
  /** @gotag: bson:"title" */
  title?: string;
  /**
   * The topic to which this post is currently associated to. For non-community
   * profiles, posts are not associated to any topic. However for the commmunity
   * case, posts are associated to topic
   * @gotag: bson:"topicName"
   */
  topicName?: string;
  /**
   * UserIDToAffinityScoreMap witholds a mapping of all user profiles who left
   * an affinity score
   * @gotag: bson:"userIdToAffinityScoreMap"
   */
  userIdToAffinityScoreMap?: Record<string, string>;
  /**
   * a map of user ids to reactions left by users
   * @gotag: bson:"userIdToReactionMap"
   */
  userIdToReactionMap?: Record<string, Reaction>;
  /**
   * ReportCount details the number of reports were associated with a post
   * A report is used as a signal to disclose the post's content are in
   * violation of platform rules
   * @gotag: bson:"userIdToReportsMap"
   */
  userIdToReportsMap?: Record<string, string>;
}

/**
 * PostType defines the type of content present in a post
 * @default "POST_TYPE_UNSPECIFIED"
 */
export type PostType =
  | 'POST_TYPE_UNSPECIFIED'
  | 'POST_TYPE_POST'
  | 'POST_TYPE_REPOST'
  | 'POST_TYPE_QUESTION'
  | 'POST_TYPE_ACHIEVEMENT'
  | 'POST_TYPE_ANNOUNCEMENT'
  | 'POST_TYPE_POLL'
  | 'POST_TYPE_ARTICLE'
  | 'POST_TYPE_SHORT_STORY';

/**
 * A Publication is a collections of stories based around a common theme. Anyone can create them
 * As the creator of a publication, you're an editor by default, which means you have the ability to
 * a) add writers to your publication,
 * b) edit and publish the stories that are submitted by your writers, and
 * c) review the metrics for all of the stories that are part of your publication.
 * As the publication's creator, you'll also have the ability
 * to appoint new editors (so they can do all of that stuff I just mentioned)
 * Use Case
 * - An online magazine, a publication with a fixed publication staff that posts stories around a specific topic
 * - A community publication, a publication that accepts stories published around Medium
 * - A company blog, a publication that is created specifically to share company news
 * - A collection of individual stories by a single author that are parts of a larger whole
 */
export interface Publication {
  admin?: UserProfile;
  /** @format uint64 */
  adminSimfinyPlatformUserId: string;
  createdAt?: string;
  description?: string;
  editors?: Array<UserProfile>;
  /** @format uint64 */
  id?: string;
  /** stories are post that can be submitted only by the publication editors */
  postIds?: Array<string>;
  publicationName: string;
  subjects: Array<string>;
  tags: Array<string>;
  type: PublicationType;
}

/**
 * - PUBLICATION_TYPE_MAGAZINE: a publication with a fixed publication staff that posts stories around a specific topic
 *  - PUBLICATION_TYPE_PLATFORM: a publication that accepts stories published around simfiny
 *  - PUBLICATION_TYPE_BLOG: A community blog, a publication that is created specifically to share subset (community) news
 *  - PUBLICATION_TYPE_SUBJECTS: A collection of individual stories by a set of authors that are part of a whole
 * @default "PUBLICATION_TYPE_UNSPECIFIED"
 */
export type PublicationType =
  | 'PUBLICATION_TYPE_UNSPECIFIED'
  | 'PUBLICATION_TYPE_MAGAZINE'
  | 'PUBLICATION_TYPE_PLATFORM'
  | 'PUBLICATION_TYPE_BLOG'
  | 'PUBLICATION_TYPE_SUBJECTS';

export type ReactToComment2Data = any;

export type ReactToCommentData = any;

export interface ReactToCommentReplyResponse {
  reply?: CommentReply;
}

export interface ReactToCommentResponse {
  comment?: Comment;
}

export type ReactToPostData = any;

export interface ReactToPostResponse {
  pollPost?: PollPost;
  regularPost?: Post;
  sharedPost?: SharedPost;
}

/** @default "REACTION_UNSPECIFIED" */
export type Reaction =
  | 'REACTION_UNSPECIFIED'
  | 'REACTION_LIKE'
  | 'REACTION_LOVE'
  | 'REACTION_HAHA'
  | 'REACTION_WOW'
  | 'REACTION_SAD'
  | 'REACTION_ANGRY'
  | 'REACTION_DISLIKE';

export type ReadynessCheckData = any;

/**
 * ReadynessCheckResponse Represents a request invoked against the social service for the
 * readyness check response
 */
export interface ReadynessCheckResponse {
  ready?: boolean;
}

export interface RemoveBookmarkedPostResponse {
  bookmark?: Bookmark;
}

export interface RemoveBookmarkedPublicationResponse {
  bookmark?: Bookmark;
}

export interface RemovePostFromThreadResponse {
  success?: boolean;
}

export type RepliesToACommentData = any;

export type ReportCommentData = any;

/**
 * ReportCommentRequest: Represents the request object invoked against the
 * social service to report a comment
 */
export interface ReportCommentPayload {
  /** The type of post being reacted to | type: string */
  postType: PostType;
}

export type ReportCommentReplyData = any;

export interface ReportCommentReplyPayload {
  postType: PostType;
}

export interface ReportCommentReplyResponse {
  reply?: CommentReply;
}

export interface ReportCommentResponse {
  comment?: Comment;
}

export type ReportPostData = any;

/**
 * ReportPostResponse: Represent the object returned as a
 * response to the report post request
 */
export interface ReportPostResponse {
  post?: Post;
}

export type RespondToPollData = any;

export interface RespondToPollPayload {
  /** the poll option the user is responding with */
  pollOption: string;
  /**
   * the index of the poll option the user is responding with
   * @format uint64
   */
  pollOptionIdx: string;
}

export interface RespondToPollResponse {
  poll?: PollPost;
}

export interface Sentiment {
  /**
   * @format float
   * @example 93
   */
  compound?: number;
  /**
   * @format float
   * @example 30
   */
  negative?: number;
  /**
   * @format float
   * @example 50
   */
  neutral?: number;
  /**
   * @format float
   * @example 89
   */
  positive?: number;
}

export type SharePostData = any;

export type SharePostPayload = string;

export interface SharePostResponse {
  success?: boolean;
}

/**
 * SharedPost: Posts reshared by other profiles
 * TODO: need to expose api endpoints to interact with shared posts
 */
export interface SharedPost {
  /**
   * PostType defines the intent of the post
   * @gotag: bson:"action"
   */
  action: PostType;
  /**
   * AffinityScore is the average rating users on the platform associate with a
   * piece of content. It is taken as the weighted average across all reactions
   * for the particular post
   * @gotag: bson:"affinityScore"
   * @format uint64
   */
  affinityScore?: string;
  /**
   * AccountType is the account type of the creator of this piece of
   * content
   * @gotag: bson:"authorAccountType"
   */
  authorAccountType?: AccountType;
  /**
   * Username of the person making the comment
   * @gotag: bson:"authorUsername"
   */
  authorUsername?: string;
  /**
   * Comments tied to the post
   * @gotag: bson:"comments"
   */
  comments?: Array<Comment>;
  /**
   * Content is the content the post witholds
   * Content is a string of text that is at least 50 characters long
   * @gotag: bson:"content"
   */
  content: string;
  /**
   * Time post was created at
   * @gotag: bson:"createdAt"
   */
  createdAt?: string;
  /**
   * Blob of extra content tied to the post
   * @gotag: bson:"extra"
   */
  extra?: Record<string, string>;
  /**
   * Hashtags defined in the post
   * @gotag: bson:"hashtags"
   */
  hashtags?: Array<string>;
  /**
   * RePost ID
   * @gotag: bson:"_id,omitempty"
   */
  id?: string;
  /**
   * Profiles mentioned in the post
   * @gotag: bson:"mentions"
   */
  mentions?: Array<string>;
  /**
   * the set of notes associated to this piece of content
   * @gotag: bson:"notes"
   */
  notes?: Array<Note>;
  /**
   * The username of the original author
   * @gotag: bson:"originalAuthorUsername"
   */
  originalAuthorUsername?: string;
  /**
   * originalPostType defines the intent of the post
   * @gotag: bson:"originalPostAction"
   */
  originalPostAction: PostType;
  /**
   * Original Post ID
   * @gotag: bson:"originalPostId"
   * @minLength 1
   * @example "test-user"
   */
  originalPostId: string;
  /**
   * The profile Id of the user who owned the original post
   * @gotag: bson:"originalPostUserProfileId"
   * @format uint64
   */
  originalPostUserProfileId?: string;
  /**
   * The simfiny wide user id of the profile who owned the original post
   * @gotag: bson:"originalPostUserSimfinyPlaformId"
   * @format uint64
   */
  originalPostUserSimfinyPlaformId?: string;
  /**
   * ID of the profile resharing the post
   * @gotag: bson:"profileId"
   * @format uint64
   */
  profileId?: string;
  /**
   * QualityScore is the quality of the given piece of content.
   * It is taken as the weighted average across all reactions for the particular
   * post
   * @gotag: bson:"qualityScore"
   * @format uint64
   */
  qualityScore?: string;
  /**
   * ID of the user resharing the post
   * @gotag: bson:"simfinyPlatformUserId"
   * @format uint64
   */
  simfinyPlatformUserId?: string;
  /**
   * Tags associated with the post
   * @gotag: bson:"tags"
   */
  tags?: Array<string>;
  /**
   * a thread a is a continuation of posts associated to a singular post
   * @gotag: bson:"thread"
   */
  thread?: Thread;
  /**
   * UserIDToAffinityScoreMap witholds a mapping of all user profiles who left
   * an affinity score
   * @gotag: bson:"userIdToAffinityScoreMap"
   */
  userIdToAffinityScoreMap?: Record<string, string>;
  /**
   * a map of user ids to reactions left by users
   * @gotag: bson:"userIdToReactionMap"
   */
  userIdToReactionMap?: Record<string, Reaction>;
  /**
   * ReportCount details the number of reports were associated with a post
   * A report is used as a signal to disclose the post's content are in
   * violation of platform rules
   * @gotag: bson:"userIdToReportsMap"
   * AccountType is the account type of the creator of this piece of
   *  content
   */
  userIdToReportsMap?: Record<string, string>;
}

export interface SocialProfileMetadata {
  /** @format uint64 */
  profileId?: string;
  profileType?: AccountType;
}

export interface SocialRelationshipMetadata {
  following?: boolean;
  followingSince?: string;
  sourceProfile: SocialProfileMetadata;
  targetProfile: SocialProfileMetadata;
}

export interface Status {
  /** @format int32 */
  code?: number;
  details?: Array<Any>;
  message?: string;
}

/** Tags: tags that can be associated to a record */
export interface Tags {
  /**
   * the description of the tag ... tag must be at least 50 characters long
   * @example "test-description sakjlDKJGSAHGHFDHSGJHFGAHDFJKGSHAJDLgAKSGDHAS CSVDJKSADASKJHDASFDGJKJLHSAHGFJDSAHD kjskhdgfhgdhfgkhsdfdsdfdssdfsdf"
   */
  description: string;
  /**
   * the id of the tag record
   * @format uint64
   */
  id?: string;
  /**
   * the name of the tag ... tag must be at least 5 characters long
   * @example "test-tagname"
   */
  tagName: string;
}

export interface Thread {
  /** @gotag: bson:"createdAt" */
  createdAt?: string;
  /**
   * Thread ID
   * @gotag: bson:"_id,omitempty"
   */
  id?: string;
  /**
   * the id of the parent post
   * @gotag: bson:"parentPostId"
   */
  parentPostId?: string;
  /**
   * a list of post ids associated to this thread
   * @gotag: bson:"postIds"
   */
  postIds?: Array<string>;
  /** @gotag: bson:"updatedAt" */
  updatedAt?: string;
}

/** @default "THREAD_PARTICIPANT_TYPE_UNSPECIFIED" */
export type ThreadParticipantType =
  | 'THREAD_PARTICIPANT_TYPE_UNSPECIFIED'
  | 'THREAD_PARTICIPANT_TYPE_PARENT'
  | 'THREAD_PARTICIPANT_TYPE_PARTICIPANT';

/** Topic: topic that can be associated to a record */
export interface Topic {
  /**
   * the description of the topic
   * @example "test-description sakjlDKJGSAHGHFDHSGJHFGAHDFJKGSHAJDLgAKSGDHAS CSVDJKSADASKJHDASFDGJKJLHSAHGFJDSAHD kjskhdgfhgdhfgkhsdfdsdfdssdfsdf"
   */
  description: string;
  /**
   * the id of the topic
   * @format uint64
   */
  id?: string;
  /**
   * the url of the topic image
   * the image url is required
   * @minLength 1
   * @example "test-tagname"
   */
  imageUrl: string;
  /**
   * the name of the topic
   * @example "test-tagname"
   */
  topicName: string;
}

export type UpdateNoteData = any;

/** UserProfile: The profile object tied to a given user */
export interface UserProfile {
  /**
   * The id of the algolia record referencing this user
   * @example "asndlkhaskhdhasgdahsf-feed-id"
   */
  algoliaId: string;
  /** all the bookmarked pieces of content on the platform */
  bookmarks: Bookmark;
  /**
   * Followers outlines the number of followers this user profile has
   * @format int64
   */
  followers: string;
  /**
   * Number of people account is following
   * @format int64
   */
  following: string;
  /**
   * User profile ID
   * @format uint64
   */
  id?: string;
  /**
   * Profile name is the name tied to the user profile
   * user name must be at least 5 characters long
   * @example "test-user"
   */
  name: string;
  /**
   * Newsfeed timeline ID Displays all followed and group activities the user
   * follows
   * @example "asndlkhaskhdhasgdahsf-feed-id"
   */
  newsFeedTimelineId: string;
  /**
   * Notification timeline Id. Notification for anything a user/group is
   * following
   * @example "asndlkhaskhdhasgdahsf-feed-id"
   */
  notificationFeedTimelineId: string;
  /**
   * Personal timeline ID Has activities for a user that can be followed
   * @example "asndlkhaskhdhasgdahsf-feed-id"
   */
  personalFeedTimelineId: string;
  /**
   * Private defines wether only approved followers can see what this profile
   * posts
   */
  private: boolean;
  /**
   * ProfileImageUrl witholds the url of a given profile image
   * @example "asndlkhaskhdhasgdahsf.jpg"
   */
  profileImageUrl: string;
  /** Tags are interests */
  tags: Array<Tags>;
}
