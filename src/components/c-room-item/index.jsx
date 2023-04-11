import React, { memo } from 'react'
import PropTypes from 'prop-types';
import { Rating } from "@mui/material";
import { Carousel } from 'antd';
import RoomItemWrapper from './style'
import { useRef } from 'react';
import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';
import Indicator from '@/base-ui/indicator';
import { useState } from 'react';
import classNames from 'classnames';

const CRoomItem = memo((props) => {
  const { roomInfo, itemWidth = "25%",itemClick } = props;
  const [selectIndex, setSelectIndex] = useState(0);
  const carouselRef = useRef();

  const sliderElement = (
    <div className="slider">
      <div className="control">
        <div className='btn left' onClick={(e) => handleControlClick(false,e)}>
          <IconArrowLeft width="30" height="30" />
        </div>
        <div className='btn right' onClick={(e) => handleControlClick(true,e)}>
          <IconArrowRight width="30" height="30" />
        </div>
      </div>
      <Carousel dots={false} ref={carouselRef}>
        {
          roomInfo.picture_urls?.map((item, index) => {
            return (<div className="cover" key={index}>
              <img src={item} alt="" />
            </div>)
          })
        }
      </Carousel>
      <div className="indicator">
        <Indicator selectIndex={selectIndex}>
          {
            roomInfo.picture_urls?.map((item, index) => (<div className='dot__item' key={index}>
              <span className={classNames("dot", { active: index === selectIndex })}></span>
            </div>))
          }
        </Indicator>
      </div>
    </div>
  )

  const pictureElement = (
    <div className="cover">
      <img src={roomInfo.picture_url} alt="" />
    </div>
  )

  function handleControlClick(isRight,event) {
    event.stopPropagation();
    isRight ? carouselRef.current.next() : carouselRef.current.prev();
    let newIndex = isRight ? selectIndex + 1 : selectIndex - 1;
    if (newIndex < 0) {
      newIndex = roomInfo.picture_urls.length - 1;
    }
    if (newIndex > roomInfo.picture_urls.length - 1) {
      newIndex = 0;
    }
    setSelectIndex(newIndex);
  }

  function handleItemClick(){
    if(itemClick) itemClick();
  }

  return (
    <RoomItemWrapper onClick={handleItemClick} itemWidth={itemWidth} verifyColor={roomInfo?.verify_info.text_color ?? "#767676"}>
      <div className="inner">
        {
          roomInfo?.picture_urls ? sliderElement : pictureElement
        }


        <div className="desc">{roomInfo?.verify_info.messages.join(".")}</div>
        <div className="name">{roomInfo?.name}</div>
        <div className="price">￥{roomInfo?.price}/晚</div>
        <div className="bottom">
          <Rating
            value={roomInfo?.star_rating ?? 0}
            readOnly
            precision={0.5}
            sx={{ fontSize: '12px', color: '#00848A' }}
          />
          <span className="count">{roomInfo?.reviews_count}</span>
          <span className="extra">{roomInfo?.bottom_info?.content}</span>
        </div>
      </div>
    </RoomItemWrapper >

  )
})

CRoomItem.propTypes = {
  roomInfo: PropTypes.object,
  itemWidth: PropTypes.string,
  itemClick:PropTypes.func
}

export default CRoomItem