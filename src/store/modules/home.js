import {
  getDiscountData,
  getGoodPriceInfo,
  getHighScoreData,
  getHotRecommendData,
  getLongforData,
} from "@/service";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchHomeDataThunk = createAsyncThunk(
  "fetchHomeDataThunk",
  async (_, { getState, dispatch }) => {
    getGoodPriceInfo().then((res) => {
      dispatch(changeGoodPriceInfoAction(res));
    });
    getHighScoreData().then((res) => {
      dispatch(changeHighScoreInfoAction(res));
    });

    getDiscountData().then((res) => {
      dispatch(changeDiscountInfoAction(res));
    });

    getHotRecommendData().then((res) => {
      dispatch(changeHotRecommendInfoAction(res));
    });

    getLongforData().then(res=>{
      dispatch(changeLongforInfoAction(res));
    })
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
    hotRecommendInfo: {},
    longforInfo:{}
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload;
    },
    changeHighScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload;
    },
    changeDiscountInfoAction(state, { payload }) {
      state.discountInfo = payload;
    },
    changeHotRecommendInfoAction(state, { payload }) {
      state.hotRecommendInfo = payload;
    },
    changeLongforInfoAction(state,{payload}){
      state.longforInfo=payload;
    }
  },
  extraReducers: (builder) => {
    // builder.addCase(fetchHomeDataThunk.fulfilled,(state,{payload})=>{
    //   state.goodPriceInfo=payload
    // })
  },
});

export const {
  changeGoodPriceInfoAction,
  changeHighScoreInfoAction,
  changeDiscountInfoAction,
  changeHotRecommendInfoAction,
  changeLongforInfoAction
} = homeSlice.actions;

export default homeSlice.reducer;
