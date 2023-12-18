import { fetchAPI } from "./axios";

const getBillHistory = async (customerId: number, pageSize: number, page: number) => {
    return (await fetchAPI.get(`/bill?customerId=${customerId}&pageSize=${pageSize}&page=${page}`)).data as billHistories;
}

const getBillDetails = async (billId: number, customerId: number) => {
    return (await fetchAPI.get(`/bill/details/${billId}`, { params: { customerId } })).data as billDetails;
}

const updateRateAndReview = async (id: number, rate: number, review: string) => {
    return (await fetchAPI.post(`/bill/updateRateAndReview`, { id, rate, review })).data;
}

const getByMovie = async (id: any) => {
    return (await fetchAPI.get(`/bill/getByMovie?id=${id}`)).data;
}

const updateExportStatus = async (id: number, exportstatus: number) => {
    return (await fetchAPI.get(`/bill/updateExportStatus`, { params: { id, exportstatus } })).data;
}

const insertBillAndTicket = async (billTicketDto: { tickets: Ticket[]; customerId: number }) =>{
    return (await fetchAPI.post(`/bill/ticket`, billTicketDto)).data;
}

const insertToppingDetailsInBill = async (billToppingDetailsDto: BillToppingDetailsDto) =>{
    return (await fetchAPI.post(`/bill/topping`, billToppingDetailsDto)).data;
}

const checkout = async (billId: number, customerId: number) =>{
    return (await fetchAPI.get(`/bill/checkout`, {params: {billId, customerId}})).data;
}

const getReviewByMovieId = async (id: any, pageSize: any, page: any) => {
    return (await fetchAPI.get(`/bill/getReviewByMovieId/${id}?pageSize=${pageSize}&page=${page}`)).data as reviewType;
}

const sendOrder = async (sendOrderModel: sendOrderModel) => {
    return (await fetchAPI.post("/send-order", sendOrderModel)).data
}

export const billAPI = {
    getReviewByMovieId,
    getBillHistory,
    getBillDetails,
    insertBillAndTicket,
    insertToppingDetailsInBill,
    checkout,
    updateRateAndReview,
    getByMovie,
    updateExportStatus,
    sendOrder
}