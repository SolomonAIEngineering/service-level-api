import { Tags } from 'src/data-contracts/user-service/data-contracts';
import { IRequest } from './IRequest';
export declare class UserRegistrationAccountDetails {
    /** account id */
    id: number;
    /**
     * account email
     * Validations:
     * - must be an email and required
     */
    email: string;
    /**
     * simple description specific to account should be less than 200 characters
     * Validations:
     * - can be empty
     */
    bio: string;
    /**
     * profile headline
     * Validations:
     * - can be empty
     */
    headline: string;
    /**
     * account phone number
     * Validations:
     * - mcan be empty
     */
    phoneNumber: string;
    /**
     * sample tags easily associable to account
     * account first name
     * Validations:
     * - must be at provide between 1 and 10 tags
     */
    tags: Tags[];
    /** authentication service account id */
    authnAccountId: number;
    /** infers wether the account is active */
    isActive: boolean;
    /**
     * account first name
     * Validations:
     * - can be empty
     */
    firstname: string;
    /**
     * account last name
     * Validations:
     * - can be empty
     */
    lastname: string;
    /**
     * account user name
     * Validations:
     * - must be at least 10 character
     */
    username: string;
    /** account is private */
    isPrivate: boolean;
    /**
     * isEmailVerified is a field denoting wether or not the user account has
     * indeed verified their email address
     */
    isEmailVerified: boolean;
    createdAt: Date | undefined;
    verifiedAt: Date | undefined;
    constructor(data?: Partial<UserRegistrationAccountDetails>);
    toJSON(): {
        id: number;
        email: string;
        bio: string;
        headline: string;
        phoneNumber: string;
        tags: Tags[];
        authnAccountId: number;
        isActive: boolean;
        firstname: string;
        lastname: string;
        username: string;
        isPrivate: boolean;
        isEmailVerified: boolean;
        createdAt: string | undefined;
        verifiedAt: string | undefined;
    };
}
/**
 * @description The request to create a user account
 * @author Yoan Yomba
 * @export
 * @class CreateAccountRequest
 */
export declare class CreateAccountRequest implements IRequest {
    account: UserRegistrationAccountDetails;
    communityIdsToFollow: number[];
    profileImage: string;
    password: string;
    constructor(data?: Partial<CreateAccountRequest>);
    toJSON(): {
        account: {
            id: number;
            email: string;
            bio: string;
            headline: string;
            phoneNumber: string;
            tags: Tags[];
            authnAccountId: number;
            isActive: boolean;
            firstname: string;
            lastname: string;
            username: string;
            isPrivate: boolean;
            isEmailVerified: boolean;
            createdAt: string | undefined;
            verifiedAt: string | undefined;
        };
        communityIdsToFollow: number[];
        profileImage: string;
        password: string;
    };
    isValid(): boolean;
}
