import React from "react";
import { Link } from "react-router-dom";

const BlogGridItem = ({ blog }) => {
  const { image, title, createdAt, likes, id, tags, isSaved } = blog;

  return (
    <div className="lws-card">
      <Link to={`/blogs/${id}`}>
        <img src={image} className="lws-card-image" alt="" />
      </Link>

      <div className="p-4">
        <div className="lws-card-header">
          <p className="lws-publishedDate">{createdAt}</p>
          <p className="lws-likeCount">
            <i className="fa-regular fa-thumbs-up"></i>
            {likes}
          </p>
        </div>
        <Link to={`/blogs/${id}`} className="lws-postTitle">
          {title}
        </Link>

        <div className="lws-tags">
          {tags.slice(1, 3).map((tag,i) => (
            <span key={i}>#{tag} </span>
          ))}
        </div>
        {/* <!-- Show this element if post is saved --> */}
        <div className="flex gap-2 mt-4">
          {isSaved && <span className="lws-badge"> Saved </span>}
        </div>
        {/* <!-- Show this element if post is saved Ends --> */}
      </div>
    </div>
  );
};

export default BlogGridItem;
