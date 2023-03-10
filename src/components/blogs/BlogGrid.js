import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../features/Blogs/BlogsSlice";
import PostGridItem from "./BlogGridItem";

const BlogGrid = ({ toggle, sortData }) => {
  const [blogItems, setBlogItems] = useState([]);

  const dispatch = useDispatch();

  // get value from state
  const { blogs, isLoading, isError, error } = useSelector(
    (state) => state.blogs
  );

  // fetch blogs
  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  useEffect(() => {
    let sortedArray = [...blogs];

    const sortBlogs = async (data) => {
      if (data === "newest") {
        sortedArray.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
      }
      if (data === "most_liked") {
        sortedArray.sort((a, b) => b.likes - a.likes);
      }
      setBlogItems(sortedArray);
    };

    sortBlogs(sortData);

    // filter by saved
    if (toggle) {
      const filterBlog = sortedArray.filter((blog) => blog.isSaved === true);
      setBlogItems(filterBlog);
    } else {
      setBlogItems(sortedArray);
    }
  }, [sortData, blogs, toggle]);

  // decide what to render
  let content;

  if (isLoading) content = <div className="col-span-12">Loading!</div>;
  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;

  if (!isError && !isLoading && blogItems?.length === 0) {
    content = <div className="col-span-12">No blogItems found!</div>;
  }

  if (!isError && !isLoading && blogItems?.length > 0) {
    content = blogItems.map((blog) => (
      <PostGridItem key={blog.id} blog={blog} />
    ));
  }

  return (
    <main className="post-container" id="lws-postContainer">
      {content}
    </main>
  );
};

export default BlogGrid;
