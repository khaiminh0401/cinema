import $ from 'jquery';
import { fetchAPI } from "./axios";
import { log } from 'console';
const findByKey = (inputs: object) => {
    return fetchAPI.get("/customer/login", { params: { ...inputs } }).then(response => response.data as customer);
}
export const customerAPI = {
    findByKey
}