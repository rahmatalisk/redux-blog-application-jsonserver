import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getIncrementLike } from "../incrementLike/IncrementAPI";
import { getIsSaved } from "../isSaved/IsSaved";
import { getBlog } from "./BlogAPI";

const initialState = {
  blog: {},
  isLoading: false,
  isError: false,
  error: "",
};

// create thunk
export const fetchBlog = createAsyncThunk("fetch/blog", async (blogId) => {
  const blog = await getBlog(blogId);
  return blog;
});

// create slice
const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    updateLikes: (state, action) => {
      const { blogId } = action.payload;
      state.blog.likes += 1;
      getIncrementLike(blogId, state.blog.likes);
    },
    updateIsSaved: (state, action) => {
      const { blogId } = action.payload;
      state.blog.isSaved = !state.blog.isSaved;
      getIsSaved(blogId, state.blog.isSaved);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBlog.pending, (state) => {
      state.isError = false;
      state.isLoading = true;
    });
    builder.addCase(fetchBlog.fulfilled, (state, action) => {
      state.isLoading = false;
      state.blog = action.payload;
    });
    builder.addCase(fetchBlog.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error?.message;
      state.blog = [];
    });
  },
});

export const { updateLikes, updateIsSaved } = blogSlice.actions;

export default blogSlice.reducer;
