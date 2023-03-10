import React from "react";
import { Link } from "react-router-dom";

const RelatedBlogCard = ({ bl }) => {
  const { image, title, createdAt, tags, id } = bl;
  return (
    <div className="card">
      <Link to={`/blogs/${id}`}>
        <img src={image} className="card-image" alt="" />
      </Link>

      <div className="p-4">
        <Link to={`/blogs/${id}`}>{title}</Link>
        <div className="mb-0 tags">
          {tags.slice(1, 3).map((tag, i) => (
            <span key={i}>#{tag} </span>
          ))}
        </div>
        <p>{createdAt}</p>
      </div>
    </div>
  );
};

export default RelatedBlogCard;
