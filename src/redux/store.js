import { configureStore } from "@reduxjs/toolkit";
import { AdminActionReducer } from "./slice/adminSlice";

export const AdminStore =configureStore({
    reducer : AdminActionReducer
})


