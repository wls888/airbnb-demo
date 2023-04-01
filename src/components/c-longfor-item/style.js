import styled from "styled-components";
const CLongforItemWrapper=styled.div`
  /* white-space: nowrap; */
  position: relative;
  flex-basis: 210px;
  height: 260px;
  margin-right: 20px;
  flex-shrink: 0;
  overflow: hidden;

  .cover {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
    }
  }

  .bg {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 60%;
    background-image: linear-gradient(-180deg,rgba(0,0,0,0) 3%,rgba(0,0,0) 100%);
  }

  .info {
    white-space: nowrap;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 50%;
    bottom: 35px;
    transform: translate(-50%);
    z-index: 99;
    color: #fff;
    line-height: 1.5;
    .city {
      font-size: 16px;
      font-weight: 600;
    }
    .price {
      font-size: 12px;
    }
  }

  &:last-of-type {
    margin-right: 0;
  }

`

export default CLongforItemWrapper