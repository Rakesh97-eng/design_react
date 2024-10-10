import { createSlice } from "@reduxjs/toolkit";

export const AdminSlice = createSlice({
  name: "Admin",
  initialState: {
    processData:[],
  },
  reducers: {
  
    getProcessDataReducer:(state,{payload})=>{
        const { apiData, isLoading = false } = payload;
        state.ecommerceDetails =apiData;
    }
  },
});

export const { getProcessDataReducer } = AdminSlice.actions;
export const AdminDetails = (state) => state;
export const AdminActionReducer = AdminSlice.reducer;
