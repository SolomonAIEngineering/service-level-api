import { type ClassValue } from 'clsx';
import { ErrorMessage } from 'src';
import { PlaidLinkOnSuccessMetadata, PlaidLinkOnExitMetadata, PlaidLinkStableEvent, PlaidLinkOnEventMetadata, PlaidLinkError } from 'react-plaid-link';
import { PersonalActionableInsightName, PocketType } from 'src/data-contracts/financial-service/data-contracts';
/**
 * Creates a string of CSS classes.
 * @param inputs - Class values to be combined.
 * @returns The string of CSS classes.
 */
export declare function cn(...inputs: ClassValue[]): string;
/**
 * Throws an error if one is present.
 * @param error - The error message to process.
 * @throws If an error is present.
 */
export declare const processErrorIfPresent: (error: ErrorMessage) => void;
/**
 * Formats a date string or a timestamp into a string representation.
 * @param input - The date string or the timestamp.
 * @returns The formatted date string.
 */
export declare function formatDate(input: string | number | undefined): string;
/**
 * Generates a random integer within the provided range.
 * @param min - The lower bound of the range.
 * @param max - The upper bound of the range.
 * @returns A random integer within the provided range.
 */
export declare const randomIntFromInterval: (min: number, max: number) => number;
/**
 * Formats a number to a defined number of decimal points.
 * @param input - The number to format.
 * @returns The formatted number string.
 */
export declare function formatNumber(input: number | undefined, numberOfDecimalPoint: number): string;
/**
 * Replaces all underscores in a string with spaces and convert the string to lower case.
 * @param input - The string to format.
 * @returns The formatted string.
 */
export declare function removeUnderScores(input: string): string;
/**
 * Converts a Date object into a "time ago" string.
 * @param date - The date to convert.
 * @returns A string representing how long ago the date was.
 */
export declare function timeAgo(date: Date): string;
/**
 * Rounds a number to two decimal places.
 * @param num - The number to round.
 * @returns The rounded number.
 */
export declare function roundToTwoDecimalPlaces(num: number): number;
/**
 * Converts a YYYYMM format string into a Month Year string.
 * @param dateString - The date string to convert.
 * @returns The formatted date string.
 */
export declare function convertToMonth(dateString: string): string;
/**
 * Logs event details to the console.
 * @param eventName - The name of the event.
 * @param metadata - Metadata related to the event.
 * @param error - Any errors related to the event.
 */
export declare const logEvent: (eventName: PlaidLinkStableEvent | string, metadata: PlaidLinkOnEventMetadata | PlaidLinkOnSuccessMetadata | PlaidLinkOnExitMetadata, error?: PlaidLinkError | null, userId?: number) => void;
/**
 * Logs successful Plaid Link events.
 * @param params - Metadata related to the success event.
 * @param userId - The ID of the user.
 */
export declare const logSuccess: ({ institution, accounts, link_session_id }: PlaidLinkOnSuccessMetadata, userId: number) => Promise<void>;
/**
 * Logs Plaid Link exit events.
 * @param error - Any errors related to the event.
 * @param params - Metadata related to the exit event.
 * @param userId - The ID of the user.
 */
export declare const logExit: (error: PlaidLinkError | null, { institution, status, link_session_id, request_id }: PlaidLinkOnExitMetadata, userId: number) => Promise<void>;
/**
 * Replaces all underscores in a string with spaces.
 * @param str - The string to format.
 * @returns The formatted string.
 */
export declare function replaceUnderscoreWithSpace(str: string): string;
/**
 * Helper function to format the pocket name string.
 *
 * @param input - The pocket name string to format.
 * @returns The formatted pocket name string.
 */
export declare function formatPocketName(input: string): string;
export declare function getRandomNumber(min: number, max: number): number;
export declare function getRandomString(length: number): string;
export declare function getRandomArrayItem<T>(arr: T[]): T;
export declare function getRandomDate(start: Date, end: Date): string;
export declare function getRandomBoolean(): boolean;
export declare function getRandomSubcategories(): string[];
export declare function getRandomAmount(): string;
export declare function getRandomBalance(): number;
export declare function getRandomStringWithPrefix(length: number, prefix?: string): string;
export declare function getRandomDateInRange(startYear: number, endYear: number): Date;
export declare const formatFrequency: (frequency: string) => string;
export declare const formatPocketType: (type: PocketType) => string;
export declare const convertToReadablePersonalInsightName: (insightName: PersonalActionableInsightName) => string;
