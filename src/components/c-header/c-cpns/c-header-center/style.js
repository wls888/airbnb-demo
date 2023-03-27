import styled from "styled-components";

export const HeaderCenterWrapper=styled.div`
  width: 300px;
  height: 48px;
  .search-bar {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid ${props=>props.theme.border.primaryColor};
    border-radius: 25px;
    padding: 0 6px 0 15px;
    cursor: pointer;
    ${props=>props.theme.mixins.boxShadowAnimate}

    div {
      color: #fff;
      width: 32px;
      height: 32px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${props=>props.theme.color.primaryColor};
      border-radius: 50%;
    }
  }
`