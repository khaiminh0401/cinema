import {fetchAPI} from "./axios"

const createVnpayPayment = async (vnpayPayment: VnpayPaymentDto, billId: string, paymentMethod: string) => {
    return (await fetchAPI.post("/vnpay/pay", vnpayPayment,
        {params: {billId, paymentMethod}})).data as string;
}

const paymentInformation = async (vnpayResult: VnpayResultDto, billId: number) => {
    return (await fetchAPI.post("/vnpay/payment-information", {},
        {params: {billId: billId, ...vnpayResult}})).data;
}

const paymentAndCreateToken = async (vnpayToken: VnpayToken, billId: string, paymentMethod: string) => {
    return (await fetchAPI.post("/vnpay/pay-and-create-token", vnpayToken,
        {params: {billId, paymentMethod}})).data as string;
}

const paymentByToken = async (vnpayToken: VnpayToken, billId: string, paymentMethod: string) => {
    return (await fetchAPI.post("/vnpay/pay-by-token", vnpayToken,
        {params: {billId, paymentMethod}})).data as string;
}

const createToken = async (vnpayToken: VnpayToken) => {
    return (await fetchAPI.post("/vnpay/create-token", vnpayToken)).data as string;
}

const saveToken = async (vnpayToken: VnpayToken) => {
    return (await fetchAPI.post("/vnpay/save-token", vnpayToken)).data;
}

const removeToken = async (vnpayToken: VnpayToken) => {
    return (await fetchAPI.delete("/vnpay/remove-token",
        {
            data: {...vnpayToken}
        })).data;
}

const paymentAndTokenCreated = async (vnpayToken: VnpayToken, billId: number) => {
    return (await fetchAPI.post("/vnpay/check-payment-and-token", {},
        {params: {billId: billId, ...vnpayToken}})).data;
}

const paymentByTokenStage = async (vnpayToken: VnpayToken, billId: number) => {
    return (await fetchAPI.post("/vnpay/payment-by-token-stage", {},
        {params: {billId: billId, ...vnpayToken}})).data;
}

export const vnpayAPI = {
    createVnpayPayment,
    paymentInformation,
    createToken,
    saveToken,
    removeToken,
    paymentAndCreateToken,
    paymentByToken,
    paymentAndTokenCreated,
    paymentByTokenStage,
}