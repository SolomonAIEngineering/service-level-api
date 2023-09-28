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

import {
  AcceptFollowRequestData,
  AddCommentQualityScoreData,
  AddEditorToAPublicationData,
  AddPostToAThreadData,
  AddPostToPublicationData,
  AddQualityScoreData,
  BlockUserProfileData,
  BookmarkAPostData,
  BookmarkAPublicationData,
  Comment,
  CommentReply,
  CommunityProfile,
  CreateCommentData,
  CreateCommunityProfileData,
  CreateCommunityProfilePayload,
  CreateNoteData,
  CreateNotePayload,
  CreatePollData,
  CreatePostData,
  CreatePublicationData,
  CreateUserProfileData,
  CreateUserProfilePayload,
  DeleteAPostFromAPublicationData,
  DeleteComment2Data,
  DeleteCommentData,
  DeleteCommentReplyData,
  DeleteCommunityProfileData,
  DeleteEditorToAPublicationData,
  DeleteNoteData,
  DeletePollData,
  DeletePostData,
  DeleteUserProfileData,
  DeletesABookmarkedPostsData,
  DeletesABookmarkedPublicationData,
  DeletesAPostFromAThreadData,
  DiscoverProfilesData,
  EditCommentReplyData,
  EditCommunityProfileData,
  FollowCommunityProfileData,
  FollowUserProfileData,
  GetBlogPostsByTagData,
  GetBookmarkedPostsData,
  GetCommentRepliesData,
  GetCommunitiesUserFollowsData,
  GetCommunityBlogPostsData,
  GetCommunityFeedData,
  GetCommunityProfileData,
  GetCommunityProfilesData,
  GetPollData,
  GetPollsData,
  GetPost2Data,
  GetPost3Data,
  GetPostData,
  GetPublication2Data,
  GetPublicationData,
  GetTopics2Data,
  GetTopics3Data,
  GetTopicsData,
  GetUserFeedData,
  GetUserProfileData,
  GetUserProfilesData,
  GetUsersAndCommunitiesFollowingData,
  GetsAPostsThreadData,
  Note,
  PollPost,
  Post,
  PostType,
  Publication,
  ReactToComment2Data,
  ReactToCommentData,
  ReactToPostData,
  RepliesToACommentData,
  ReportCommentData,
  ReportCommentPayload,
  ReportCommentReplyData,
  ReportCommentReplyPayload,
  ReportPostData,
  RespondToPollData,
  RespondToPollPayload,
  SharePostData,
  SharePostPayload,
  Status,
  Topic,
  UpdateNoteData,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class V1<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description This endpoint enables a client to accept a follow request from a source a user profile
   *
   * @tags user profile
   * @name AcceptFollowRequest
   * @summary Accepts a user's follow request
   * @request POST:/v1/social/user/follow/accept/{followRecordId}
   * @response `200` `AcceptFollowRequestData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  acceptFollowRequest = (followRecordId: string, params: RequestParams = {}) =>
    this.request<AcceptFollowRequestData, Status>({
      path: `/v1/social/user/follow/accept/${followRecordId}`,
      method: "POST",
      ...params,
    });
  /**
   * @description This endpoint enables a client to add a quality score to a comment
   *
   * @tags comment
   * @name AddCommentQualityScore
   * @summary Add Comment Quality Score
   * @request POST:/v1/social/user/{userId}/post/{postId}/comment/{commentId}/quality
   * @response `200` `AddCommentQualityScoreData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  addCommentQualityScore = (
    userId: string,
    postId: string,
    commentId: string,
    query: {
      /**
       * The type of post being reacted to | type: string
       * @default "POST_TYPE_UNSPECIFIED"
       */
      postType:
        | "POST_TYPE_UNSPECIFIED"
        | "POST_TYPE_POST"
        | "POST_TYPE_REPOST"
        | "POST_TYPE_QUESTION"
        | "POST_TYPE_ACHIEVEMENT"
        | "POST_TYPE_ANNOUNCEMENT"
        | "POST_TYPE_POLL"
        | "POST_TYPE_ARTICLE"
        | "POST_TYPE_SHORT_STORY";
    },
    qualityScore: string,
    params: RequestParams = {},
  ) =>
    this.request<AddCommentQualityScoreData, Status>({
      path: `/v1/social/user/${userId}/post/${postId}/comment/${commentId}/quality`,
      method: "POST",
      query: query,
      body: qualityScore,
      ...params,
    });
  /**
   * @description This endpoint enables a client to add an editor to a publication
   *
   * @tags publication
   * @name AddEditorToAPublication
   * @summary Adds an editor to a publication
   * @request PUT:/v1/social/user/{adminUserId}/publication/{publicationId}/editor/{editorUserId}
   * @response `200` `AddEditorToAPublicationData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  addEditorToAPublication = (
    adminUserId: string,
    publicationId: string,
    editorUserId: string,
    params: RequestParams = {},
  ) =>
    this.request<AddEditorToAPublicationData, Status>({
      path: `/v1/social/user/${adminUserId}/publication/${publicationId}/editor/${editorUserId}`,
      method: "PUT",
      ...params,
    });
  /**
   * @description This endpoint enables a client to add a post to a thread
   *
   * @tags thread
   * @name AddPostToAThread
   * @summary Adds A Post To A Thread
   * @request POST:/v1/social/user/{userId}/post/{parentPostId}/type/{postType}/thread
   * @response `200` `AddPostToAThreadData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  addPostToAThread = (
    userId: string,
    parentPostId: string,
    postType:
      | "POST_TYPE_UNSPECIFIED"
      | "POST_TYPE_POST"
      | "POST_TYPE_REPOST"
      | "POST_TYPE_QUESTION"
      | "POST_TYPE_ACHIEVEMENT"
      | "POST_TYPE_ANNOUNCEMENT"
      | "POST_TYPE_POLL"
      | "POST_TYPE_ARTICLE"
      | "POST_TYPE_SHORT_STORY",
    post: Post,
    params: RequestParams = {},
  ) =>
    this.request<AddPostToAThreadData, Status>({
      path: `/v1/social/user/${userId}/post/${parentPostId}/type/${postType}/thread`,
      method: "POST",
      body: post,
      ...params,
    });
  /**
   * @description This endpoint enables a client to add a post to a publication
   *
   * @tags publication
   * @name AddPostToPublication
   * @summary Add a post to a publication
   * @request POST:/v1/social/user/{editorUserId}/publication/{publicationId}
   * @response `200` `AddPostToPublicationData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  addPostToPublication = (editorUserId: string, publicationId: string, post: Post, params: RequestParams = {}) =>
    this.request<AddPostToPublicationData, Status>({
      path: `/v1/social/user/${editorUserId}/publication/${publicationId}`,
      method: "POST",
      body: post,
      ...params,
    });
  /**
   * @description This endpoint enables a client add a quality score to a post
   *
   * @tags post
   * @name AddQualityScore
   * @summary Adds a quality score to a post
   * @request POST:/v1/social/user/{userId}/post/{postId}/quality
   * @response `200` `AddQualityScoreData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  addQualityScore = (
    userId: string,
    postId: string,
    query: {
      /**
       * The type of post being reacted to | type: string
       * @default "POST_TYPE_UNSPECIFIED"
       */
      postType:
        | "POST_TYPE_UNSPECIFIED"
        | "POST_TYPE_POST"
        | "POST_TYPE_REPOST"
        | "POST_TYPE_QUESTION"
        | "POST_TYPE_ACHIEVEMENT"
        | "POST_TYPE_ANNOUNCEMENT"
        | "POST_TYPE_POLL"
        | "POST_TYPE_ARTICLE"
        | "POST_TYPE_SHORT_STORY";
    },
    qualityScore: string,
    params: RequestParams = {},
  ) =>
    this.request<AddQualityScoreData, Status>({
      path: `/v1/social/user/${userId}/post/${postId}/quality`,
      method: "POST",
      query: query,
      body: qualityScore,
      ...params,
    });
  /**
   * @description This endpoint enables a client to block a user profile
   *
   * @tags user profile
   * @name BlockUserProfile
   * @summary blocks a user profile
   * @request POST:/v1/social/user/{sourceUserId}/block/target-user-id/{targetUserId}
   * @response `200` `BlockUserProfileData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  blockUserProfile = (sourceUserId: string, targetUserId: string, params: RequestParams = {}) =>
    this.request<BlockUserProfileData, Status>({
      path: `/v1/social/user/${sourceUserId}/block/target-user-id/${targetUserId}`,
      method: "POST",
      ...params,
    });
  /**
   * @description This endpoint enables a client to bookmark a post
   *
   * @tags bookmark
   * @name BookmarkAPost
   * @summary Bookmarks a post
   * @request POST:/v1/social/user/{userId}/post/{postId}/bookmark
   * @response `200` `BookmarkAPostData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  bookmarkAPost = (userId: string, postId: string, params: RequestParams = {}) =>
    this.request<BookmarkAPostData, Status>({
      path: `/v1/social/user/${userId}/post/${postId}/bookmark`,
      method: "POST",
      ...params,
    });
  /**
   * @description This endpoint enables a client to bookmark a publication
   *
   * @tags bookmark
   * @name BookmarkAPublication
   * @summary Bookmarks a publication
   * @request POST:/v1/social/user/{userId}/publication/{publicationId}/bookmark
   * @response `200` `BookmarkAPublicationData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  bookmarkAPublication = (userId: string, publicationId: string, params: RequestParams = {}) =>
    this.request<BookmarkAPublicationData, Status>({
      path: `/v1/social/user/${userId}/publication/${publicationId}/bookmark`,
      method: "POST",
      ...params,
    });
  /**
   * @description This endpoint enables a client to create a comment
   *
   * @tags comment
   * @name CreateComment
   * @summary Create A Commnet
   * @request POST:/v1/social/{userId}/post/{postId}/comment
   * @response `200` `CreateCommentData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  createComment = (
    userId: string,
    postId: string,
    query: {
      /**
       * The type of account making the request to create a comment | type: string
       * @default "ACCOUNT_TYPE_UNSPECIFIED"
       */
      accountType: "ACCOUNT_TYPE_UNSPECIFIED" | "ACCOUNT_TYPE_USER" | "ACCOUNT_TYPE_COMMUNITY";
      /**
       * The ID of the community trying to create a comment | type: uint64
       * @format uint64
       */
      communityProfileId?: string;
      /**
       * The type of post being reacted to | type: string
       * @default "POST_TYPE_UNSPECIFIED"
       */
      postType:
        | "POST_TYPE_UNSPECIFIED"
        | "POST_TYPE_POST"
        | "POST_TYPE_REPOST"
        | "POST_TYPE_QUESTION"
        | "POST_TYPE_ACHIEVEMENT"
        | "POST_TYPE_ANNOUNCEMENT"
        | "POST_TYPE_POLL"
        | "POST_TYPE_ARTICLE"
        | "POST_TYPE_SHORT_STORY";
    },
    comment: Comment,
    params: RequestParams = {},
  ) =>
    this.request<CreateCommentData, Status>({
      path: `/v1/social/${userId}/post/${postId}/comment`,
      method: "POST",
      query: query,
      body: comment,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description This endpoint enables a client to create a community profile
   *
   * @tags community profile
   * @name CreateCommunityProfile
   * @summary Create a community Profile
   * @request POST:/v1/social/user/{userId}/community
   * @response `200` `CreateCommunityProfileData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  createCommunityProfile = (userId: string, body: CreateCommunityProfilePayload, params: RequestParams = {}) =>
    this.request<CreateCommunityProfileData, Status>({
      path: `/v1/social/user/${userId}/community`,
      method: "POST",
      body: body,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description This endpoint enables a client to create and associate a not to a post
   *
   * @tags note
   * @name CreateNote
   * @summary Creates and associates a note to a given post
   * @request POST:/v1/social/user/{userId}/post/{postId}/note
   * @response `200` `CreateNoteData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  createNote = (userId: string, postId: string, body: CreateNotePayload, params: RequestParams = {}) =>
    this.request<CreateNoteData, Status>({
      path: `/v1/social/user/${userId}/post/${postId}/note`,
      method: "POST",
      body: body,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description This endpoint enables a client to create a poll
   *
   * @tags poll
   * @name CreatePoll
   * @summary Create a poll
   * @request POST:/v1/social/user/{userId}/poll
   * @response `200` `CreatePollData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  createPoll = (userId: string, poll: PollPost, params: RequestParams = {}) =>
    this.request<CreatePollData, Status>({
      path: `/v1/social/user/${userId}/poll`,
      method: "POST",
      body: poll,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description This endpoint enables a client to create a post
   *
   * @tags post
   * @name CreatePost
   * @summary Create a post
   * @request POST:/v1/social/user/{userId}/post
   * @response `200` `CreatePostData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  createPost = (
    userId: string,
    query: {
      /**
       * The type of profile making the request | type: string
       * @default "ACCOUNT_TYPE_UNSPECIFIED"
       */
      accountType: "ACCOUNT_TYPE_UNSPECIFIED" | "ACCOUNT_TYPE_USER" | "ACCOUNT_TYPE_COMMUNITY";
      /**
       * The ID of the community profile attempting to create the post  | type:
       * uint64
       * @format uint64
       */
      communityProfileId?: string;
    },
    post: Post,
    params: RequestParams = {},
  ) =>
    this.request<CreatePostData, Status>({
      path: `/v1/social/user/${userId}/post`,
      method: "POST",
      query: query,
      body: post,
      ...params,
    });
  /**
   * @description This endpoint enables a client to creare a publication
   *
   * @tags publication
   * @name CreatePublication
   * @summary Creates a publication
   * @request POST:/v1/social/user/{userId}/publication
   * @response `200` `CreatePublicationData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  createPublication = (userId: string, publication: Publication, params: RequestParams = {}) =>
    this.request<CreatePublicationData, Status>({
      path: `/v1/social/user/${userId}/publication`,
      method: "POST",
      body: publication,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description This endpoint enables a client to create a user profile
   *
   * @tags user profile
   * @name CreateUserProfile
   * @summary creates a user profile
   * @request POST:/v1/social/user/{userId}
   * @response `200` `CreateUserProfileData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  createUserProfile = (userId: string, body: CreateUserProfilePayload, params: RequestParams = {}) =>
    this.request<CreateUserProfileData, Status>({
      path: `/v1/social/user/${userId}`,
      method: "POST",
      body: body,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description This endpoint enables a client to delete a post from a publication
   *
   * @tags publication
   * @name DeleteAPostFromAPublication
   * @summary Deletes a post from a publication
   * @request DELETE:/v1/social/user/{editorUserId}/publication/{publicationId}/post/{postId}
   * @response `200` `DeleteAPostFromAPublicationData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  deleteAPostFromAPublication = (
    editorUserId: string,
    publicationId: string,
    postId: string,
    query: {
      /** @default "POST_TYPE_UNSPECIFIED" */
      postType:
        | "POST_TYPE_UNSPECIFIED"
        | "POST_TYPE_POST"
        | "POST_TYPE_REPOST"
        | "POST_TYPE_QUESTION"
        | "POST_TYPE_ACHIEVEMENT"
        | "POST_TYPE_ANNOUNCEMENT"
        | "POST_TYPE_POLL"
        | "POST_TYPE_ARTICLE"
        | "POST_TYPE_SHORT_STORY";
    },
    params: RequestParams = {},
  ) =>
    this.request<DeleteAPostFromAPublicationData, Status>({
      path: `/v1/social/user/${editorUserId}/publication/${publicationId}/post/${postId}`,
      method: "DELETE",
      query: query,
      ...params,
    });
  /**
   * @description This endpoint enables a client to delete a comment
   *
   * @tags comment
   * @name DeleteComment
   * @summary Delete A Comment
   * @request DELETE:/v1/social/post/{postId}/comment/{commentId}
   * @response `200` `DeleteCommentData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  deleteComment = (
    postId: string,
    commentId: string,
    query: {
      /**
       * The type of post being reacted to | type: string
       * @default "POST_TYPE_UNSPECIFIED"
       */
      postType:
        | "POST_TYPE_UNSPECIFIED"
        | "POST_TYPE_POST"
        | "POST_TYPE_REPOST"
        | "POST_TYPE_QUESTION"
        | "POST_TYPE_ACHIEVEMENT"
        | "POST_TYPE_ANNOUNCEMENT"
        | "POST_TYPE_POLL"
        | "POST_TYPE_ARTICLE"
        | "POST_TYPE_SHORT_STORY";
    },
    params: RequestParams = {},
  ) =>
    this.request<DeleteCommentData, Status>({
      path: `/v1/social/post/${postId}/comment/${commentId}`,
      method: "DELETE",
      query: query,
      ...params,
    });
  /**
   * @description This endpoint enables a client to create a topic
   *
   * @tags topic
   * @name DeleteComment2
   * @summary Create A Topic
   * @request POST:/v1/social/user/{userId}/community/{communityProfileId}/topic
   * @originalName deleteComment
   * @duplicate
   * @response `200` `DeleteComment2Data` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  deleteComment2 = (userId: string, communityProfileId: string, topic: Topic, params: RequestParams = {}) =>
    this.request<DeleteComment2Data, Status>({
      path: `/v1/social/user/${userId}/community/${communityProfileId}/topic`,
      method: "POST",
      body: topic,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description This endpoint enables a client to delete a comment reply
   *
   * @tags comment reply
   * @name DeleteCommentReply
   * @summary Delete A Comment Reply
   * @request DELETE:/v1/social/user/{userId}/post/{postId}/comment/{commentId}/reply/{replyId}
   * @response `200` `DeleteCommentReplyData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  deleteCommentReply = (
    userId: string,
    postId: string,
    commentId: string,
    replyId: string,
    query: {
      /** @default "POST_TYPE_UNSPECIFIED" */
      postType:
        | "POST_TYPE_UNSPECIFIED"
        | "POST_TYPE_POST"
        | "POST_TYPE_REPOST"
        | "POST_TYPE_QUESTION"
        | "POST_TYPE_ACHIEVEMENT"
        | "POST_TYPE_ANNOUNCEMENT"
        | "POST_TYPE_POLL"
        | "POST_TYPE_ARTICLE"
        | "POST_TYPE_SHORT_STORY";
    },
    params: RequestParams = {},
  ) =>
    this.request<DeleteCommentReplyData, Status>({
      path: `/v1/social/user/${userId}/post/${postId}/comment/${commentId}/reply/${replyId}`,
      method: "DELETE",
      query: query,
      ...params,
    });
  /**
   * @description This endpoint enables a client to delete a community profile
   *
   * @tags community profile
   * @name DeleteCommunityProfile
   * @summary Delete Community Profile
   * @request DELETE:/v1/social/user/{userId}/community/{communityProfileId}
   * @response `200` `DeleteCommunityProfileData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  deleteCommunityProfile = (userId: string, communityProfileId: string, params: RequestParams = {}) =>
    this.request<DeleteCommunityProfileData, Status>({
      path: `/v1/social/user/${userId}/community/${communityProfileId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description This endpoint enables a client to add an editor to a publication
   *
   * @tags publication
   * @name DeleteEditorToAPublication
   * @summary Deletes an editor to a publication
   * @request DELETE:/v1/social/user/{adminUserId}/publication/{publicationId}/editor/{editorUserId}
   * @response `200` `DeleteEditorToAPublicationData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  deleteEditorToAPublication = (
    adminUserId: string,
    publicationId: string,
    editorUserId: string,
    params: RequestParams = {},
  ) =>
    this.request<DeleteEditorToAPublicationData, Status>({
      path: `/v1/social/user/${adminUserId}/publication/${publicationId}/editor/${editorUserId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description This endpoint enables a client to delete a note
   *
   * @tags note
   * @name DeleteNote
   * @summary Delete a note
   * @request DELETE:/v1/social/user/{userId}/post/{postId}/note/{noteId}
   * @response `200` `DeleteNoteData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  deleteNote = (
    userId: string,
    postId: string,
    noteId: string,
    query: {
      /** @default "POST_TYPE_UNSPECIFIED" */
      postType:
        | "POST_TYPE_UNSPECIFIED"
        | "POST_TYPE_POST"
        | "POST_TYPE_REPOST"
        | "POST_TYPE_QUESTION"
        | "POST_TYPE_ACHIEVEMENT"
        | "POST_TYPE_ANNOUNCEMENT"
        | "POST_TYPE_POLL"
        | "POST_TYPE_ARTICLE"
        | "POST_TYPE_SHORT_STORY";
    },
    params: RequestParams = {},
  ) =>
    this.request<DeleteNoteData, Status>({
      path: `/v1/social/user/${userId}/post/${postId}/note/${noteId}`,
      method: "DELETE",
      query: query,
      ...params,
    });
  /**
   * @description This endpoint enables a client to delete a poll
   *
   * @tags poll
   * @name DeletePoll
   * @summary Delete a poll
   * @request DELETE:/v1/social/user/{userId}/poll/{postId}
   * @response `200` `DeletePollData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  deletePoll = (userId: string, postId: string, params: RequestParams = {}) =>
    this.request<DeletePollData, Status>({
      path: `/v1/social/user/${userId}/poll/${postId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description This endpoint enables a client to delete a post
   *
   * @tags post
   * @name DeletePost
   * @summary Delete a post
   * @request DELETE:/v1/social/user/{userId}/post/{postId}/type/{postType}
   * @response `200` `DeletePostData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  deletePost = (
    userId: string,
    postId: string,
    postType:
      | "POST_TYPE_UNSPECIFIED"
      | "POST_TYPE_POST"
      | "POST_TYPE_REPOST"
      | "POST_TYPE_QUESTION"
      | "POST_TYPE_ACHIEVEMENT"
      | "POST_TYPE_ANNOUNCEMENT"
      | "POST_TYPE_POLL"
      | "POST_TYPE_ARTICLE"
      | "POST_TYPE_SHORT_STORY",
    params: RequestParams = {},
  ) =>
    this.request<DeletePostData, Status>({
      path: `/v1/social/user/${userId}/post/${postId}/type/${postType}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description This endpoint enables a client to delete a bookmarked post
   *
   * @tags bookmark
   * @name DeletesABookmarkedPosts
   * @summary Deletes A Bookmarked Post
   * @request DELETE:/v1/social/user/{userId}/post/{postId}/bookmark
   * @response `200` `DeletesABookmarkedPostsData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  deletesABookmarkedPosts = (
    userId: string,
    postId: string,
    query: {
      /** @default "POST_TYPE_UNSPECIFIED" */
      postType:
        | "POST_TYPE_UNSPECIFIED"
        | "POST_TYPE_POST"
        | "POST_TYPE_REPOST"
        | "POST_TYPE_QUESTION"
        | "POST_TYPE_ACHIEVEMENT"
        | "POST_TYPE_ANNOUNCEMENT"
        | "POST_TYPE_POLL"
        | "POST_TYPE_ARTICLE"
        | "POST_TYPE_SHORT_STORY";
    },
    params: RequestParams = {},
  ) =>
    this.request<DeletesABookmarkedPostsData, Status>({
      path: `/v1/social/user/${userId}/post/${postId}/bookmark`,
      method: "DELETE",
      query: query,
      ...params,
    });
  /**
   * @description This endpoint enables a client to delete a bookmarked publication
   *
   * @tags bookmark
   * @name DeletesABookmarkedPublication
   * @summary Deletes A Bookmarked Publication
   * @request DELETE:/v1/social/user/{userId}/publication/{publicationId}/bookmark
   * @response `200` `DeletesABookmarkedPublicationData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  deletesABookmarkedPublication = (userId: string, publicationId: string, params: RequestParams = {}) =>
    this.request<DeletesABookmarkedPublicationData, Status>({
      path: `/v1/social/user/${userId}/publication/${publicationId}/bookmark`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description This endpoint enables a client to delete a post from a thread
   *
   * @tags thread
   * @name DeletesAPostFromAThread
   * @summary Deletes A Post From A Thread
   * @request DELETE:/v1/social/user/{userId}/post/{parentPostId}/type/{postType}/thread/target/{participantPostId}
   * @response `200` `DeletesAPostFromAThreadData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  deletesAPostFromAThread = (
    userId: string,
    parentPostId: string,
    postType:
      | "POST_TYPE_UNSPECIFIED"
      | "POST_TYPE_POST"
      | "POST_TYPE_REPOST"
      | "POST_TYPE_QUESTION"
      | "POST_TYPE_ACHIEVEMENT"
      | "POST_TYPE_ANNOUNCEMENT"
      | "POST_TYPE_POLL"
      | "POST_TYPE_ARTICLE"
      | "POST_TYPE_SHORT_STORY",
    participantPostId: string,
    params: RequestParams = {},
  ) =>
    this.request<DeletesAPostFromAThreadData, Status>({
      path: `/v1/social/user/${userId}/post/${parentPostId}/type/${postType}/thread/target/${participantPostId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description This endpoint enables a client to delete a user profile
   *
   * @tags user profile
   * @name DeleteUserProfile
   * @summary deletes a user profile
   * @request DELETE:/v1/social/user/{userId}
   * @response `200` `DeleteUserProfileData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  deleteUserProfile = (userId: string, params: RequestParams = {}) =>
    this.request<DeleteUserProfileData, Status>({
      path: `/v1/social/user/${userId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description This endpoint enables a client to discover a set of profiles he/she does not follow
   *
   * @tags discover
   * @name DiscoverProfiles
   * @summary Discover Profiles
   * @request GET:/v1/social/user/{userId}/discover/limit/{limit}
   * @response `200` `DiscoverProfilesData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  discoverProfiles = (userId: string, limit: string, params: RequestParams = {}) =>
    this.request<DiscoverProfilesData, Status>({
      path: `/v1/social/user/${userId}/discover/limit/${limit}`,
      method: "GET",
      ...params,
    });
  /**
   * @description This endpoint enables a client to edit a comment reply
   *
   * @tags comment reply
   * @name EditCommentReply
   * @summary Edit A Comment Reply
   * @request PUT:/v1/social/user/{userId}/post/{postId}/comment/{commentId}/reply/{replyId}
   * @response `200` `EditCommentReplyData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  editCommentReply = (
    userId: string,
    postId: string,
    commentId: string,
    replyId: string,
    body: {
      postType: PostType;
      reply?: CommentReply;
    },
    params: RequestParams = {},
  ) =>
    this.request<EditCommentReplyData, Status>({
      path: `/v1/social/user/${userId}/post/${postId}/comment/${commentId}/reply/${replyId}`,
      method: "PUT",
      body: body,
      ...params,
    });
  /**
   * @description This endpoint enables a client to update a community profile
   *
   * @tags community profile
   * @name EditCommunityProfile
   * @summary Edit a community Profile
   * @request PUT:/v1/social/user/{userId}/community/{communityProfileId}
   * @response `200` `EditCommunityProfileData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  editCommunityProfile = (
    userId: string,
    communityProfileId: string,
    profile: CommunityProfile,
    params: RequestParams = {},
  ) =>
    this.request<EditCommunityProfileData, Status>({
      path: `/v1/social/user/${userId}/community/${communityProfileId}`,
      method: "PUT",
      body: profile,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description This endpoint enables a client to follow a community profile
   *
   * @tags community profile
   * @name FollowCommunityProfile
   * @summary Follows A Community Profile
   * @request POST:/v1/social/user/{sourceUserId}/follow/community/{targetCommunityProfileId}
   * @response `200` `FollowCommunityProfileData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  followCommunityProfile = (sourceUserId: string, targetCommunityProfileId: string, params: RequestParams = {}) =>
    this.request<FollowCommunityProfileData, Status>({
      path: `/v1/social/user/${sourceUserId}/follow/community/${targetCommunityProfileId}`,
      method: "POST",
      ...params,
    });
  /**
   * @description This endpoint enables a client to follow a user profile
   *
   * @tags user profile
   * @name FollowUserProfile
   * @summary follow a user profile
   * @request POST:/v1/social/user/{sourceUserId}/follow/target-user-id/{targetUserId}
   * @response `200` `FollowUserProfileData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  followUserProfile = (sourceUserId: string, targetUserId: string, params: RequestParams = {}) =>
    this.request<FollowUserProfileData, Status>({
      path: `/v1/social/user/${sourceUserId}/follow/target-user-id/${targetUserId}`,
      method: "POST",
      ...params,
    });
  /**
   * @description This endpoint enables a client to query a set of blog posts tied to a tag
   *
   * @tags post
   * @name GetBlogPostsByTag
   * @summary Get blog posts by tag
   * @request GET:/v1/social/posts/blog/tag/{tag}
   * @response `200` `GetBlogPostsByTagData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  getBlogPostsByTag = (
    tag: string,
    query: {
      /**
       * The type of post being reacted to | type: string
       * @default "POST_TYPE_UNSPECIFIED"
       */
      postType:
        | "POST_TYPE_UNSPECIFIED"
        | "POST_TYPE_POST"
        | "POST_TYPE_REPOST"
        | "POST_TYPE_QUESTION"
        | "POST_TYPE_ACHIEVEMENT"
        | "POST_TYPE_ANNOUNCEMENT"
        | "POST_TYPE_POLL"
        | "POST_TYPE_ARTICLE"
        | "POST_TYPE_SHORT_STORY";
    },
    params: RequestParams = {},
  ) =>
    this.request<GetBlogPostsByTagData, Status>({
      path: `/v1/social/posts/blog/tag/${tag}`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * @description This endpoint enables a client to get all bookmarked posts of a given user
   *
   * @tags bookmarks
   * @name GetBookmarkedPosts
   * @summary Get Bookmarked Posts
   * @request GET:/v1/social/user/bookmarks/{userId}
   * @response `200` `GetBookmarkedPostsData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  getBookmarkedPosts = (userId: string, params: RequestParams = {}) =>
    this.request<GetBookmarkedPostsData, Status>({
      path: `/v1/social/user/bookmarks/${userId}`,
      method: "GET",
      ...params,
    });
  /**
   * @description This endpoint enables a client to get comment replies
   *
   * @tags comment reply
   * @name GetCommentReplies
   * @summary Get Comment Replies
   * @request GET:/v1/social/user/{userId}/post/{postId}/comment/{commentId}/replies
   * @response `200` `GetCommentRepliesData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  getCommentReplies = (
    userId: string,
    postId: string,
    commentId: string,
    query: {
      /** @default "POST_TYPE_UNSPECIFIED" */
      postType:
        | "POST_TYPE_UNSPECIFIED"
        | "POST_TYPE_POST"
        | "POST_TYPE_REPOST"
        | "POST_TYPE_QUESTION"
        | "POST_TYPE_ACHIEVEMENT"
        | "POST_TYPE_ANNOUNCEMENT"
        | "POST_TYPE_POLL"
        | "POST_TYPE_ARTICLE"
        | "POST_TYPE_SHORT_STORY";
    },
    params: RequestParams = {},
  ) =>
    this.request<GetCommentRepliesData, Status>({
      path: `/v1/social/user/${userId}/post/${postId}/comment/${commentId}/replies`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * @description This endpoint enables a client to get all the communities a user follows
   *
   * @tags community profile
   * @name GetCommunitiesUserFollows
   * @summary Gets all the communities a user follows
   * @request GET:/v1/social/user/{userId}/follow/communities
   * @response `200` `GetCommunitiesUserFollowsData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  getCommunitiesUserFollows = (
    userId: string,
    query: {
      /**
       * the max number of communities to return | type: uint64
       * @format uint64
       */
      limit: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<GetCommunitiesUserFollowsData, Status>({
      path: `/v1/social/user/${userId}/follow/communities`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * @description This endpoint enables a client to get community blog posts
   *
   * @tags post
   * @name GetCommunityBlogPosts
   * @summary Get community blog posts
   * @request GET:/v1/social/community/{communityProfileId}/posts/blog
   * @response `200` `GetCommunityBlogPostsData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  getCommunityBlogPosts = (communityProfileId: string, params: RequestParams = {}) =>
    this.request<GetCommunityBlogPostsData, Status>({
      path: `/v1/social/community/${communityProfileId}/posts/blog`,
      method: "GET",
      ...params,
    });
  /**
   * @description This endpoint enables a client query a community feed
   *
   * @tags feed
   * @name GetCommunityFeed
   * @summary Gets A Community Feed
   * @request GET:/v1/social/community/{communityProfileId}/timeline
   * @response `200` `GetCommunityFeedData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  getCommunityFeed = (
    communityProfileId: string,
    query: {
      /**
       * The type of account making the request to obtain the feed | type: string
       * @default "ACCOUNT_TYPE_UNSPECIFIED"
       */
      accountType: "ACCOUNT_TYPE_UNSPECIFIED" | "ACCOUNT_TYPE_USER" | "ACCOUNT_TYPE_COMMUNITY";
      /**
       * The type of feed aiming to be obtained | type: string
       *
       *  - FEED_TYPE_PERSONAL: UserFeed is a profile's personal feed
       *  - FEED_TYPE_NEWS: NewsFeed is a profile's timeline
       *  - FEED_TYPE_NOTIFICATION: NotificationFeed encompasses a profile's notification feed
       * @default "FEED_TYPE_UNSPECIFIED"
       */
      feedType: "FEED_TYPE_UNSPECIFIED" | "FEED_TYPE_PERSONAL" | "FEED_TYPE_NEWS" | "FEED_TYPE_NOTIFICATION";
      nextPageToken?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<GetCommunityFeedData, Status>({
      path: `/v1/social/community/${communityProfileId}/timeline`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * @description This endpoint enables a client to get a community profile
   *
   * @tags community profile
   * @name GetCommunityProfile
   * @summary Get a community Profile
   * @request GET:/v1/social/community/{communityId}/requestor/{requestorProfileId}/type/{requestorProfileType}
   * @response `200` `GetCommunityProfileData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  getCommunityProfile = (
    communityId: string,
    requestorProfileId: string,
    requestorProfileType: "ACCOUNT_TYPE_UNSPECIFIED" | "ACCOUNT_TYPE_USER" | "ACCOUNT_TYPE_COMMUNITY",
    params: RequestParams = {},
  ) =>
    this.request<GetCommunityProfileData, Status>({
      path: `/v1/social/community/${communityId}/requestor/${requestorProfileId}/type/${requestorProfileType}`,
      method: "GET",
      ...params,
    });
  /**
   * @description This endpoint enables a client to get community profiles
   *
   * @tags community profile
   * @name GetCommunityProfiles
   * @summary Get Community Profiles
   * @request GET:/v1/social/communities/page-size/{pageSize}/page-number/{pageNumber}
   * @response `200` `GetCommunityProfilesData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  getCommunityProfiles = (pageSize: number, pageNumber: number, params: RequestParams = {}) =>
    this.request<GetCommunityProfilesData, Status>({
      path: `/v1/social/communities/page-size/${pageSize}/page-number/${pageNumber}`,
      method: "GET",
      ...params,
    });
  /**
   * @description This endpoint enables a client to query a poll by id
   *
   * @tags poll
   * @name GetPoll
   * @summary Get a poll
   * @request GET:/v1/social/user/{userId}/poll/{postId}
   * @response `200` `GetPollData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  getPoll = (userId: string, postId: string, params: RequestParams = {}) =>
    this.request<GetPollData, Status>({
      path: `/v1/social/user/${userId}/poll/${postId}`,
      method: "GET",
      ...params,
    });
  /**
   * @description This endpoint enables a client to query all polls tied to a given user id
   *
   * @tags poll
   * @name GetPolls
   * @summary Get all the polls of a given user
   * @request GET:/v1/social/user/{userId}/polls
   * @response `200` `GetPollsData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  getPolls = (userId: string, params: RequestParams = {}) =>
    this.request<GetPollsData, Status>({
      path: `/v1/social/user/${userId}/polls`,
      method: "GET",
      ...params,
    });
  /**
   * @description This endpoint enables a client to get all posts tied to a topic
   *
   * @tags post
   * @name GetPost
   * @summary Get all posts associated with a topic
   * @request GET:/v1/social/community/{communityProfileId}/topic/{topicName}/posts
   * @response `200` `GetPostData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  getPost = (communityProfileId: string, topicName: string, params: RequestParams = {}) =>
    this.request<GetPostData, Status>({
      path: `/v1/social/community/${communityProfileId}/topic/${topicName}/posts`,
      method: "GET",
      ...params,
    });
  /**
   * @description This endpoint enables a client to edit a post by id
   *
   * @tags post
   * @name GetPost2
   * @summary Edits a post by id
   * @request PUT:/v1/social/user/post/{postId}/type/{postType}
   * @originalName getPost
   * @duplicate
   * @response `200` `GetPost2Data` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  getPost2 = (
    postId: string,
    postType:
      | "POST_TYPE_UNSPECIFIED"
      | "POST_TYPE_POST"
      | "POST_TYPE_REPOST"
      | "POST_TYPE_QUESTION"
      | "POST_TYPE_ACHIEVEMENT"
      | "POST_TYPE_ANNOUNCEMENT"
      | "POST_TYPE_POLL"
      | "POST_TYPE_ARTICLE"
      | "POST_TYPE_SHORT_STORY",
    post: Post,
    params: RequestParams = {},
  ) =>
    this.request<GetPost2Data, Status>({
      path: `/v1/social/user/post/${postId}/type/${postType}`,
      method: "PUT",
      body: post,
      ...params,
    });
  /**
   * @description This endpoint enables a client to get a post
   *
   * @tags post
   * @name GetPost3
   * @summary Get a post
   * @request GET:/v1/social/user/{userId}/post/{postId}/type/{postType}
   * @originalName getPost
   * @duplicate
   * @response `200` `GetPost3Data` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  getPost3 = (
    userId: string,
    postId: string,
    postType:
      | "POST_TYPE_UNSPECIFIED"
      | "POST_TYPE_POST"
      | "POST_TYPE_REPOST"
      | "POST_TYPE_QUESTION"
      | "POST_TYPE_ACHIEVEMENT"
      | "POST_TYPE_ANNOUNCEMENT"
      | "POST_TYPE_POLL"
      | "POST_TYPE_ARTICLE"
      | "POST_TYPE_SHORT_STORY",
    params: RequestParams = {},
  ) =>
    this.request<GetPost3Data, Status>({
      path: `/v1/social/user/${userId}/post/${postId}/type/${postType}`,
      method: "GET",
      ...params,
    });
  /**
   * @description This endpoint enables a client to delete a publication
   *
   * @tags publication
   * @name GetPublication
   * @summary Deletes a publication
   * @request DELETE:/v1/social/user/{adminUserId}/publication/{publicationId}
   * @response `200` `GetPublicationData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  getPublication = (adminUserId: string, publicationId: string, params: RequestParams = {}) =>
    this.request<GetPublicationData, Status>({
      path: `/v1/social/user/${adminUserId}/publication/${publicationId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description This endpoint enables a client to get a publication
   *
   * @tags publication
   * @name GetPublication2
   * @summary Gets a publication
   * @request GET:/v1/social/user/{userId}/publication/{publicationId}
   * @originalName getPublication
   * @duplicate
   * @response `200` `GetPublication2Data` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  getPublication2 = (userId: string, publicationId: string, params: RequestParams = {}) =>
    this.request<GetPublication2Data, Status>({
      path: `/v1/social/user/${userId}/publication/${publicationId}`,
      method: "GET",
      ...params,
    });
  /**
   * @description This endpoint enables a client to query a post's thread
   *
   * @tags thread
   * @name GetsAPostsThread
   * @summary Gets A Post's Thread
   * @request GET:/v1/social/user/{userId}/post/{postId}/thread
   * @response `200` `GetsAPostsThreadData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  getsAPostsThread = (
    userId: string,
    postId: string,
    query: {
      /** @default "POST_TYPE_UNSPECIFIED" */
      postType:
        | "POST_TYPE_UNSPECIFIED"
        | "POST_TYPE_POST"
        | "POST_TYPE_REPOST"
        | "POST_TYPE_QUESTION"
        | "POST_TYPE_ACHIEVEMENT"
        | "POST_TYPE_ANNOUNCEMENT"
        | "POST_TYPE_POLL"
        | "POST_TYPE_ARTICLE"
        | "POST_TYPE_SHORT_STORY";
    },
    params: RequestParams = {},
  ) =>
    this.request<GetsAPostsThreadData, Status>({
      path: `/v1/social/user/${userId}/post/${postId}/thread`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * @description This endpoint enables a client to get all the pending follow requests
   *
   * @tags follow
   * @name GetTopics
   * @summary Get Pending Follow Requests
   * @request GET:/v1/social/user/{userId}/follow/pending-requests
   * @response `200` `GetTopicsData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  getTopics = (userId: string, params: RequestParams = {}) =>
    this.request<GetTopicsData, Status>({
      path: `/v1/social/user/${userId}/follow/pending-requests`,
      method: "GET",
      ...params,
    });
  /**
   * @description This endpoint enables a client to get all the followers following a given user
   *
   * @tags follow
   * @name GetTopics2
   * @summary Get Users Following you
   * @request GET:/v1/social/user/{userId}/profile/{profileId}/followers
   * @originalName getTopics
   * @duplicate
   * @response `200` `GetTopics2Data` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  getTopics2 = (
    userId: string,
    profileId: string,
    query: {
      /** @format uint64 */
      limit: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<GetTopics2Data, Status>({
      path: `/v1/social/user/${userId}/profile/${profileId}/followers`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * @description This endpoint enables a client to get topics of communities a user follows
   *
   * @tags topic
   * @name GetTopics3
   * @summary Get Topics Of Communities User Follows
   * @request GET:/v1/social/user/{userId}/topics
   * @originalName getTopics
   * @duplicate
   * @response `200` `GetTopics3Data` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  getTopics3 = (
    userId: string,
    query: {
      /** @format uint64 */
      limit: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<GetTopics3Data, Status>({
      path: `/v1/social/user/${userId}/topics`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * @description This endpoint enables a client query a user feed
   *
   * @tags feed
   * @name GetUserFeed
   * @summary Gets A Userfeed
   * @request GET:/v1/social/user/{userId}/timeline
   * @response `200` `GetUserFeedData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  getUserFeed = (
    userId: string,
    query: {
      /**
       * The type of account making the request to obtain the feed | type: string
       * @default "ACCOUNT_TYPE_UNSPECIFIED"
       */
      accountType: "ACCOUNT_TYPE_UNSPECIFIED" | "ACCOUNT_TYPE_USER" | "ACCOUNT_TYPE_COMMUNITY";
      /**
       * The type of feed aiming to be obtained | type: string
       *
       *  - FEED_TYPE_PERSONAL: UserFeed is a profile's personal feed
       *  - FEED_TYPE_NEWS: NewsFeed is a profile's timeline
       *  - FEED_TYPE_NOTIFICATION: NotificationFeed encompasses a profile's notification feed
       * @default "FEED_TYPE_UNSPECIFIED"
       */
      feedType: "FEED_TYPE_UNSPECIFIED" | "FEED_TYPE_PERSONAL" | "FEED_TYPE_NEWS" | "FEED_TYPE_NOTIFICATION";
      nextPageToken?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<GetUserFeedData, Status>({
      path: `/v1/social/user/${userId}/timeline`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * @description This endpoint performs a query against the social service to obtain a user profile
   *
   * @tags user profile
   * @name GetUserProfile
   * @summary gets a user profile
   * @request GET:/v1/social/user/{userId}
   * @response `200` `GetUserProfileData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  getUserProfile = (
    userId: string,
    query?: {
      /**
       * The RequestorProfileID is an optional parameter used to check if the
       * profileID (requestor) making a request for the record actually follows the
       * record
       * @format uint64
       */
      requestorProfileId?: string;
      /**
       * The RequestorProfileType is an optional parameter which tells us what type
       * of profile is the requestor
       * @default "ACCOUNT_TYPE_UNSPECIFIED"
       */
      requestorProfileType?: "ACCOUNT_TYPE_UNSPECIFIED" | "ACCOUNT_TYPE_USER" | "ACCOUNT_TYPE_COMMUNITY";
    },
    params: RequestParams = {},
  ) =>
    this.request<GetUserProfileData, Status>({
      path: `/v1/social/user/${userId}`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * @description This endpoint enables a client to get a number of user profiles in a paginated manner
   *
   * @tags user profile
   * @name GetUserProfiles
   * @summary Gets a set of user profiles
   * @request GET:/v1/social/users/page-size/{pageSize}/page-number/{pageNumber}
   * @response `200` `GetUserProfilesData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  getUserProfiles = (pageSize: number, pageNumber: number, params: RequestParams = {}) =>
    this.request<GetUserProfilesData, Status>({
      path: `/v1/social/users/page-size/${pageSize}/page-number/${pageNumber}`,
      method: "GET",
      ...params,
    });
  /**
   * @description This endpoint enables a client to get all the accounts a given user follows
   *
   * @tags follow
   * @name GetUsersAndCommunitiesFollowing
   * @summary Get Communities and users you are following
   * @request GET:/v1/social/user/{userId}/profile/{profileId}/account-type/{accountType}/following
   * @response `200` `GetUsersAndCommunitiesFollowingData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  getUsersAndCommunitiesFollowing = (
    userId: string,
    profileId: string,
    accountType: "ACCOUNT_TYPE_UNSPECIFIED" | "ACCOUNT_TYPE_USER" | "ACCOUNT_TYPE_COMMUNITY",
    query: {
      /** @format uint64 */
      limit: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<GetUsersAndCommunitiesFollowingData, Status>({
      path: `/v1/social/user/${userId}/profile/${profileId}/account-type/${accountType}/following`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * @description This endpoint enables a client to react to a comment
   *
   * @tags reaction
   * @name ReactToComment
   * @summary Reacts to a comment
   * @request POST:/v1/social/user/{userId}/post/{postId}/comment/{commentId}/account-type/{accountType}/reaction/{reaction}
   * @response `200` `ReactToCommentData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  reactToComment = (
    userId: string,
    postId: string,
    commentId: string,
    accountType: "ACCOUNT_TYPE_UNSPECIFIED" | "ACCOUNT_TYPE_USER" | "ACCOUNT_TYPE_COMMUNITY",
    reaction:
      | "REACTION_UNSPECIFIED"
      | "REACTION_LIKE"
      | "REACTION_LOVE"
      | "REACTION_HAHA"
      | "REACTION_WOW"
      | "REACTION_SAD"
      | "REACTION_ANGRY"
      | "REACTION_DISLIKE",
    query: {
      /** @default "POST_TYPE_UNSPECIFIED" */
      postType:
        | "POST_TYPE_UNSPECIFIED"
        | "POST_TYPE_POST"
        | "POST_TYPE_REPOST"
        | "POST_TYPE_QUESTION"
        | "POST_TYPE_ACHIEVEMENT"
        | "POST_TYPE_ANNOUNCEMENT"
        | "POST_TYPE_POLL"
        | "POST_TYPE_ARTICLE"
        | "POST_TYPE_SHORT_STORY";
    },
    params: RequestParams = {},
  ) =>
    this.request<ReactToCommentData, Status>({
      path: `/v1/social/user/${userId}/post/${postId}/comment/${commentId}/account-type/${accountType}/reaction/${reaction}`,
      method: "POST",
      query: query,
      ...params,
    });
  /**
   * @description This endpoint enables a client to react to a comment reply
   *
   * @tags reaction
   * @name ReactToComment2
   * @summary Reacts to a comment reply
   * @request POST:/v1/social/user/{userId}/post/{postId}/comment/{commentId}/reply/{replyId}/account-type/{accountType}/reaction/{reaction}
   * @originalName reactToComment
   * @duplicate
   * @response `200` `ReactToComment2Data` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  reactToComment2 = (
    userId: string,
    postId: string,
    commentId: string,
    replyId: string,
    accountType: "ACCOUNT_TYPE_UNSPECIFIED" | "ACCOUNT_TYPE_USER" | "ACCOUNT_TYPE_COMMUNITY",
    reaction:
      | "REACTION_UNSPECIFIED"
      | "REACTION_LIKE"
      | "REACTION_LOVE"
      | "REACTION_HAHA"
      | "REACTION_WOW"
      | "REACTION_SAD"
      | "REACTION_ANGRY"
      | "REACTION_DISLIKE",
    query: {
      /** @default "POST_TYPE_UNSPECIFIED" */
      postType:
        | "POST_TYPE_UNSPECIFIED"
        | "POST_TYPE_POST"
        | "POST_TYPE_REPOST"
        | "POST_TYPE_QUESTION"
        | "POST_TYPE_ACHIEVEMENT"
        | "POST_TYPE_ANNOUNCEMENT"
        | "POST_TYPE_POLL"
        | "POST_TYPE_ARTICLE"
        | "POST_TYPE_SHORT_STORY";
    },
    params: RequestParams = {},
  ) =>
    this.request<ReactToComment2Data, Status>({
      path: `/v1/social/user/${userId}/post/${postId}/comment/${commentId}/reply/${replyId}/account-type/${accountType}/reaction/${reaction}`,
      method: "POST",
      query: query,
      ...params,
    });
  /**
   * @description This endpoint enables a client to react to a post
   *
   * @tags reaction
   * @name ReactToPost
   * @summary Reacts to a post
   * @request POST:/v1/social/user/{userId}/post/{postId}/account-type/{accountType}/reaction/{reaction}
   * @response `200` `ReactToPostData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  reactToPost = (
    userId: string,
    postId: string,
    accountType: "ACCOUNT_TYPE_UNSPECIFIED" | "ACCOUNT_TYPE_USER" | "ACCOUNT_TYPE_COMMUNITY",
    reaction:
      | "REACTION_UNSPECIFIED"
      | "REACTION_LIKE"
      | "REACTION_LOVE"
      | "REACTION_HAHA"
      | "REACTION_WOW"
      | "REACTION_SAD"
      | "REACTION_ANGRY"
      | "REACTION_DISLIKE",
    query: {
      /** @default "POST_TYPE_UNSPECIFIED" */
      postType:
        | "POST_TYPE_UNSPECIFIED"
        | "POST_TYPE_POST"
        | "POST_TYPE_REPOST"
        | "POST_TYPE_QUESTION"
        | "POST_TYPE_ACHIEVEMENT"
        | "POST_TYPE_ANNOUNCEMENT"
        | "POST_TYPE_POLL"
        | "POST_TYPE_ARTICLE"
        | "POST_TYPE_SHORT_STORY";
    },
    params: RequestParams = {},
  ) =>
    this.request<ReactToPostData, Status>({
      path: `/v1/social/user/${userId}/post/${postId}/account-type/${accountType}/reaction/${reaction}`,
      method: "POST",
      query: query,
      ...params,
    });
  /**
   * @description This endpoint enables a client to reply to a comment
   *
   * @tags comment reply
   * @name RepliesToAComment
   * @summary Reply To A Comment
   * @request POST:/v1/social/user/{userId}/post/{postId}/comment/{commentId}/reply
   * @response `200` `RepliesToACommentData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  repliesToAComment = (
    userId: string,
    postId: string,
    commentId: string,
    body: {
      postType: PostType;
      reply?: CommentReply;
    },
    params: RequestParams = {},
  ) =>
    this.request<RepliesToACommentData, Status>({
      path: `/v1/social/user/${userId}/post/${postId}/comment/${commentId}/reply`,
      method: "POST",
      body: body,
      ...params,
    });
  /**
   * @description This endpoint enables a client to report a comment
   *
   * @tags comment
   * @name ReportComment
   * @summary Report A Comment
   * @request POST:/v1/social/user/{userId}/post/{postId}/comment/{commentId}/report
   * @response `200` `ReportCommentData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  reportComment = (
    userId: string,
    postId: string,
    commentId: string,
    body: ReportCommentPayload,
    params: RequestParams = {},
  ) =>
    this.request<ReportCommentData, Status>({
      path: `/v1/social/user/${userId}/post/${postId}/comment/${commentId}/report`,
      method: "POST",
      body: body,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description This endpoint enables a client to report a comment reply
   *
   * @tags comment reply
   * @name ReportCommentReply
   * @summary Report A Comment Reply
   * @request POST:/v1/social/user/{userId}/post/{postId}/comment/{commentId}/reply/{replyId}/report
   * @response `200` `ReportCommentReplyData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  reportCommentReply = (
    userId: string,
    postId: string,
    commentId: string,
    replyId: string,
    body: ReportCommentReplyPayload,
    params: RequestParams = {},
  ) =>
    this.request<ReportCommentReplyData, Status>({
      path: `/v1/social/user/${userId}/post/${postId}/comment/${commentId}/reply/${replyId}/report`,
      method: "POST",
      body: body,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description This endpoint enables a client to report a post
   *
   * @tags post
   * @name ReportPost
   * @summary Report a post
   * @request POST:/v1/social/user/{userId}/post/{postId}/type/{postType}/report
   * @response `200` `ReportPostData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  reportPost = (
    userId: string,
    postId: string,
    postType:
      | "POST_TYPE_UNSPECIFIED"
      | "POST_TYPE_POST"
      | "POST_TYPE_REPOST"
      | "POST_TYPE_QUESTION"
      | "POST_TYPE_ACHIEVEMENT"
      | "POST_TYPE_ANNOUNCEMENT"
      | "POST_TYPE_POLL"
      | "POST_TYPE_ARTICLE"
      | "POST_TYPE_SHORT_STORY",
    params: RequestParams = {},
  ) =>
    this.request<ReportPostData, Status>({
      path: `/v1/social/user/${userId}/post/${postId}/type/${postType}/report`,
      method: "POST",
      ...params,
    });
  /**
   * @description This endpoint enables a client to response to a poll
   *
   * @tags poll
   * @name RespondToPoll
   * @summary Adds a user response to a given poll by a user
   * @request POST:/v1/social/user/{userId}/poll/{pollId}
   * @response `200` `RespondToPollData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  respondToPoll = (userId: string, pollId: string, body: RespondToPollPayload, params: RequestParams = {}) =>
    this.request<RespondToPollData, Status>({
      path: `/v1/social/user/${userId}/poll/${pollId}`,
      method: "POST",
      body: body,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description This endpoint enables a client to share a post
   *
   * @tags feed
   * @name SharePost
   * @summary Share a post
   * @request POST:/v1/social/user/{userId}/post/{parentPostId}/type/{parentPostType}/share
   * @response `200` `SharePostData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  sharePost = (
    userId: string,
    parentPostId: string,
    parentPostType:
      | "POST_TYPE_UNSPECIFIED"
      | "POST_TYPE_POST"
      | "POST_TYPE_REPOST"
      | "POST_TYPE_QUESTION"
      | "POST_TYPE_ACHIEVEMENT"
      | "POST_TYPE_ANNOUNCEMENT"
      | "POST_TYPE_POLL"
      | "POST_TYPE_ARTICLE"
      | "POST_TYPE_SHORT_STORY",
    content: SharePostPayload,
    params: RequestParams = {},
  ) =>
    this.request<SharePostData, Status>({
      path: `/v1/social/user/${userId}/post/${parentPostId}/type/${parentPostType}/share`,
      method: "POST",
      body: content,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description This endpoint enables a client to update a note
   *
   * @tags note
   * @name UpdateNote
   * @summary Update a note
   * @request PUT:/v1/social/user/{userId}/post/{postId}/note/{noteId}
   * @response `200` `UpdateNoteData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  updateNote = (
    userId: string,
    postId: string,
    noteId: string,
    query: {
      /** @default "POST_TYPE_UNSPECIFIED" */
      postType:
        | "POST_TYPE_UNSPECIFIED"
        | "POST_TYPE_POST"
        | "POST_TYPE_REPOST"
        | "POST_TYPE_QUESTION"
        | "POST_TYPE_ACHIEVEMENT"
        | "POST_TYPE_ANNOUNCEMENT"
        | "POST_TYPE_POLL"
        | "POST_TYPE_ARTICLE"
        | "POST_TYPE_SHORT_STORY";
    },
    note: Note,
    params: RequestParams = {},
  ) =>
    this.request<UpdateNoteData, Status>({
      path: `/v1/social/user/${userId}/post/${postId}/note/${noteId}`,
      method: "PUT",
      query: query,
      body: note,
      type: ContentType.Json,
      ...params,
    });
}
