import React, { memo } from 'react'
import { DetailWrapper } from './style'

const Detail = memo(() => {
  return (
    <DetailWrapper>
      <div className="pictures"></div>
      <div className="info"></div>
    </DetailWrapper>
  )
})

export default Detail