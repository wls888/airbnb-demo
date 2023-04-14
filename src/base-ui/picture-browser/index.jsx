import IconCancel from '@/assets/svg/icon_cancel'
import PropTypes from 'prop-types'
import React, { memo, useEffect, useState } from 'react'
import PictureBrowserWrapper from './style'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import Indicator from '../indicator'
import classNames from 'classnames'
import IconTriangleBottom from '@/assets/svg/icon-triangle-bottom'
import IconTriangleTop from '@/assets/svg/icon-triangle-top'

const PictureBrowser = memo((props) => {
  const { handleCloseClick, pictureUrls = [] } = props;
  const [selectIndex, setSelectIndex] = useState(0);
  const [isNext, setIsNext] = useState(true);
  const [isHide,setIsHide]=useState(false);

  function handleControlClick(isRight) {
    let newIndex = isRight ? selectIndex + 1 : selectIndex - 1;
    if (newIndex < 0) newIndex = pictureUrls.length - 1;
    if (newIndex > pictureUrls.length - 1) newIndex = 0;
    setSelectIndex(newIndex);
    setIsNext(isRight);
  }

  function handleItemClick(index){
    setIsNext(index>selectIndex);
    setSelectIndex(index);
  }

  function close() {
    if (handleCloseClick) handleCloseClick()
  }

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    }
  }, [])

  return (
    <PictureBrowserWrapper isNext={isNext} isHide={isHide}>
      <div className="top">
        <div className="close-btn" onClick={close}>
          <IconCancel width="28px" height="28px" />
        </div>
      </div>
      <div className="slider">
        <div className="control">
          <div className="btn left" onClick={() => handleControlClick(false)}>
            <IconArrowLeft width="76" height="76" />
          </div>
          <div className="btn right" onClick={() => handleControlClick(true)}>
            <IconArrowRight width="76" height="76" />
          </div>
        </div>
        <div className="picture">
          <SwitchTransition mode='in-out' >
            <CSSTransition key={pictureUrls[selectIndex]} timeout={250} classNames="pic" unmountOnExit={true}>
              <img src={pictureUrls[selectIndex]} alt="" />
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
      <div className="preview">
        <div className="info">
          <div className="desc">
            <div className='count'>{selectIndex + 1}/{pictureUrls.length}: room Apartment图片{selectIndex + 1}</div>
            <div className="show-pic-list" onClick={()=>setIsHide(!isHide)}>
              <span>{isHide?'显示':'隐藏'}图片列表</span>
              {isHide?<IconTriangleTop/>:<IconTriangleBottom/>}
            </div>
          </div>
          <div className="indicator">
            <Indicator selectIndex={selectIndex}>
              {
                pictureUrls.map((item, index) => {
                  return (
                    <div onClick={()=>handleItemClick(index)} className={classNames("item", { active: selectIndex === index })} key={item}>
                      <img src={item} alt='' />
                    </div>
                  )
                })
              }
            </Indicator>
          </div>
        </div>

      </div>

    </PictureBrowserWrapper>
  )
})

PictureBrowser.propTypes = {
  pictureUrls: PropTypes.array
}

export default PictureBrowser