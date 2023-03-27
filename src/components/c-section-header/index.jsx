import React, { memo } from 'react'
import PropTypes from 'prop-types';
import SeactionHeaderWrapper from './style'

const CSectionHeader = memo((props) => {
  const {title,subTitle}=props;

  return (
    <SeactionHeaderWrapper>
      <h2 className='title'>{title}</h2>
      <div className='sub-title'>{subTitle}</div>
    </SeactionHeaderWrapper>
  )
})

CSectionHeader.propTypes={
  title:PropTypes.string,
  subTitle:PropTypes.string
}

export default CSectionHeader