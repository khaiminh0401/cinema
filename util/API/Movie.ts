import { fetchAPI } from "./axios";
const findAll = async() =>{
    return (await fetchAPI.get("/movie")).data as Array<movie>;
}
const findById = async(id:string) =>{
    return (await fetchAPI.get(`/movie/${id}`)).data as movie;
}
const findByStatus = async(statusId:string) =>{
    return (await fetchAPI.get(`/movie/status/${statusId}`)).data as Array<movie>;
}

export const movieAPI = {
    findAll,
    findById,
    findByStatus
}