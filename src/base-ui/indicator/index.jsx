import React, { memo, useRef } from 'react'
import PropTypes from "prop-types"
import IndicatorWrapper from './style'
import { useEffect } from 'react';

const Indicator = memo((props) => {
  const {selectIndex=0}=props;
  const indicatorRef=useRef();

  useEffect(()=>{
    const ele=indicatorRef.current.children[selectIndex];
    const offsetLeft=ele.offsetLeft;
    const clientWidth=ele.clientWidth;
    const contentWidth=indicatorRef.current.clientWidth;
    const contentScroll=indicatorRef.current.scrollWidth;
    let distance=offsetLeft+clientWidth/2-contentWidth/2;
    if(distance<0) distance=0;
    let totalDistance=contentScroll-contentWidth;
    if(distance>totalDistance) distance=totalDistance;
    indicatorRef.current.style=`transform:translateX(-${distance}px)`;

  },[selectIndex])

  return (
    <IndicatorWrapper>
      <div className="list" ref={indicatorRef}>
        {props.children}
      </div>
    </IndicatorWrapper>
  )
})

Indicator.propTypes={
  selectIndex:PropTypes.number
}

export default Indicator