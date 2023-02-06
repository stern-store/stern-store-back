import { signUpRepositories } from "../ repositories/sign-up-repository.js";

const userIsRegistered = async (email: string) =>{
    return await signUpRepositories.userIsRegisteredRepository(email);
}
const insertUser =async (name: string, email: string, cryptography: string ) => {
    return await signUpRepositories.insertUserRepository(name, email, cryptography);
}

const signUpServices = {
    userIsRegistered,
    insertUser
}
export { signUpServices }