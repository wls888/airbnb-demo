import React, { memo } from 'react'
import PropTypes from "prop-types"
import HomeLongforWrapper from './style'
import CSectionHeader from '@/components/c-section-header';
import CLongforItem from '@/components/c-longfor-item';
import ScrollView from '@/base-ui/scroll-view';

const HomeLongfor = memo((props) => {
  const { infoData } = props;
  return (
    <HomeLongforWrapper>
      <CSectionHeader title={infoData?.title} subTitle={infoData?.subtitle} />
      <ScrollView>
        {
          infoData?.list?.map((item, index) => <CLongforItem itemData={item} key={index} />)
        }
      </ScrollView>
    </HomeLongforWrapper>
  )
})

HomeLongfor.propTypes = {
  infoData: PropTypes.object
}

export default HomeLongfor