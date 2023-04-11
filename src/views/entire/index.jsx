import { fetchEntireRoomListAction } from '@/store/modules/entire/actionCreators'
import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import EntireFilter from './c-cpns/entire-filter'
import EntirePagination from './c-cpns/entire-pagination'
import EntireRooms from './c-cpns/entire-rooms'
import { EntireWrapper } from './style'

const Entire = memo(() => {
  const dispatch = useDispatch();
  const { roomList, totalCount, isLoading,currentPage } = useSelector(state => ({ roomList: state.entire.roomList, totalCount: state.entire.totalCount, isLoading: state.entire.isLoading,currentPage:state.entire.currentPage }), shallowEqual)

  useEffect(() => {
    dispatch(fetchEntireRoomListAction())
  }, [dispatch])

  return (
    <EntireWrapper>
      <EntireFilter />
      <EntireRooms roomList={roomList} totalCount={totalCount} isLoading={isLoading} />
      <EntirePagination totalCount={totalCount} currentPage={currentPage} />
    </EntireWrapper>
  )
})

export default Entire