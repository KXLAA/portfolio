import React from 'react';
import styled from 'styled-components';
import Box from 'components/common/Container';

const Bold = styled.span`
  border-bottom: solid 4px yellow;
  font-weight: 700;
  transition: all 0.3s ease;

  &:hover {
    border-color: #39ff14;
  }
`;

const Frontend = styled.p`
  padding-bottom: 3rem;
`;

const Backend = styled.p``;

const Techstack = () => {
  return (
    <Box>
      <Frontend>
        I mainly work within the React ecosystem, but im eager to learn any
        other technology to solve problems. My current tech stack is{` `}
        <Bold>JavaScript</Bold>, <Bold>TypeScript</Bold>, <Bold>Next.js</Bold>
        {` `}& <Bold>Styled-Components</Bold>.{` `}
      </Frontend>
      <Backend>
        When my project needs a backend i use <Bold>Node js</Bold>,{` `}
        <Bold>Express</Bold>, <Bold>Graph QL</Bold>, & <Bold>Mongo DB</Bold>.
        {` `}
      </Backend>
    </Box>
  );
};

export default Techstack;
