import React from "react";
import { useDispatch } from "react-redux";
import { updateIsSaved, updateLikes } from "../../features/blog/BlogSlice";

const LikeSaved = ({ isSaved, likes, id }) => {
  const dispatch = useDispatch();
  const handleLikeClick = () => {
    dispatch(updateLikes({ blogId: id }));
  };
  const handleSavedClick = () => {
    dispatch(updateIsSaved({ blogId: id }));
  };

  return (
    <div className="btn-group">
      <button
        onClick={handleLikeClick}
        className="like-btn"
        id="lws-singleLinks"
      >
        <i className="fa-regular fa-thumbs-up"></i> {likes}
      </button>

      <button onClick={handleSavedClick}
        className={`save-btn ${isSaved && "active"}`}
        id="lws-singleSavedBtn"
      >
        <i className="fa-regular fa-bookmark"></i> {isSaved ? "Saved": "Save"}
      </button>
    </div>
  );
};

export default LikeSaved;
