import { getRoomListInfo } from "@/service/modules/entire";
import { createAsyncThunk } from "@reduxjs/toolkit";
import * as actionTypes from "./constant";

export const fetchEntireRoomListAction = createAsyncThunk(
  "fetchEntireRoomListAction",
  async (pageNum = 1, { dispatch }) => {
    dispatch(changeCurrentPageAction(pageNum));
    dispatch(changeIsLoadingAction(true));
    const { list, totalCount } = await getRoomListInfo((pageNum - 1) * 20);
    dispatch(changeIsLoadingAction(false));
    dispatch(changeRoomListAction(list));
    dispatch(changeTotalCountAction(totalCount));
  }
);

export function changeRoomListAction(roomList) {
  return {
    type: actionTypes.CHANGE_ROOM_LIST,
    roomList,
  };
}

export function changeTotalCountAction(totalCount) {
  return {
    type: actionTypes.CHANGE_TOTAL_COUNT,
    totalCount,
  };
}

export function changeCurrentPageAction(currentPage) {
  return {
    type: actionTypes.CHANGE_CURRENT_PAGE,
    currentPage,
  };
}

export function changeIsLoadingAction(isLoading){
  return {
    type:actionTypes.CHANGE_IS_LOADING,
    isLoading
  }
}
