import axios from 'axios';

export const api = axios.create({
    /* baseURL: "http://localhost:3333" */
    baseURL: "https://food-backend-ojx8.onrender.com"
})