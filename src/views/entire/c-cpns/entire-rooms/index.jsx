import React, { memo } from 'react'
import PropTypes from "prop-types"
import EntireRoomsWrapper from './style'
import CRoomItem from '@/components/c-room-item';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeRoomInfoAction } from '@/store/modules/detail';
import { useCallback } from 'react';

const EntireRooms = memo((props) => {
  const { roomList, totalCount, isLoading } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleItemClick = useCallback((item) => {
    dispatch(changeRoomInfoAction(item));
    navigate("/detail");
  }, [dispatch, navigate]);

  return (
    <EntireRoomsWrapper>
      <div className="title">共{totalCount}多处住所</div>
      <div className="list">
        {
          roomList.map(item => <CRoomItem itemClick={() => handleItemClick(item)} itemWidth="20%" roomInfo={item} key={item._id} />)
        }
      </div>
      {isLoading && <div className='cover'></div>}

    </EntireRoomsWrapper>
  )
})

EntireRooms.propTypes = {
  roomList: PropTypes.array,
  totalCount: PropTypes.number,
  isLoading: PropTypes.bool
}

export default EntireRooms