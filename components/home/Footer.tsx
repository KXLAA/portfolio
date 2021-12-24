import React from 'react';
import styled from 'styled-components';

const FooterStyled = styled.footer`
  justify-content: space-between;
  background: #101010;
  color: #ffffff;
  padding: 24px;
  border-top: solid 16px #101010;
  border-bottom: solid 16px #101010;
  padding-bottom: 48px;
  padding-top: 48px;

  h1 {
    font-size: 96px;
    font-weight: 900;
  }
`;

const Footer = () => {
  return (
    <FooterStyled>
      <h1>KOLA</h1>
    </FooterStyled>
  );
};

export default Footer;
