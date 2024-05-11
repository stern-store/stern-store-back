import { signInRepositories } from "../ repositories/sign-in-repository.js";

const userDataComparate = async (email: string) => {
    return await signInRepositories.userDataComparateRepository(email);
};
const insertSession = async (userId: number, token: string) => {
    return await signInRepositories.insertSessionRepository(userId, token);
};

const deleteUserSessions = async (id: number) => {
    return await signInRepositories.deleteUserSessionsRepository(id);
};

const signInServices = {
    userDataComparate,
    insertSession,
    deleteUserSessions
};

export { signInServices }