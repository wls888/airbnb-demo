import IconLogo from '@/assets/svg/icon_logo'
import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { HeaderLeftWrapper } from './style'

const CHeaderLeft = memo(() => {
  const navigate=useNavigate();

  function handleLogoClick(){
    navigate("/home")
  }

  return (
    <HeaderLeftWrapper>
      <div className='logo' onClick={handleLogoClick}>
        <IconLogo />
      </div>
    </HeaderLeftWrapper>
  )
})

export default CHeaderLeft