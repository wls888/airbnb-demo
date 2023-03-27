import styled from "styled-components";

export const FooterWrapper=styled.div`
  border-top: 1px solid ${props=>props.theme.border.primaryColor};
  margin-top: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .footer-content {
    width: 1032px;
    display: flex;
    border-bottom: 1px solid ${props=>props.theme.border.primaryColor};
    padding: 20px 0 30px;
    .footer-content__item {
      flex: 1;

      .item-list__item {
        color: #b0b0b0;
        line-height: 1.5;
      }

    }
  }
  .copyright {
    color: #b0b0b0;
    font-size: 12px;
    margin: 20px 0 60px;
  }
`