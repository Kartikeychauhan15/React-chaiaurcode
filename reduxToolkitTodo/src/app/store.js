import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";
// import { useSelector } from "react-redux";


export const store = configureStore({
    reducer: todoReducer
})

