import styled from "styled-components";
const SectionFooterWrapper = styled.div`
  margin-top: 10px;
  .view-more {
    display: flex;
    align-items: center;
    font-weight: 700;
    color: ${props=>props.color};
    font-size: 17px;
    cursor: pointer;
    &:hover span{
      text-decoration: underline;
    }
    span {
      margin-right: 2px;
    }
  }
`;

export default SectionFooterWrapper;
