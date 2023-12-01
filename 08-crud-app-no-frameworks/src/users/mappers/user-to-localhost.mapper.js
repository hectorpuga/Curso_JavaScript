import { User } from "../models/user";

/**
 * 
 * @param {User} user 
 */
export const userModelToLocalhost = (user) => {

    const {
        avatar, balance, firstName, gender, isActive, id, lastName
    } = user;


    return {
        avatar, balance, first_name: firstName, gender, id, isActive, last_name: lastName
    }
}