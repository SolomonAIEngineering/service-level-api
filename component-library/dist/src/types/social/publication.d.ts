import { Publication, PublicationType } from 'src/data-contracts/social-service/data-contracts';
import { SocialUserProfileClass } from './social-user-profile';
/**
 * A Publication is a collections of stories based around a common theme. Anyone can create them
 * As the creator of a publication, you're an editor by default, which means you have the ability to
 * a) add writers to your publication,
 * b) edit and publish the stories that are submitted by your writers, and
 * c) review the metrics for all of the stories that are part of your publication.
 * As the publication's creator, you'll also have the ability
 * to appoint new editors (so they can do all of that stuff I just mentioned)
 *
 * Use Case
 * - An online magazine, a publication with a fixed publication staff that posts stories around a specific topic
 * - A community publication, a publication that accepts stories published around Medium
 * - A company blog, a publication that is created specifically to share company news
 * - A collection of individual stories by a single author that are parts of a larger whole
 *
 * Publications can be thought of as a collection of posts or articles, curated and managed by one or more administrators and editors.
 *
 * @remarks
 * Each publication has a unique ID, associated tags, subjects, a description, creation date, and a publication type.
 * The publication can have multiple editors and is owned by an admin.
 *
 * @example
 * Creating an instance of `Publication`:
 * ```ts
 * const publicationData = {
 *   id: 1,
 *   postIds: ["post123", "post456"],
 *   admin: new UserProfile({...}),
 *   tags: ["tech", "AI"],
 *   editors: [new UserProfile({...}), new UserProfile({...})],
 *   subjects: ["Deep Learning", "Neural Networks"],
 *   description: "A tech publication focusing on AI advancements.",
 *   createdAt: "2023-01-01",
 *   type: PublicationType.JOURNAL,
 *   publicationName: "Tech Forward"
 * };
 * const techPublication = new Publication(publicationData);
 * console.log(techPublication.publicationName); // Outputs: "Tech Forward"
 * ```
 *
 * @property id - The unique identifier for the publication.
 * @property postIds - An array of post IDs that belong to this publication.
 * @property admin - The administrator `UserProfile` of this publication.
 * @property adminSimfinyPlatformUserId - The unique identifier of the admin in the Simfiny platform.
 * @property tags - An array of tags associated with this publication.
 * @property editors - An array of editor `UserProfile`s who curate the publication's content.
 * @property subjects - Topics or subjects covered by the publication.
 * @property description - A brief description of the publication.
 * @property createdAt - The date when the publication was created.
 * @property type - The type/category of the publication.
 * @property publicationName - The name/title of the publication.
 *
 * @implements {Publication}
 * @author [Your Name or the Original Author's Name if you know it]
 */
export declare class PublicationClass implements Publication {
    id: string;
    postIds: string[];
    admin: SocialUserProfileClass | undefined;
    adminSimfinyPlatformUserId: string;
    tags: string[];
    editors: SocialUserProfileClass[];
    subjects: string[];
    description: string;
    createdAt: string | undefined;
    type: PublicationType;
    publicationName: string;
    constructor(data: Partial<Publication>);
}
