import axios from "../../utils.js/Axios";

export const getIncrementLike = async (blogId, updatedLikes) => {
  const response = await axios.patch(`/blogs/${blogId}`, {
    likes: updatedLikes,
  });
  return response.data;
};
