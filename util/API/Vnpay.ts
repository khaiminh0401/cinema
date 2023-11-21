import { AxiosRequestConfig } from "axios";
import { fetchAPI } from "./axios";

const pay = async (vnpayPayment: VnpayPaymentDto) => {
    return (await fetchAPI.post(`/vnpay/pay`, vnpayPayment)).data;
}

export const vnpayAPI = {
    pay,
}