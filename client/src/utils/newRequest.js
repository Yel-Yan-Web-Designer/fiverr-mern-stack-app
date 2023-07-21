import axios from "axios";

export const newRequest = axios.create({
    baseURL : "http://localhost:8000/api/v1",
    withCredentials : true, // Set 'withCredentials' to true to include credentials
})