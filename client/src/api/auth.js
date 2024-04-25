import { api } from ".";

const prefix = "auth";

export const signUp = async(data) => await  api.post(`/${prefix}`, data)

export const signIn = async(data) => await  api.post(`/${prefix}/sign-in`, data)

export const getMe = async() => await  api.get(`/${prefix}/get-me`)