import React from "react";
import { ColorRing } from "react-loader-spinner";
import Loading from "../ui/Loading";
import LikeSaved from "./LikeSaved";

const BlogDetail = ({ blog, isLoading, isError, error }) => {
  const { image, likes, title, description, tags, isSaved, id } = blog;

  // decide what to render
  let content;

  if (isLoading) content =  <Loading/>;
  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;

  if (!isError && !isLoading && blog === {}) {
    content = <div className="col-span-12">No blogItems found!</div>;
  }

  if (!isError && !isLoading && blog !== {}) {
    content = (
      <main className="post">
        <img
          src={image}
          alt="githum"
          className="w-full rounded-md"
          id="lws-megaThumb"
        />
        <div>
          <h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
            {title}
          </h1>
          <div className="tags" id="lws-singleTags">
            {tags?.map((tag, i) => (
              <span key={i}>#{tag} </span>
            ))}
          </div>

          {<LikeSaved isSaved={isSaved} likes={likes} id={id} />}
          <div className="mt-6">
            <p>{description}</p>
          </div>
        </div>
      </main>
    );
  }

  return content;
};

export default BlogDetail;
