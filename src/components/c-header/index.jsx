import React, { memo } from 'react'
import CHeaderCenter from './c-cpns/c-header-center'
import CHeaderLeft from './c-cpns/c-header-left'
import CHeaderRight from './c-cpns/c-header-right'
import { HeaderWrapper } from './style'

const CHeader = memo(() => {
  return (
    <HeaderWrapper>
      <CHeaderLeft/>
      <CHeaderCenter/>
      <CHeaderRight/>
    </HeaderWrapper>
  )
})

export default CHeader