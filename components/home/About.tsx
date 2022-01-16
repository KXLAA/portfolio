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
        Hello, {`I'm`} <Kola>Kola</Kola>. A Front-End Developer with hands on
        experience in building accessible & pixel-perfect web applications that
        scale. You can check out my CV{` `}
        <Cv
          href="https://ucarecdn.com/3c9d098c-d2b8-460e-b080-ec174324caab/Kolade_cv.pdf"
          target="_blank"
        >
          here
        </Cv>
        .
      </p>
    </Box>
  );
};

export default About;
