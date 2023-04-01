import React, { memo } from 'react'
import PropTypes from "prop-types"
import CSectionHeader from '@/components/c-section-header'
import CSectionRooms from '@/components/c-section-rooms'
import HomeSectionV1Wrapper from './style'
import CSectionFooter from '@/components/c-section-footer'

const HomeSectionV1 = memo((props) => {
  const { infoData } = props;
  return (
    <HomeSectionV1Wrapper>
      <CSectionHeader title={infoData?.title} subTitle={infoData?.subtitle} />
      <CSectionRooms roomList={infoData?.list}></CSectionRooms>
      <CSectionFooter/>
    </HomeSectionV1Wrapper>
  )
})

HomeSectionV1.propTypes = {
  infoData: PropTypes.object
}


export default HomeSectionV1