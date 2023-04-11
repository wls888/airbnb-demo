import styled from "styled-components";
const RoomItemWrapper = styled.div`
  width: ${(props) => props.itemWidth};
  padding: 8px;
  flex-shrink: 0;
  cursor: pointer;

  .inner {
    .cover {
      position: relative;
      padding: 66.66% 8px 0;
      border-radius: 3px;
      overflow: hidden;
      img {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
      }
    }

    .slider {
      position: relative;
      &:hover {
        .control {
          display: block;
        }
      }

      .control {
        display: none;
        .btn {
          position: absolute;
          z-index: 99;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 25%;
          color: #fff;
          cursor: pointer;
          &.left {
            left: 0;
            top: 0;
            bottom: 0;
            background-image: linear-gradient(90deg,rgba(0,0,0,.35) 5%,rgba(0,0,0,0) 100%);
          }
          &.right {
            right: 0;
            top: 0;
            bottom: 0;
            background-image: linear-gradient(-90deg,rgba(0,0,0,.35) 5%,rgba(0,0,0,0) 100%);
          }
        }
      }

      .indicator {
        width: 30%;
        position: absolute;
        z-index: 99;
        left: 50%;
        transform: translateX(-50%);
        bottom: 10px;

        .dot__item {
          width: 14.285714%;
          text-align: center;
          .dot {
            display: inline-block;
            padding: 3px;
            border-radius: 50%;
            background-color: rgba(255, 255, 255, 0.6);
            &.active {
              background-color: rgba(255, 255, 255, 1);
              transform: scale(1.3);
            }
          }
        }
      }
    }

    .desc,
    .name,
    .price {
      margin-top: 8px;
    }
    .desc {
      font-size: 12px;
      color: ${(props) => props.verifyColor};
    }
    .name {
      font-weight: 600;
      -webkit-line-clamp: 1;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .price {
      font-size: 12px;
      font-weight: 500;
    }
    .bottom {
      display: flex;
      align-items: center;
      font-size: 10px;
      color: #222;
      height: 20px;
      line-height: 20px;
      font-weight: 600;

      .count {
        margin: 0 4px;
      }
    }
  }
`;

export default RoomItemWrapper;
