import {configureStore} from "@reduxjs/toolkit";
import authSlice from "./authSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    //todo: add more slice here for posts
    // post: postSlice------
    // your reducers go here
  }
});
export default store;