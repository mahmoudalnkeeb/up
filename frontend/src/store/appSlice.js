import { createSlice } from "@reduxjs/toolkit";

const initialvalue = {
  toggleSidebar: true,
  pageDirection: "ltr",
  showComments: false,
  showMore: false,
  userName: "",
  userImage: "",
};
const appSlice = createSlice({
  name: "app",
  initialState: initialvalue,
  reducers: {
    TOGGLE_SIDEBAR: (state) => {
      state.toggleSidebar = !state.toggleSidebar;
    },
    PAGE_DIRECTION: (state, action) => {
      state.pageDirection = action.payload;
    },
    SET_USER: (state, action) => {
      state.userName = action.payload.name;
      state.userImage = action.payload.image;
    },
    TOGGLE_COMMENTS: (state, action) => {
      state.showComments = !state.showComments;
    },
    TOGGLE_SHOWMORE: (state, action) => {
      state.showMore = !state.showMore;
    },
  },
});

export const {
  TOGGLE_SIDEBAR,
  PAGE_DIRECTION,
  SET_USER,
  TOGGLE_COMMENTS,
  TOGGLE_SHOWMORE,
} = appSlice.actions;

export default appSlice.reducer;
