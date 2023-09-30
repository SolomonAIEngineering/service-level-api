/*
 * PublicationType represents the type of publication referenced
 *
 * @export
 * @enum {number}
 * */
export enum PublicationType {
  PUBLICATION_TYPE_UNSPECIFIED = 0,
  /** PUBLICATION_TYPE_MAGAZINE - a publication with a fixed publication staff that posts stories around a specific topic */
  PUBLICATION_TYPE_MAGAZINE = 1,
  /** PUBLICATION_TYPE_PLATFORM - a publication that accepts stories published around simfiny */
  PUBLICATION_TYPE_PLATFORM = 2,
  /** PUBLICATION_TYPE_BLOG - A community blog, a publication that is created specifically to share subset (community) news */
  PUBLICATION_TYPE_BLOG = 3,
  /** PUBLICATION_TYPE_SUBJECTS - A collection of individual stories by a set of authors that are part of a whole */
  PUBLICATION_TYPE_SUBJECTS = 4,
  UNRECOGNIZED = -1,
}
