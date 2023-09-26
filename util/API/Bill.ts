import { AxiosRequestConfig } from "axios";
import { fetchAPI } from "./axios";

const getBillHistory = async (customerId: number) => {
    return (await fetchAPI.get(`/bill?customerId=${customerId}`)).data as billHistory[];
}

export const billAPI = {
    getBillHistory,
}