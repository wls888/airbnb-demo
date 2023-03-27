import IconSearch from '@/assets/svg/icon_search'
import React, { memo } from 'react'
import { HeaderCenterWrapper } from './style'

const CHeaderCenter = memo(() => {
  return (
    <HeaderCenterWrapper>
      <div className="search-bar">
        <span>搜索房源和体验</span>
        <div>
          <IconSearch/>
        </div>
      </div>
    </HeaderCenterWrapper>
  )
})

export default CHeaderCenter