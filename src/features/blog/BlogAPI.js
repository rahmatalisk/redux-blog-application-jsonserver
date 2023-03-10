import axios from "../../utils.js/Axios"

export const getBlog = async (blogId) => {
    const response = await axios.get(`/blogs/${blogId}`);
    return response.data;
  };