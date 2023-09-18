import { fetchAPI } from "./axios";
const findAll = async () => {
    return (await fetchAPI.get("/home/getSelected")).data;
}

export const HomeAPI = {
    findAll
}