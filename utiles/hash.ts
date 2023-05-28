import crypto from 'crypto';


/**
 * Hashes a password with a random salt using pbkdf2Sync algorithm.
 *
 * @param {string} password - the password to be hashed
 * @return {Object} an object containing the hashed password and the salt used
 */
export const hashPassword = (password: string) => {

    const salt = crypto.randomBytes(16).toString('hex')
    const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512')

    return { hash, salt }
}


/**
 * Verifies if a provided password matches a given hash and salt.
 *
 * @param {string} password - The password to verify.
 * @param {string} hash - The hash to compare the password against.
 * @param {string} salt - The unique salt used to hash the password.
 * @returns {boolean} - Returns true if the password matches the hash, false otherwise.
 */
export const verifyPassword = (password: string, hash: string, salt: string) => {
    return crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex') === hash
}
