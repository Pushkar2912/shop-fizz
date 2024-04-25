import { api } from ".";

const prefix = "categories"

export const getCategories = async () => await api.get(`/${prefix}`)
