import styled from "styled-components";
const ScrollViewWrapper=styled.div`
  position: relative;

  .scroll {
    overflow: hidden;
  }

  .control {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    background-color: #fff;
    border-radius: 50%;
    color: #767676;
    box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 2px;
    cursor: pointer;
    &.left {
      position: absolute;
      left: 0;
      top: 50%;
      transform: translate(-50%,-50%);
      z-index: 9;
    }
    &.right {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translate(50%,-50%);
      z-index: 9;
    }
  }

  .scroll-content {
    position: relative;
    display: flex;
    transition: transform 250ms ease;
  }
`

export default ScrollViewWrapper;