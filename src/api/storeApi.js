import axiosClient from "./axiosClient";

const storeApi={
    getProducts: (params) =>{
        const url = "products/"
        return axiosClient.get(url,params)
    },
    getCategories: () =>{
        return axiosClient.get("products/categories")
    }
}

export default storeApi;