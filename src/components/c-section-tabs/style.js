import styled from "styled-components";
const SectionTabsWrapper=styled.div`
  /* margin-left: -6px; */
  margin-bottom: 15px;
  .item {
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 14px;
    padding: 14px 16px;
    font-size: 17px;
    white-space: nowrap;
    flex-basis: 120px;
    flex-shrink: 0;
    height: 48px;
    border: 1px solid ${props=>props.theme.border.primaryColor};
    cursor: pointer;

    &:last-of-type {
      margin-right: 0;
    }

    &.active {
      color: #fff;
      background-color: ${props=>props.theme.color.secondaryColor}
    }
  }
`

export default SectionTabsWrapper;