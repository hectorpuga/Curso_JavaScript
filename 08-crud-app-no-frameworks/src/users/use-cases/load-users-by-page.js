import { localHostUserToModel } from "../mappers/localhost-user.mapper";


/**
 * @typedef {User} User
 */

/**
 * 
 * @param {Number} page 
 * @returns {Promise<User[]>}
 */
export const loadUsersbyPage = async (page = 1) => {
    const url = `${import.meta.env.VITE_BASE_URL}/users?_page=${page}`

    const res = await fetch(url);

    const data = await res.json();

    const users = data.map(localHostUserToModel);


    return users;
}