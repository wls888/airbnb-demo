import IconGlobal from '@/assets/svg/icon_global'
import IconMenu from '@/assets/svg/icon_menu'
import IconUser from '@/assets/svg/icon_user'
import React, { memo, useEffect, useState } from 'react'
import { HeaderRightWrapper } from './style'

const CHeaderRight = memo(() => {
  const [showPanel,setShowPanel]= useState(false);

  function panelVisiable(){
    setShowPanel(true);
  }
  function panelHidden(){
    setShowPanel(false);
  }

  useEffect(()=>{
    window.addEventListener("click",panelHidden,true);
    return ()=>{
      window.removeEventListener("click",panelHidden,true);
    }
  },[]);

  return (
    <HeaderRightWrapper>
      <div className="btn">
        <span>登录</span>
        <span>注册</span>
        <span>
          <IconGlobal />
        </span>
      </div>
      <div className="profile" onClick={panelVisiable}>
        <span>
          <IconMenu />
        </span>
        <span>
          <IconUser />
        </span>
        {showPanel&&<div className="panel">
          <div className="top">
            <div className="panel__item">注册</div>
            <div className="panel__item">登录</div>
          </div>
          <div className="bottom">
            <div className="panel__item">出租房源</div>
            <div className="panel__item">开展体验</div>
            <div className="panel__item">帮助</div>
          </div>
        </div>}
        
      </div>
    </HeaderRightWrapper>
  )
})

export default CHeaderRight