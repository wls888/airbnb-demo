import styled from "styled-components";
const IndicatorWrapper = styled.div`
  overflow: hidden;
  .list {
    display: flex;
    flex-wrap: nowrap;
    transition: transform 350ms ease;
    > * {
      flex-shrink: 0;
    }
  }
`;

export default IndicatorWrapper;
