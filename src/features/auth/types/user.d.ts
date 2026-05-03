import { USER_ROLES } from "../constants/user.constants";

/**
 * A union of all valid user role string literals derived from {@link USER_ROLES}.
 *
 * @example
 * const role: UserRole = "ADMIN";
 */
export type UserRole = (typeof USER_ROLES)[keyof typeof USER_ROLES];

/**
 * Represents an authenticated user in the system.
 */
export interface User {
    /** Unique identifier for the user. */
    id: string;
    /** The user's login username. */
    username: string;
    /** The user's email address, or `null` if not provided. */
    email: string | null;
    /** The user's phone number, or `null` if not provided. */
    phone: string | null;
    /** The user's first name. */
    firstName: string;
    /** The user's last name. */
    lastName: string;
    /** Whether the user has verified their email address. */
    emailVerified: boolean;
    /** Whether the user has verified their phone number. */
    phoneVerified: boolean;
    /** The user's assigned role, controlling access permissions. */
    role: UserRole;
}