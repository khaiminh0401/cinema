import { fetchAPI } from "./axios";
const findShowtimeByMovieAndDate = async (showdate: any, movieId: any) => {
    return (await fetchAPI.get("/api/showtime/movieAndDate", { params: { showdate: showdate, movieId: movieId } })).data as showtime[];
}

export const showtimeAPI = {
    findShowtimeByMovieAndDate
}