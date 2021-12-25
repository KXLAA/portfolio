import React from 'react';
import styled from 'styled-components';
import Box from 'components/common/Container';

const Brutalist = styled.a`
  background-color: yellow;
  color: #101010;
  padding: 4px;
  font-weight: 700;
  transition: all 0.3s ease;

  &:hover {
    background-color: #39ff14;
  }
`;

const Cv = styled.a`
  border-bottom: solid 4px yellow;
  font-weight: 700;
`;

const About = () => {
  return (
    <Box>
      <p>
        Hello, {`I'm`} Kola. A Front-End Developer based in Lagos, Nigeria. I
        love
        {` `}
        <Brutalist href="https://brutalistwebsites.com/" target="_blank">
          brutalist
        </Brutalist>
        {` `}
        design and, I am passionate about creating accessible pixel-perfect user
        interfaces that scale. You can check out my CV <Cv href="/">here</Cv>.
      </p>
    </Box>
  );
};

export default About;
