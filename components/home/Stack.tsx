import React from 'react';
import styled from 'styled-components';
import Box from '../../components/common/Container';

const Bold = styled.span`
  font-weight: 600;
  transition: all 0.3s ease;
  color: #ffffff;
  &:hover {
    color: ${(props) => props.color};
  }
`;

const Frontend = styled.p``;

const Backend = styled.p``;

const Stack = () => {
  return (
    <>
      <Box>
        <Frontend>
          I mainly work within the React ecosystem, but {`I'm`} always eager to
          learn new technologies. My current tech stack is{` `}
          <Bold color="#f7df1e ">JavaScript</Bold>,{` `}
          <Bold color="#007ACC">TypeScript</Bold>,{` `}
          <Bold>Next.js</Bold>
          {` `}& <Bold color="#D78CA3">Styled-Components</Bold>.{` `}
        </Frontend>
      </Box>

      <Box>
        <Backend>
          When my project needs a backend I use{` `}
          <Bold color="#699E5B">Node js</Bold>,{` `}
          <Bold color="#949494">Express</Bold>,{` `}
          <Bold color="#DC5EB7">GraphQL</Bold>, &{` `}
          <Bold color="#4DB36A">Mongo DB</Bold>
          {` `}
          or a GraphQL based CMS like <Bold>Graphcms</Bold>.
        </Backend>
      </Box>
    </>
  );
};

export default Stack;
