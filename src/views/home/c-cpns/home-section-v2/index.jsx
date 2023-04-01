import React, { memo, useCallback, useState } from 'react'
import PropTypes from "prop-types";
import CSectionHeader from '@/components/c-section-header'
import CSectionRooms from '@/components/c-section-rooms'
import CSectionTabs from '@/components/c-section-tabs'
import HomeSectionV2Wrapper from './style'
import CSectionFooter from '@/components/c-section-footer';

const HomeSectionV2 = memo((props) => {
  const { infoData } = props;
  const tabNames = infoData.dest_address?.map(item => item.name);
  tabNames.push("abc","cba","ade","dea");
  const initialTabName = Object.keys(infoData.dest_list??{})[0]??"";
  const [currentTabName, setCurrentTabName] = useState(initialTabName);
  const tabClick = useCallback(function (item) {
    setCurrentTabName(item);
  }, [])

  return (
    <HomeSectionV2Wrapper>

      <CSectionHeader title={infoData.title} subTitle={infoData.subtitle} />
      <CSectionTabs tabNames={tabNames} tabClick={tabClick} />
      <CSectionRooms roomList={infoData.dest_list?.[currentTabName]} itemWidth="33.333333%" />
      <CSectionFooter name={currentTabName}/>
    </HomeSectionV2Wrapper>
  )
})
HomeSectionV2.propTypes = {
  infoData: PropTypes.object
}

export default HomeSectionV2