import React from 'react';
import styled from 'styled-components';
import Box from 'components/common/Container';

const Bold = styled.span`
  font-weight: 600;
  transition: all 0.3s ease;
  color: #ffffff;
`;

const Frontend = styled.p``;

const Backend = styled.p``;

const Techstack = () => {
  return (
    <>
      <Box>
        <Frontend>
          I mainly work within the React ecosystem, but im eager to learn any
          other technology to solve problems. My current tech stack is{` `}
          <Bold>JavaScript</Bold>, <Bold>TypeScript</Bold>, <Bold>Next.js</Bold>
          {` `}& <Bold>Styled-Components</Bold>.{` `}
        </Frontend>
      </Box>

      <Box>
        <Backend>
          When my project needs a backend i use <Bold>Node js</Bold>,{` `}
          <Bold>Express</Bold>, <Bold>GraphQL</Bold>, & <Bold>Mongo DB</Bold>
          {` `}
          or a GraphQL based CMS like <Bold>Graphcms</Bold>.
        </Backend>
      </Box>
    </>
  );
};

export default Techstack;
