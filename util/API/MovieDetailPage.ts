import { fetchAPI } from "./axios";

const findMovieDetailPage = async (id: String) => {
    return (await fetchAPI.get(`/movie/detail/${id}`)).data as movieDetailPage;
}

export const movieDetailPageAPI = {
    findMovieDetailPage
}