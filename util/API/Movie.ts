import { fetchAPI } from "./axios";
const findAll = () =>{
    return fetchAPI.get("/movie").then(response => response.data as Array<movie>);
}

export const movieAPI = {
    findAll
}