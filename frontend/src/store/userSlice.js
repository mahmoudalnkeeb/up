import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_USER_URL = "http://localhost:4005/user";

export const getUsersAction = createAsyncThunk(
  "users/get-user",
  async (_, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    const users = fetch(API_USER_URL)
      .then((response) => response.json())
      .catch((error) => rejectWithValue(error.toString()));

    return users;
  }
);

export const updateUserInfoAction = createAsyncThunk(
  "users/update-info",
  async (data, thunckAPI) => {
    const { rejectWithValue } = thunckAPI;
    const users = fetch(API_USER_URL, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .catch((error) => rejectWithValue(error.toString()));

    return users;
  }
);

const initialState = {
  users: [],
  isLoading: true,
  isError: false,
  isSent: false,
};
const userSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: {
    // GET ALL USERS
    [getUsersAction.pending]: (state, action) => {
      state.isLoading = true;
      state.isError = false;
    },
    [getUsersAction.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.users = action.payload;
    },
    [getUsersAction.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
    },
    [updateUserInfoAction.pending]: (state, action) => {
      state.isLoading = true;
      state.isSent = false;
      state.isError = false;
    },
    [updateUserInfoAction.fulfilled]: (state, action) => {
      state.isSent = true;
      state.users = action.payload;
    },
    [updateUserInfoAction.rejected]: (state, action) => {
      state.isSent = false;
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export default userSlice.reducer;
