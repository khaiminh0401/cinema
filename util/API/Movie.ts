import { fetchAPI } from "./axios";
const findAll = async() =>{
    return (await fetchAPI.get("/movie")).data as Array<movie>;
}
const findById = async(id:String) =>{
    return (await fetchAPI.get(`/movie/${id}`)).data as movie;
}


export const movieAPI = {
    findAll,
    findById
}