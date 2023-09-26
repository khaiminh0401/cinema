import { fetchAPI } from "./axios";

const findShowtimeByMovieAndDate = async (showdate: any, movieId: any, page: any) => {
    return (await fetchAPI.get("/api/showtime/getShowTimeByDate", { params: { showdate: showdate, movieId: movieId, page: page } })).data as showtime[];
}

const findById = async (id:any) =>{
    return (await fetchAPI.get("/api/showtime/"+id)).data;
}

export const showtimeAPI = {
    findShowtimeByMovieAndDate,
    findById
}