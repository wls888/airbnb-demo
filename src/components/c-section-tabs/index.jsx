import React, { memo, useState } from 'react'
import PropTypes from "prop-types"
import SectionTabsWrapper from './style'
import classNames from 'classnames';
import ScrollView from '@/base-ui/scroll-view';

const CSectionTabs = memo((props) => {
  const { tabNames = [], tabClick } = props;
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleItemClick(item, index) {
    setCurrentIndex(index);
    tabClick(item);
  }


  return (
    <SectionTabsWrapper>
      <ScrollView>
        {
          tabNames.map((item, index) => {
            return (
              <div className={classNames("item", { active: index === currentIndex })} key={item} onClick={() => handleItemClick(item, index)}>{item}</div>
            )
          })
        }
      </ScrollView>

    </SectionTabsWrapper>
  )
})

CSectionTabs.propTypes = {
  tabNames: PropTypes.array,
  tabClick: PropTypes.func
}

export default CSectionTabs