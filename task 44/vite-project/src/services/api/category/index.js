import axios from "axios";
import BASE_URL from "../BASE_URL";

export const getAllCategories = async()=>{
    let categories;
    await axios.get(`${BASE_URL}/categories`)
    .then((response)=>{
        categories = response.data;
    })
    return categories;
}