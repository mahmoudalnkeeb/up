import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./userSlice";
import postsReducer from "./postSlice";
import appReducer from "./appSlice";

const store = configureStore({
  reducer: {
    app: appReducer,
    users: usersReducer,
    posts: postsReducer,
  },
});

export default store;
