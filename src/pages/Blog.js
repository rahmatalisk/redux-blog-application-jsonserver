import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import BlogDetail from "../components/blog/BlogDetail";
import RelatedBlog from "../components/blog/RelatedBlog";
import GoToHome from "../components/ui/GoToHome";
import { fetchBlog } from "../features/blog/BlogSlice";

const Blog = () => {
  const dispatch = useDispatch();
  const { blog,isLoading,isError,error } = useSelector((state) => state.blog);
  const { tags, id } = blog;
  const { blogId } = useParams();
  useEffect(() => {
    dispatch(fetchBlog(blogId));
  }, [dispatch, blogId]);
  return (
    <>
      <GoToHome />
      <section className="post-page-container">
        <BlogDetail blog={blog} isError={isError} error={error} isLoading={isLoading}/>
        <RelatedBlog tags={tags} id={id} />
      </section>
    </>
  );
};

export default Blog;
