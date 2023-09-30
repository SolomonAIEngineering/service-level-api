/**
 * Enum representing the status of a link.
 * @enum {number}
 */
enum LinkStatus {
  /**
   * The link status is unspecified or unknown.
   */
  LINK_STATUS_UNSPECIFIED = 0,

  /**
   * The link setup is in progress.
   */
  LINK_STATUS_SETUP = 1,

  /**
   * The link is pending and awaiting completion.
   */
  LINK_STATUS_PENDING = 2,

  /**
   * An error occurred during the link process.
   */
  LINK_STATUS_ERROR = 3,

  /**
   * The link was successfully established.
   */
  LINK_STATUS_SUCCESS = 4,

  /**
   * The link is pending expiration.
   */
  LINK_STATUS_PENDING_EXPIRATION = 5,

  /**
   * The link has been revoked.
   */
  LINK_STATUS_REVOKED = 6,

  /**
   * Login is required for the associated item.
   */
  LINK_STATUS_ITEM_LOGIN_REQUIRED = 7,

  /**
   * The status value is unrecognized or invalid.
   */
  UNRECOGNIZED = -1,
}

/**
 * Export the LinkStatus enum.
 */
export { LinkStatus };
