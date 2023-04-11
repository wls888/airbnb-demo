import React, { memo } from 'react'
import PropTypes from "prop-types"
import HomeSectionV3Wrapper from './style'
import CSectionHeader from '@/components/c-section-header';
import CRoomItem from '@/components/c-room-item';
import ScrollView from '@/base-ui/scroll-view';

const HomeSectionV3 = memo((props) => {
  const { infoData } = props;
  return (
    <HomeSectionV3Wrapper>
      <CSectionHeader title={infoData?.title} subTitle={infoData?.subtitle} />
      <div className="rooms">
        <ScrollView>
          {
            infoData?.list?.map(item => <CRoomItem roomInfo={item} itemWidth="20%" key={item.id} />)
          }
        </ScrollView>
      </div>


    </HomeSectionV3Wrapper>
  )
})

HomeSectionV3.propTypes = {
  infoData: PropTypes.object
}

export default HomeSectionV3