import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBlogs } from "./BlogsApi";

const initialState = {
  blogs: [],
  isLoading: false,
  isError: false,
  error: "",
};

// create thunk
export const fetchBlogs = createAsyncThunk("fetch/blogs", async () => {
  const blogs = await getBlogs();
  return blogs;
});

// create slice
const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchBlogs.pending, (state, action) => {
      state.isError = false;
      state.isLoading = true;
    });
    builder.addCase(fetchBlogs.fulfilled, (state, action) => {
      state.isLoading = false;
      state.blogs = action.payload;
    });
    builder.addCase(fetchBlogs.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error?.message;
      state.blogs = [];
    });
  },
});

export default blogsSlice.reducer;
