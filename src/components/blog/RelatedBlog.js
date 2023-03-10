import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedBlogs } from "../../features/relatedBlog/RelatedBlogSlice";
import RelatedBlogCard from "./RelatedBlogCard";

const RelatedBlog = ({ tags, id }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRelatedBlogs({ tags, id }));
  }, [dispatch, tags, id]);

  const { blogs } = useSelector((state) => state.relatedBlog);

  return (
    <aside>
      <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">
        Related Posts
      </h4>
      <div className="space-y-4 related-post-container">
        {blogs.length === 0 && <p>No Related Blog</p>}

        {blogs && blogs.map((bl) => <RelatedBlogCard key={bl.id} bl={bl} />)}
      </div>
    </aside>
  );
};

export default RelatedBlog;
