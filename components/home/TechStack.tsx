import styled from 'styled-components';
import React from 'react';

const Header = styled.div`
  justify-content: space-between;
  color: #101010;
  text-align: center;
  border-top: solid 16px #101010;
  border-bottom: solid 16px #101010;
  padding-bottom: 48px;
  padding-top: 48px;

  h1 {
    font-size: 96px;
    font-weight: 900;
  }
`;

const Stack = styled.div`
  padding: 24px;
  height: 480px;
`;

const TechStack = () => {
  return (
    <>
      <Header>
        <h1>TECH STACK</h1>
      </Header>

      <Stack></Stack>
    </>
  );
};

export default TechStack;
