import styled from "styled-components";

const PictureBrowserWrapper = styled.div`
  position: fixed;
  z-index: 999;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #333;
  display: flex;
  flex-direction: column;
  .top {
    position: relative;
    height: 86px;
    display: flex;
    justify-content: flex-end;
    z-index: 99;
    .close-btn {
      padding: 16px 28px 8px;
      cursor: pointer;
    }
  }

  .slider {
    flex: 1;
    display: flex;
    justify-content: center;
    .control {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      display: flex;
      justify-content: space-between;
      color: #fff;
      .btn {
        width: 83px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }
    }

    .picture {
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;
      max-width: 105vh;
      img {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: 0 auto;
        width: 100%;
        height: 100%;
        user-select: none;
      }
    }
  }
  .preview {
    position: relative;
    height: 100px;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    .info {
      width: 100%;
      max-width: 105vh;
      position: absolute;
      bottom: 15px;
      /* display: flex;
      flex-direction: column;
      justify-content: center;   */

      .desc {
        display: flex;
        justify-content: space-between;
        color: #fff;
        font-size: 12px;

        .show-pic-list {
          position: relative;
          z-index: 99;
          cursor: pointer;
        }
      }

      .indicator {
        margin-top: 3px;
        transition: height 300ms ease;
        height: ${props=>props.isHide?"0":"67px"};
        /* height: 0; */
        /* height: 67px; */
        overflow: hidden;
        .item {
          margin-right: 15px;
          cursor: pointer;
          opacity: 0.5;
          img {
            height: 67px;
            /* height: 0; */
          }

          &.active {
            opacity: 1;
          }
        }
      }
    }
  }

  .pic-enter {
    opacity: 0;
    transform: translateX(${(props) => (props.isNext ? "100%" : "-100%")});
  }

  .pic-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: all 250ms ease;
  }
  .pic-exit {
    opacity: 1;
  }
  .pic-exit {
    opacity: 0;
  }
`;

export default PictureBrowserWrapper;
