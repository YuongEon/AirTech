import axios, { AxiosError, AxiosResponse } from "axios";

const instance = axios.create({
  baseURL: 'http://127.0.0.1:8000'
})
// request
instance.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// response
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error : AxiosError) => {
    return Promise.reject(error)
  }
)

export default instance