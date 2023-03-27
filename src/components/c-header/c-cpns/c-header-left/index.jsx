import IconLogo from '@/assets/svg/icon_logo'
import React, { memo } from 'react'
import { HeaderLeftWrapper } from './style'

const CHeaderLeft = memo(() => {
  return (
    <HeaderLeftWrapper>
      <div className='logo'>
        <IconLogo />
      </div>
    </HeaderLeftWrapper>
  )
})

export default CHeaderLeft