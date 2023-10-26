import axios from "axios";

export const fetchAPI = axios.create({
    baseURL: "http://localhost:8080/api",
    headers: { 'zuhot-key': 'abc123456' }
});
export const fetchPaypalAPI = axios.create({
    baseURL: "https://api-m.sandbox.paypal.com"
});