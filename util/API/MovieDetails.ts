import { fetchAPI } from "./axios";
const findAll = async() =>{
    return (await fetchAPI.get("/api/movieDetails")).data as Array<movieDetails>;
}
const findById = async(id:String) =>{
    return (await fetchAPI.get(`/api/movieDetails/${id}`)).data as movieDetails;
}


export const movieDetailsAPI = {
    findAll,
    findById
}