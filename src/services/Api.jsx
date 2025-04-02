import axios from "axios";

export const Api = axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_BACKEND_URL_API_PRD : process.env.NEXT_PUBLIC_BACKEND_URL_API
})
