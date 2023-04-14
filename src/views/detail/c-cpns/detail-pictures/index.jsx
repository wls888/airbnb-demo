import PictureBrowser from '@/base-ui/picture-browser';
import React, { memo, useState } from 'react'
import { shallowEqual, useSelector } from 'react-redux';
import DetailPicturesWrapper from './style'

const DetailPictures = memo(() => {
  const { roomInfo } = useSelector(state => ({
    roomInfo: state.detail.roomInfo
  }), shallowEqual)
  const [showBrowser,setShowBrowser]=useState(false);


  return (
    <DetailPicturesWrapper>
      <div className="pictures">
        <div className="left">
          <div className="item" onClick={()=>setShowBrowser(true)}>
            <img src={roomInfo.picture_urls?.[0]} alt="" />
            <div className="cover"></div>
          </div>
        </div>
        <div className="right">
          {
            roomInfo.picture_urls?.slice(1, 5).map((item, index) => {
              return (
                <div className="item" key={index}>
                  <img src={item} alt="" />
                  <div className="cover"></div>
                </div>
              )
            })
          }

        </div>
      </div>
      <div className="show-btn" onClick={()=>setShowBrowser(true)}>查看图片</div>
      {showBrowser&&<PictureBrowser pictureUrls={roomInfo.picture_urls} handleCloseClick={()=>setShowBrowser(false)} />}
    </DetailPicturesWrapper>
  )
})


export default DetailPictures