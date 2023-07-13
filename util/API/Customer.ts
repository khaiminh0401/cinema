import { fetchAPI } from "./axios";
const findByKey = async (inputs: object) => {
    return ((await fetchAPI.get("/customer/login", { params: { ...inputs } })).data as customer);
}
export const customerAPI = {
    findByKey
}