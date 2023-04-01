import React, { memo } from 'react'
import PropTypes from "prop-types"
import CLongforItemWrapper from './style'

const CLongforItem = memo((props) => {
  const { itemData = {} } = props;
  return (
    <CLongforItemWrapper>
      <div className="cover">
        <img src={itemData.picture_url} alt="" />
      </div>
      <div className="bg"></div>
      <div className="info">
        <div className="city">{itemData.city}</div>
        <div className="price">均价 {itemData.price}</div>
      </div>
      {itemData.city}
    </CLongforItemWrapper>
  )
})

CLongforItem.propTypes = {
  itemData: PropTypes.object
}

export default CLongforItem