import { fetchAPI } from "./axios"

const findByCustomerId = async (customerId: number) =>{
    return (await fetchAPI.get("/token/customer", {params: {customerId}})).data as TokenVnpay;
}

export const tokenVnpayAPI = {
    findByCustomerId,
}