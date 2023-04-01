import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';
import React, { memo, useState } from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import ScrollViewWrapper from './style'

const ScrollView = memo((props) => {
  const [showRight, setShowRight] = useState(false);
  const [showLeft, setShowLeft] = useState(false);
  const positionIndex = useRef(0);
  const scrollContentRef = useRef();
  const totalDistanceRef = useRef();

  function handleControlClick(isRight) {
    const newIndex = isRight ? positionIndex.current + 1 : positionIndex.current - 1;
    const offsetLeft = scrollContentRef.current.children[newIndex].offsetLeft;
    scrollContentRef.current.style = `transform:translateX(-${offsetLeft}px)`;
    positionIndex.current = newIndex;
    setShowRight(offsetLeft < totalDistanceRef.current);
    setShowLeft(offsetLeft > 0);
  }

  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth;
    const clientWidth = scrollContentRef.current.clientWidth;
    const totalDistance = scrollWidth - clientWidth;
    setShowRight(totalDistance > 0);
    totalDistanceRef.current = totalDistance;
  }, [props.children])


  return (
    <ScrollViewWrapper>
      <div className='scroll'>
        {showLeft && (
          <div className='control left' onClick={() => handleControlClick(false)}>
            <IconArrowLeft />
          </div>
        )}
        {showRight && (
          <div className='control right' onClick={() => handleControlClick(true)}>
            <IconArrowRight />
          </div>
        )}
        <div className='scroll-content' ref={scrollContentRef}>
          {props.children}
        </div>
      </div>

    </ScrollViewWrapper>
  )
})

export default ScrollView