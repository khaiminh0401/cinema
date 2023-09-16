import { fetchAPI } from "./axios";

const findAll = async () => {
    return (await fetchAPI.get("/api/customer/getAll")).data as customer[];
}

const login = async (inputs: Object) => {
    return (await fetchAPI.post("/api/customer/login", inputs)).data;
}
const registration = async (inputs: object) => {
    return (await fetchAPI.post("/api/customer/registration", inputs)).data;
}
const registrationConfirm = async (inputs: string) => {
    return (await fetchAPI.get("/api/customer/active?userToken=" + inputs)).data;
}
export const customerAPI = {
    registration,
    registrationConfirm,
    findAll,
    login
}

