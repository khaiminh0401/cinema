import { fetchAPI } from "./axios";
const findAll = async () => {
    return (await fetchAPI.get("/api/movie")).data as movie[];
}
const findById = async (id: String) => {
    return (await fetchAPI.get(`/api/movie/${id}`)).data as movie;
}
const findByStatus = async (status: String) => {
    return (await fetchAPI.get(`/api/movie?status=${status}`)).data as movie[];
}
const findMoviesNowShowing = async () => {
    return (await fetchAPI.get(`/api/movie/nowshowing`)).data as movie[];
}
const getByShowTime = async (id: any) =>{
    return (await fetchAPI.get(`/api/movie/getByShowTime?showtimeid=${id}`)).data as movie; 
}

export const movieAPI = {
    findAll,
    findById,
    findByStatus,
    findMoviesNowShowing,
    getByShowTime
}