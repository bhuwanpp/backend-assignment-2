import { GetUserQuery, User } from "../interfaces/user";
import { users } from "../mockdata/user";

/**
 * Retrieves a user by their ID.
 * @param {string} id - The ID of the user to retrieve.
 * @returns {User | undefined} - The user object if found, undefined otherwise.
 */
export function getUseerById(id: string): User | undefined {
  return users.find(({ id: userId }) => userId === id);
}

/**
 * Creates a new user and adds them to the users array.
 * @param {User} user - The user object to create.
 *  * @returns {number | undefined} - The new length of the users array after adding the user.
 */
export function createUser(user: User): number | undefined {
  const existingUser = users.find((u) => u.email === user.email);
  if (existingUser) {
    return;
  }
  return users.push({
    ...user,
    id: `${users.length + 1}`,
  });
}

/**
 * Retrieves users from the users array based on the provided query.
 * If no query is provided, returns all users.
 * @param {GetUserQuery} query - The query object containing search parameters.
 * @returns {User[]} - Array of users that match the query or all users if no query is provided.
 */
export function getUsers(query: GetUserQuery): User[] {
  const { q } = query;
  if (q) {
    return users.filter(({ name }) => name.includes(q));
  }
  return users;
}

/**
 * Retrieves a user by their email address.
 * @param {string} email - The email address of the user to retrieve.
 * @returns {User | undefined} - The user object if found, undefined otherwise.
 */
export function getUserByEmail(email: string): User | undefined {
  return users.find((user) => user.email === email);
}
