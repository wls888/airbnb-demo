import CSectionHeader from '@/components/c-section-header'
import CSectionRooms from '@/components/c-section-rooms'
import { getGoodPriceInfoCreateAction } from '@/store/modules/home'
import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import HomeBanner from './c-cpns/home-banner'
import { HomeWrapper } from './style'

const Home = memo(() => {
  const { goodPriceInfo } = useSelector(state => ({ goodPriceInfo: state.home.goodPriceInfo }), shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGoodPriceInfoCreateAction());
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        <div className="good-price">
          <CSectionHeader title={goodPriceInfo?.title} subTitle={'来看看这些受好评的房源吧'} />
          <CSectionRooms roomList={goodPriceInfo?.list}></CSectionRooms>
        </div>
      </div>
    </HomeWrapper>

  )
})

export default Home