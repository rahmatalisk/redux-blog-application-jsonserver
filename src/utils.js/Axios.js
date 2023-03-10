import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://redux-blog-server.onrender.com",
});

export default axiosInstance;
