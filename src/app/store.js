import { configureStore } from '@reduxjs/toolkit';
import blogSlice from '../features/blog/BlogSlice';
import BlogsSlice from '../features/Blogs/BlogsSlice';
import relatedBlogSlice from '../features/relatedBlog/RelatedBlogSlice';




export const store = configureStore({
  reducer: {
    blogs: BlogsSlice,
    blog: blogSlice,
    relatedBlog : relatedBlogSlice
   
  },
});
