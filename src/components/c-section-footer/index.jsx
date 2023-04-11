import IconArrowRight from '@/assets/svg/icon-arrow-right'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import SectionFooterWrapper from './style'

const CSectionFooter = memo((props) => {
  const {name}=props;
  const navigate= useNavigate();

  let showMessage="显示全部";
  if(name){
    showMessage=`查看更多${name}房源`;
  }

  function handleMoreClick(){
    navigate("/entire");
  }

  return (
    <SectionFooterWrapper color={name?"#00848A":"#000"}>
      <div className="view-more" onClick={handleMoreClick}>
        <span>{showMessage}</span>
        <IconArrowRight/>
      </div>
    </SectionFooterWrapper>
  )
})

CSectionFooter.propTypes={
  name:PropTypes.string
}

export default CSectionFooter