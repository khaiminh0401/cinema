import { fetchAPI } from "./axios";

const findAll = async () => {
    return (await fetchAPI.get("/api/customer/getAll")).data as customer[];
}

const Login = async (inputs: Object) => {
    return (await fetchAPI.post("/api/customer/login", inputs)).data;
}
export const customerAPI = {
    findAll,
    Login
}

