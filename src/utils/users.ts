import type {User} from "../interfaces/users.ts";

export const getHardCodedUsers = (): User[] => {
    return [
        {firstname: 'Jean', lastname: 'Dupont', gender: 'male', picture: 'https://randomuser.me/api'},
        {firstname: 'Michelle', lastname: 'Dupont', gender: 'female', picture: 'https://randomuser.me/api'},
        {firstname: 'X456', lastname: 'Z498', gender: 'male', picture: 'https://randomuser.me/api'},
    ]
}