import axios, { AxiosInstance, AxiosResponse } from "axios";

const https: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

https.interceptors.response.use((response: AxiosResponse) => {
  const { data } = response;
  return response.data;
});

export default https;
