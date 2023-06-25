import axios from "axios";
import toast from "react-hot-toast";
import baseUrl from "./config";

let Api = axios.create({
  baseURL: baseUrl,

  headers: {
    "Content-type": "multipart/form-data",
    accept: "application/json",
  },
  transformResponse: (data) => {
    let response = JSON.parse(data);
    if (response?.status === 201) {
      toast.success(response?.message);
    }
    if (response?.status === 203) {
      toast.error(response?.message);
    }
    return response;
  },

  validateStatus: function (status) {
    if (status === 401) {
      localStorage.removeItem("user");
    }

    if (status === 422) {
      return status;
    }

    return status >= 200 && status < 300;
  },
});

Api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${
    localStorage.getItem("accessToken") &&
    JSON.parse(localStorage.getItem("accessToken"))
  }`;
  return config;
});

export default Api;
