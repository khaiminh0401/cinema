import axios from "axios";

export const fetchAPI = axios.create({
    baseURL:"http://localhost:8080/api"
});
