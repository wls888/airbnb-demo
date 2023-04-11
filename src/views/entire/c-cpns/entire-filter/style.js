import styled from "styled-components";

const EntireFilterWrapper = styled.div`
  position: sticky;
  left: 0;
  right: 0;
  top: 0;
  z-index: 99;
  display: flex;
  align-items: center;
  height: 48px;
  padding-left: 20px;
  border-bottom: 1px solid #f2f2f2;
  background-color: #fff;
  .filter {
    display: flex;
    &__item {
      padding: 6px 12px;
      border: 1px solid #dce0e8;
      margin-right: 10px;
      color: #484848;
      border-radius: 4px;
      cursor: pointer;
      &:last-of-type {
        margin-right: 0;
      }

      &.active {
        background: #008489;
        border: 1px solid #008489;
        color: #fff;
      }
    }
  }
`;

export default EntireFilterWrapper;
