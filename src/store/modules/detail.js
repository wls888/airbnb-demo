import { createSlice } from "@reduxjs/toolkit";

const detailSlice = createSlice({
  name: "detail",
  initialState: {
    roomInfo: {},
  },
  reducers: {
    changeRoomInfoAction(state, { payload }) {
      state.roomInfo = payload;
    },
  },
});

export default detailSlice.reducer;

export const { changeRoomInfoAction } = detailSlice.actions;
