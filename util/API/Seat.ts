import { fetchAPI } from "./axios"

const getSeatHasCheckTicket = async (id: any) =>{
    return (await fetchAPI.get("/api/seat/getSeatHasCheckTicket?id="+id)).data;
}

const getTotalPrice = async (showtimeid:number, name: string) =>{
    return (await fetchAPI.get(`/api/seat/getTotalPrice?showtimeid=${showtimeid}&name=${name}`)).data;
}

export const seatAPI = {
    getSeatHasCheckTicket,
    getTotalPrice
}