import axios, { AxiosRequestConfig, AxiosInstance } from "axios";

axios.defaults.baseURL = "http://localhost:3048/api";

export function connect(config?: AxiosRequestConfig): AxiosInstance {
    if (!config) {
        return axios;
    }
    if (config.baseURL) {
        config.baseURL = axios.defaults.baseURL + config.baseURL;
    }
    return axios.create({ ...axios.defaults, ...config });
}