import { AxiosRequestConfig } from "axios";
import { fetchAPI } from "./axios";

const getBillHistory = async (customerId: number) => {
    return (await fetchAPI.get(`/bill?customerId=${customerId}`)).data as billHistory[];
}

const getBillDetails = async (billId: number, customerId: number) => {
    return (await fetchAPI.get(`/bill/details/${billId}`, { params: { customerId } })).data as billDetails;
}

const updateRateAndReview = async (id: number, rate: number, review: string) => {
    return (await fetchAPI.post(`/bill/updateRateAndReview`, {id,rate,review})).data;
}

const getByMovie = async (id:any) =>{
    return (await fetchAPI.get(`/bill/getByMovie?id=${id}`)).data;
}

export const billAPI = {
    getBillHistory,
    getBillDetails,
    updateRateAndReview,
    getByMovie
}