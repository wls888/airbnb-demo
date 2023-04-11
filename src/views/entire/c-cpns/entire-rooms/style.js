import styled from "styled-components";

const EntireRoomsWrapper = styled.div`
  position: relative;
  padding: 40px 20px;
  .title {
    font-size: 22px;
    font-weight: 700;
    color: #222;
  }
  .list {
    display: flex;
    flex-wrap: wrap;
  }
  > .cover {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 99;
    background-color: rgba(255,255,255,.8);
  }
`;

export default EntireRoomsWrapper;
