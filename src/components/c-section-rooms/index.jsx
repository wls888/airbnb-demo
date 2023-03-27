import React, { memo } from 'react'
import PropTypes from "prop-types";
import SectionRoomsWrapper from './style'
import CRoomItem from '../c-room-item'

const CSectionRooms = memo((props) => {
  const { roomList = [] } = props;
  return (
    <SectionRoomsWrapper>
      {roomList.slice(0, 8).map((item) => {
        return (
          <CRoomItem roomInfo={item} key={item.id} />
        )
      })}
    </SectionRoomsWrapper>
  )
})

CSectionRooms.propTypes = {
  roomList: PropTypes.array
}

export default CSectionRooms