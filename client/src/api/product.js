import { api } from ".";

const prefix = 'products'

export const getProducts = () => api.get(`/${prefix}`)
export const getProduct =  (id) => api.get(`/${prefix}/${id}`)

export const createProduct = (data) => api.get(`/${prefix}`, data) 