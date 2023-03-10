import axios from "../../utils.js/Axios";

export const getIsSaved = async (blogId, updatedIsSaved) => {
    console.log(blogId, updatedIsSaved)
  const response = await axios.patch(`/blogs/${blogId}`, {
    isSaved: updatedIsSaved,
  });
  return response.data;
};