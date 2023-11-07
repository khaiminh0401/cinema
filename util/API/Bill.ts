import { fetchAPI } from "./axios";

const getBillHistory = async (customerId: number) => {
    return (await fetchAPI.get(`/bill?customerId=${customerId}`)).data as billHistory[];
}

const getBillDetails = async (billId: number, customerId: number) => {
    return (await fetchAPI.get(`/bill/details/${billId}`, { params: { customerId } })).data as billDetails;
}

const updateExportStatus = async (id:number, exportstatus:boolean) =>{
    return (await fetchAPI.get(`/bill/updateExportStatus`,{params:{id,exportstatus}})).data; 
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

export const billAPI = {
    getBillHistory,
    getBillDetails,
    updateExportStatus,
    insertBillAndTicket,
    insertToppingDetailsInBill,
    checkout,
}