import axios from "../../utils.js/Axios";


export const getBlogs = async () => {
  const response = await axios.get("/blogs");
  return response.data;
};
