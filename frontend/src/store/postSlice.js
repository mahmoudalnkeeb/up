import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const API_POSTS_URL = "http://localhost:4005/posts";

export const getAllPostsAction = createAsyncThunk(
  "posts/get-all-posts",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    const posts = fetch(`${API_POSTS_URL}?_sort=id,views&_order=desc`)
      .then((response) => response.json())
      .catch((error) => rejectWithValue(error));
    return posts;
  }
);

export const postPostAction = createAsyncThunk(
  "post/new-post",
  async (postData, thunckAPI) => {
    const { rejectWithValue } = thunckAPI;

    const postRequest = fetch(API_POSTS_URL, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((response) => response.json())
      .catch((error) => rejectWithValue(error));
    return postRequest;
  }
);

export const postUpdateAction = createAsyncThunk(
  "posts/update-value",
  async ({ id, newData }, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    const updatePost = fetch(`${API_POSTS_URL}/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then((response) => response.json())
      .catch((error) => rejectWithValue(error));
    return updatePost;
  }
);

export const deletePostAction = createAsyncThunk(
  "posts/delete-post",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    const deletePost = fetch(`${API_POSTS_URL}/${id}`, { method: "DELETE" })
      .then((response) => response.json())
      .catch((error) => rejectWithValue(error));
    return deletePost;
  }
);

const initialState = {
  posts: [],
  isLoading: true,
  isError: false,
  isSent: false,
  isDeleted: false,
};
const postsSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: {
    [getAllPostsAction.pending]: (state, action) => {
      state.isLoading = true;
      state.isError = false;
    },
    [getAllPostsAction.fulfilled]: (state, action) => {
      state.posts = action.payload;
      state.isLoading = false;
      state.isError = false;
    },
    [getAllPostsAction.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
    },

    // SEND REQUEST
    [postPostAction.pending]: (state, action) => {
      state.isLoading = false;
      state.isSent = false;
      state.isError = false;
    },
    [postPostAction.fulfilled]: (state, action) => {
      state.posts.push(action.payload);
      state.isSent = true;
    },
    [postPostAction.rejected]: (state, action) => {
      state.isLoading = false;
      state.isSent = false;
      state.isError = true;
    },
    // SEND CHANGE REQUEST
    [postUpdateAction.pending]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
    },
    [postUpdateAction.fulfilled]: (state, action) => {
      const filteroldData = state.posts.filter(
        (post) => post.id !== action.payload.id
      );
      state.posts = filteroldData;
      state.posts.push(action.payload);
    },
    [postUpdateAction.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
    },

    // Delete a post
    [deletePostAction.pending]: (state, action) => {
      state.isLoading = true;
      state.isError = false;
      state.isDeleted = false;
    },
    [deletePostAction.fulfilled]: (state, action) => {
      const filterdData = state.posts.filter(
        (post) => post.id !== action.meta.arg
      );
      state.posts = filterdData;
      state.isDeleted = true;
      state.isLoading = false;
    },
    [deletePostAction.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.isDeleted = false;
    },
  },
});

export default postsSlice.reducer;
