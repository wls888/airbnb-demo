import styled from "styled-components";

const DetailPicturesWrapper = styled.div`
  position: relative;
  .pictures {
    height: 550px;
    display: flex;
    cursor: pointer;

    .left {
      flex: 1;
      height: 100%;
      .item {
        overflow: hidden;
        position: relative;
        height: 100%;
        transition: all 300ms ease;
        > img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 250ms ease;
        }
        .cover {
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          z-index: 9;
          background-color: rgba(0, 0, 0, 0.2);
        }

        &:hover .cover {
          visibility: hidden;
        }
        &:hover > img {
          transform: scale(1.2);
        }
      }
    }

    .right {
      flex: 1;
      flex-shrink: 0;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      .item {
        overflow: hidden;
        position: relative;
        width: 50%;
        height: 275px;
        > img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 300ms ease;
        }
        .cover {
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          z-index: 9;
          background-color: rgba(0, 0, 0, 0.2);
        }

        &:hover .cover {
          visibility: hidden;
        }
        &:hover > img {
          transform: scale(1.2);
        }
      }
    }
  }

  .show-btn {
    position: absolute;
    right: 15px;
    bottom:15px;
    padding:6px 12px;
    background: #fff;
    z-index:99;
    border-radius:3px;
    cursor: pointer;
  }
`;

export default DetailPicturesWrapper;
