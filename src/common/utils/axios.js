import axios from "axios";
import configs from "../../config";

const { baseUrl } = configs.api;

const client = axios.create({
  baseURL: baseUrl,
});

export const request = ({ ...options }) => {
  const token = window.localStorage.getItem("token");
  client.defaults.headers.common.Authorization = `Bearer ${token}`;
  return client(options);
};
