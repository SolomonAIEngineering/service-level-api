import { Address, UserAccount as UserAccountContract } from 'src/data-contracts/user-service/data-contracts';
import { Tags as TagContract } from 'src/data-contracts/user-service/data-contracts';
/**
 * Represents a user's account in simfiny's backend.
 *
 * The `UserAccount` class is central to operations within simfiny's backend. An instance of this class captures a user's details and
 * metadata such as their address, contact information, profile data, account verification status, and more.
 *
 * @remarks
 * The gateway performs some data transformations; specifically:
 *   - `id` becomes `userAccountID`
 *   - `authnId` becomes `userAuthnAccountID`
 *
 * @example Creating an instance of `UserAccount`:
 * ```ts
 * const userData = {
 *   email: "user@example.com",
 *   username: "exampleUser",
 *   // ... other data fields ...
 * };
 * const account = new UserAccount(userData);
 * console.log(account.getUserName()); // Outputs: "exampleUser"
 * ```
 *
 * @property address - A structured address associated with the user.
 * @property bio - A short biography or description for the user.
 * @property email - The user's email address.
 * @property firstname - The user's first name.
 * @property lastname - The user's last name.
 * @property username - The user's unique username.
 * @property headline - A headline or title for the user's profile.
 * @property phoneNumber - The user's contact phone number.
 * @property userAccountID - A transformed ID for the user, manipulated by the gateway.
 * @property userAuthnAccountID - A transformed authentication ID for the user, manipulated by the gateway.
 * @property id - The user's unique identifier.
 * @property tags - An array of tags associated with the user.
 * @property created_at - Timestamp for when the user was created.
 * @property isEmailVerified - Indicates if the user's email is verified.
 * @property isPrivate - Indicates if the user's account content is private.
 * @property verifiedAt - Timestamp for when the user was verified.
 * @property isActive - Indicates if the user's account is active.
 * @property authnAccountId - The user's authentication account ID.
 * @property createdAt - The user's account creation timestamp.
 *
 * @author Yoan Yomba
 */
interface UserAccountContractWithAccountID {
    userAccountID?: string;
}
declare class UserAccount implements UserAccountContract, UserAccountContractWithAccountID {
    address?: Address;
    bio?: string;
    email: string;
    firstname?: string;
    lastname?: string;
    username: string;
    headline?: string;
    phoneNumber?: string;
    userAccountID?: string;
    userAuthnAccountID?: string;
    id: string;
    tags: TagContract[];
    created_at?: string;
    isEmailVerified?: boolean;
    isPrivate?: boolean;
    verifiedAt?: string;
    isActive?: boolean;
    authnAccountId?: string;
    createdAt?: string;
    /**
     * A constructor function that takes in a data object and assigns the data to the UserAccount class.
     * @param [data] - The data that you want to assign to the object.
     */
    constructor(data?: Partial<UserAccount>);
    /**
     * Returns the username of the account
     *
     * @return {*}  {string}
     * @memberof UserAccount
     */
    getUserName(): string;
    /**
     * Returns the tags associated with a given account
     *
     * @return {*}  {Tag[]}
     * @memberof UserAccount
     */
    getTags(): TagContract[];
    /**
     * Returns the number of tags associated with a given account
     *
     * @return {*}  {number}
     * @memberof UserAccount
     */
    getTagCount(): number;
    /**
     * Deciphers wether the account has a verified email or not
     *
     * @return {*}  {boolean}
     * @memberof UserAccount
     */
    isAccountVerified(): boolean | undefined;
    /**
     * Deciphers wether the account's content should be shown or not
     *
     * @return {*}  {boolean}
     * @memberof UserAccount
     */
    shouldShowContent(): boolean | undefined;
    /**
     * Obtains the bio of the account
     *
     * @return {*}  {string}
     * @memberof UserAccount
     */
    getBio(): string | undefined;
    /**
     * Obtains the headline of the account
     *
     * @return {*}  {string}
     * @memberof UserAccount
     */
    getHeadline(): string | undefined;
    /**
     * @description Returns the ID of the account
     * @author Yoan Yomba
     * @returns {*}  {string}
     * @memberof UserAccount
     */
    getID(): string | undefined;
}
export { UserAccount };
