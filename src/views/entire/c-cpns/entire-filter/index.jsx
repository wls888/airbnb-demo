import React, { memo, useState } from 'react'
import filterData from "@/assets/data/filter_data"
import EntireFilterWrapper from './style'
import classNames from 'classnames';

const EntireFilter = memo(() => {

  const [selectedItems,setSelectedItems]=useState([]);
  function handleItemClick(item){
    const newSelectedItems=[...selectedItems];
    if(newSelectedItems.includes(item)){
      const removeIndex=newSelectedItems.findIndex(filterItem=>filterItem===item);
      newSelectedItems.splice(removeIndex,1);
    } else {
      newSelectedItems.push(item);
    }
    setSelectedItems(newSelectedItems);
  }

  return (
    <EntireFilterWrapper>
      <div className="filter">
        {
          filterData.map((item)=>
          (<div onClick={()=>handleItemClick(item)} className={classNames('filter__item',{active:selectedItems.includes(item)})} key={item}>{item}</div>))
        }
      </div>
    </EntireFilterWrapper>
  )
})

export default EntireFilter