import React, { memo } from 'react'
import PropTypes from 'prop-types';
import {Rating} from "@mui/material";
import RoomItemWrapper from './style'

const CRoomItem = memo((props) => {
  const { roomInfo,itemWidth="25%" } = props;

  return (
    <RoomItemWrapper itemWidth={itemWidth} verifyColor={roomInfo?.verify_info.text_color ?? "#767676"}>
      <div className="inner">
        <div className="cover">
          <img src={roomInfo.picture_url} alt="" />
        </div>
        <div className="desc">{roomInfo?.verify_info.messages.join(".")}</div>
        <div className="name">{roomInfo?.name}</div>
        <div className="price">￥{roomInfo?.price}/晚</div>
        <div className="bottom">
          <Rating
            value={roomInfo?.star_rating??0}
            readOnly
            precision={0.5}
            sx={{fontSize:'12px',color:'#00848A'}}
          />
          <span className="count">{roomInfo?.reviews_count}</span>
          <span className="extra">{roomInfo?.bottom_info?.content}</span>
        </div>
      </div>
    </RoomItemWrapper>

  )
})

CRoomItem.propTypes = {
  roomInfo: PropTypes.object,
  itemWidth:PropTypes.string
}

export default CRoomItem