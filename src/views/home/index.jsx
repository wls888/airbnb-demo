import { fetchHomeDataThunk } from '@/store/modules/home'
import { isNotEmptyObject } from '@/utils/is-not-empty-object'
import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import HomeBanner from './c-cpns/home-banner'
import HomeLongfor from './c-cpns/home-longfor'
import HomeSectionV1 from './c-cpns/home-section-v1'
import HomeSectionV2 from './c-cpns/home-section-v2'
import HomeSectionV3 from './c-cpns/home-section-v3'
import { HomeWrapper } from './style'

const Home = memo(() => {
  const { goodPriceInfo, highScoreInfo, discountInfo, hotRecommendInfo, longforInfo, plusInfo } = useSelector(state => ({ goodPriceInfo: state.home.goodPriceInfo, highScoreInfo: state.home.highScoreInfo, discountInfo: state.home.discountInfo, hotRecommendInfo: state.home.hotRecommendInfo, longforInfo: state.home.longforInfo, plusInfo: state.home.plusInfo }), shallowEqual);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeDataThunk());
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        {isNotEmptyObject(plusInfo) && <HomeSectionV3 infoData={plusInfo} />}
        {isNotEmptyObject(discountInfo) && <HomeSectionV2 infoData={discountInfo} />}
        {isNotEmptyObject(hotRecommendInfo) && <HomeSectionV2 infoData={hotRecommendInfo} />}
        {isNotEmptyObject(longforInfo) && <HomeLongfor infoData={longforInfo} />}
        {isNotEmptyObject(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo} />}
        {isNotEmptyObject(highScoreInfo) && <HomeSectionV1 infoData={highScoreInfo} />}
      </div>
    </HomeWrapper>

  )
})

export default Home