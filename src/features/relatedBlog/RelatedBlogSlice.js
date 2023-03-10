import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRelatedBlog } from "./RelatedBlogAPI";

const initialState = {
  blogs: [],
  isLoading: false,
  isError: false,
  error: "",
};

// create thunk
export const fetchRelatedBlogs = createAsyncThunk("fetch/relatedBlogs", async ({tags,id}) => {
    
  const blogs = await getRelatedBlog({tags,id});
  return blogs;
});

// create slice
const relatedBlogsSlice = createSlice({
  name: "relatedBlogs",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchRelatedBlogs.pending, (state, action) => {
      state.isError = false;
      state.isLoading = true;
    });
    builder.addCase(fetchRelatedBlogs.fulfilled, (state, action) => {
      state.isLoading = false;
      state.blogs = action.payload;
    });
    builder.addCase(fetchRelatedBlogs.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error?.message;
      state.blogs = [];
    });
  },
});

export default relatedBlogsSlice.reducer;
