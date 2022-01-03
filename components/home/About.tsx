import React from 'react';
import styled from 'styled-components';
import Box from '../../components/common/Container';

const Cv = styled.a`
  font-weight: 600;
  transition: all 0.3s ease;
  color: #ffffff;
  transition: all 0.3s ease;

  &:hover {
    text-decoration: underline;
    color: #949494;
  }
`;

const About = () => {
  return (
    <Box>
      <p>
        Hello, {`I'm`} Kola. A Front-End Developer based in Lagos, Nigeria. I am
        passionate about creating accessible & pixel-perfect user interfaces
        that scale. You can check out my CV
        <Cv
          href="https://ucarecdn.com/8e9b0c07-78c8-4dd4-a85d-3488ba3968b6/KOLADEAFODECV.pdf"
          target="_blank"
        >
          {` `}here
        </Cv>
        .
      </p>
    </Box>
  );
};

export default About;
