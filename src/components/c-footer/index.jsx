import React, { memo } from 'react'
import { FooterWrapper } from './style'
import footerData from "@/assets/data/footer";

const CFooter = memo(() => {
  return (
    <FooterWrapper>
      <div className="footer-content">
        {
          footerData.map((item) => {
            return (
              <div className="footer-content__item" key={item.name}>
                <h4 className="name" style={{marginBottom:"12px"}}>{item.name}</h4>
                <div className="item-list">
                  {item.list.map(subItem => {
                    return (
                      <div className="item-list__item" key={subItem}>{subItem}</div>

                    )
                  })}

                </div>
              </div>
            )
          })
        }
      </div>
      <div className="copyright">
        © 2023 Airbnb, Inc. All rights reserved.·条款·隐私政策·网站地图·全国旅游投诉渠道 12301
      </div>
    </FooterWrapper>
  )
})

export default CFooter