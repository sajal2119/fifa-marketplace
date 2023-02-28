import axios from "axios";

const BASE_API_URL = "https://api.prod.rock-palisade-352518.com/";
export const API_URL = "/marketplace/listings/search";

export const listingApi = axios.create({
    baseURL: BASE_API_URL,
});
