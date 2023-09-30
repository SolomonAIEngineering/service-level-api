/**
 * Enum representing the type of a link.
 * @enum {number}
 */
enum LinkType {
  /**
   * The link type is unspecified or unknown.
   */
  LINK_TYPE_UNSPECIFIED = 0,

  /**
   * The link type is Plaid.
   */
  LINK_TYPE_PLAID = 1,

  /**
   * The link type is manual.
   */
  LINK_TYPE_MANUAL = 2,

  /**
   * The type value is unrecognized or invalid.
   */
  UNRECOGNIZED = -1,
}

/**
 * Export the LinkType enum.
 */
export { LinkType };
