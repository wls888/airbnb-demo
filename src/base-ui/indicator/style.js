import styled from "styled-components";
const IndicatorWrapper = styled.div`
  overflow: hidden;
  .indicator-list {
    display: flex;
    flex-wrap: nowrap;
    transition: transform 250ms ease;
    > * {
      flex-shrink: 0;
    }
  }
`;

export default IndicatorWrapper;
