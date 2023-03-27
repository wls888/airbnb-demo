import { getGoodPriceInfo } from "@/service";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getGoodPriceInfoCreateAction=createAsyncThunk("getGoodPriceInfoCreateAction",async (payload)=>{
  const res= await getGoodPriceInfo();
  return res;
})

const homeSlice=createSlice({
  name:"home",
  initialState:{
    goodPriceInfo:{}
  },
  reducers:{
    changeGoodPriceInfoAction(state,{payload}){
      state.goodPriceInfo=payload;
    }
  },
  extraReducers:(builder)=>{
    builder.addCase(getGoodPriceInfoCreateAction.fulfilled,(state,{payload})=>{
      state.goodPriceInfo=payload
    })
  }
})

export const {changeGoodPriceInfoAction}=homeSlice.actions;

export default homeSlice.reducer;