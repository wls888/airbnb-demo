import styled from "styled-components";

export const HeaderRightWrapper=styled.div`
  flex: 1;
  flex-shrink: 0;
  display: flex;
  justify-content: flex-end;
  color: ${props=>props.theme.font.primaryColor};
  .btn {
    display: flex;
    align-items: center;
    span {
      padding: 10px 15px;
      font-weight: 600;
      border-radius: 25px;
      font-size: 14px;
      cursor: pointer;
      &:hover {
        background-color: rgb(247,247,247);
      }
    }
  }
  .profile {
    position: relative;
    display: flex;
    align-items: center;
    border: 1px solid ${props=>props.theme.border.primaryColor};
    margin-left: 15px;
    padding: 4px 10px;
    border-radius: 30px;
    cursor: pointer;
    span:last-of-type {
      width: 30px;
      margin-left: 10px;
    }
    ${props=>props.theme.mixins.boxShadowAnimate}

    .panel {
      position: absolute;
      right: 0;
      top: 50px;
      width: 240px;
      border-radius: 15px;
      box-shadow: 0 0 12px  rgba(0,0,0,.2);
      background-color: #fff;
      .top {
        border-bottom: 1px solid ${props=>props.theme.border.primaryColor};
      }
      .top,.bottom {
        .panel__item {
          height: 48px;
          line-height: 48px;
          padding-left: 25px;
          &:hover {
            background-color: rgb(247,247,247);
          }
        }
      }
    }
  }
`