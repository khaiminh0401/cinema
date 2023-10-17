import {fetchAPI} from "./axios"

const getToppingByBranch = async (id: any) => {
    return (await fetchAPI.get("/topping/branch?branchid=" + id)).data;
}

export const toppingAPI = {
    getToppingByBranch
}