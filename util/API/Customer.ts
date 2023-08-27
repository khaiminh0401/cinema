import { fetchAPI } from "./axios";

const findAll = async () => {
    return (await fetchAPI.get("/customer/getAll")).data as customer[];
}

const findByKey = async (inputs: Object) => {
    const res = await fetchAPI.post("/customer/login", inputs, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    return res.data;
}
export const customerAPI = {
    findAll,
    findByKey
}

