import React from 'react';
import styled from 'styled-components';
import Box from 'components/common/Container';

const Cv = styled.a`
  font-weight: 600;
  transition: all 0.3s ease;
  color: #ffffff;
`;

const About = () => {
  return (
    <Box>
      <p>
        Hello, {`I'm`} Kola. A Front-End Developer based in Lagos, Nigeria. I am
        passionate about creating accessible pixel-perfect user interfaces that
        scale. You can check out my CV <Cv href="/">here</Cv>.
      </p>
    </Box>
  );
};

export default About;
