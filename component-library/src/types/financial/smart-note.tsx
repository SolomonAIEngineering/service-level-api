import { SmartNote } from 'src/data-contracts/financial-service/data-contracts';
import { getRandomString } from 'src/lib-utils/utils';

class SmartNoteClass implements SmartNote {
  /**
   * The content of the note
   * Validations:
   * - must be at least 3 characters long
   * @example "Note content here..."
   */
  content?: string;
  /**
   * Timestamp indicating when the note was created
   * @format date-time
   */
  createdAt?: string;
  /**
   * Unique identifier for the note
   * @format uint64
   */
  id?: string;
  /**
   * Timestamp indicating when the note was last updated
   * @format date-time
   */
  updatedAt?: string;
  /**
   * The user id who created the note. This can be useful if in the future you allow multiple users to add notes to the same goal.
   * @format uint64
   */
  userId?: string;

  /**
   * Creates an instance of SmartNote.
   *
   * @param data - Object with details for SmartNote.
   */
  constructor(data: Partial<SmartNote>) {
    Object.assign(this, data);
  }

  /**
   * Creates an instance of SmartNote.
   *
   * @param data - Object with details for SmartNote.
   */
  static randomInstance(): SmartNote {
    return new SmartNoteClass({
      content: getRandomString(10),
      createdAt: getRandomString(10),
      id: getRandomString(10),
      updatedAt: getRandomString(10),
      userId: getRandomString(10),
    });
  }
}

export { SmartNoteClass };
