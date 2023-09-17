import { fetchAPI } from "./axios"

const getSeatHasCheckTicket = async (id: any) =>{
    return (await fetchAPI.get("/api/seat/getSeatHasCheckTicket?id="+id)).data;
}

export const seatAPI = {
    getSeatHasCheckTicket
}