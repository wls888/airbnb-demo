import styled from "styled-components";
const RoomItemWrapper = styled.div`
  width: ${props=>props.itemWidth};
  padding: 8px;

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
      font-size:10px;
      color:#767676;
      height: 20px;
      line-height: 20px;

      .count {
        margin:  0 4px;
      }
    }
  }
`;

export default RoomItemWrapper;
