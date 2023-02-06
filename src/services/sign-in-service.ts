import { signInRepositories } from "../ repositories/sign-in-repository.js";

const userDataComparate = async (email: string) => {
    return await signInRepositories.userDataComparateRepository(email);
};
const insertSession = async (userId: number, token: string) => {
    return await signInRepositories.insertSessionRepository(userId, token);
}
const deleteSessions = async (userId:number) => {
    return await signInRepositories.deleteSessionsRepository(userId)
}
const signInServices = {
    userDataComparate,
    insertSession,
    deleteSessions
};

export { signInServices }