import React from 'react';
import styled from 'styled-components';
import Box from '../common/Container';

const Kola = styled.span`
  font-weight: 700;
  transition: all 0.3s ease;
  color: #ffffff;
  text-decoration: underline;
`;

const About = () => {
  return (
    <Box>
      <p>
        Hello, {`I'm`} <Kola>Kola</Kola>. A Typescript Engineer with hands on
        experience in building client & server-side web applications using
        Typescript.
      </p>
    </Box>
  );
};

export default About;
