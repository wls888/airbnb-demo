import React, { memo, useCallback } from 'react'
import Pagination from '@mui/material/Pagination';
import PropTypes from "prop-types"
import EntirePaginationWrapper from './style'
import { useDispatch } from 'react-redux';
import { fetchEntireRoomListAction } from '@/store/modules/entire/actionCreators';

const EntirePagination = memo((props) => {
  const {currentPage,totalCount}=props;
  const pageSize=Math.ceil(totalCount/20)
  const startCount=(currentPage-1)*20+1;
  const endCount=currentPage*20;
  const dispatch=useDispatch();

  const handlePaginationClick=useCallback((_,pageNum)=>{
    window.scrollTo({left:0,top:0,behavior:"auto"})
    dispatch(fetchEntireRoomListAction(pageNum));
  },[dispatch])

  return (
    <EntirePaginationWrapper>
      <Pagination count={pageSize} color="activePagination" onChange={handlePaginationClick} />
      <div className='desc'>{`第${startCount}-${endCount}个房源，共超过${totalCount}个`}</div>
    </EntirePaginationWrapper>
  )
})

EntirePagination.propTypes={
  totalCount:PropTypes.number,
  currentPage:PropTypes.number
}

export default EntirePagination