import { fetchAPI } from "./axios"

const createVnpayPayment = async (vnpayPayment: VnpayPaymentDto) =>{
    return (await fetchAPI.post("/vnpay/pay",vnpayPayment)).data;
}

export const paymentAPI = {
    createVnpayPayment
}