import React from 'react';
import styled from 'styled-components';
import Box from '../../components/common/Container';

type BoldProps = {
  hover?: string;
};

const Bold = styled.span<BoldProps>`
  font-weight: 600;
  transition: all 0.3s ease;
  color: #ffffff;
  &:hover {
    color: ${({ hover }) => hover};
  }
`;

const Frontend = styled.p``;

const Backend = styled.p``;

const Stack = () => {
  return (
    <>
      <Box>
        <Frontend>
          I mainly work within the <Bold>React</Bold> ecosystem, but {`I'm`}
          {` `}
          always learning new technologies. My current tech stack is{` `}
          <Bold hover="#f7df1e ">JavaScript</Bold>,{` `}
          <Bold hover="#007ACC">TypeScript</Bold>,{` `}
          <Bold hover="#575757">Next.js</Bold>
          {` `}& <Bold hover="#D78CA3">Styled-Components</Bold>.{` `}
        </Frontend>
      </Box>

      <Box>
        <Backend>
          When a project needs a backend I use{` `}
          <Bold hover="#699E5B">Node js</Bold>,{` `}
          <Bold hover="#949494">Express</Bold>,{` `}
          <Bold hover="#DC5EB7">GraphQL</Bold>, &{` `}
          <Bold hover="#4DB36A">Mongo DB</Bold>
          {` `}
          or a GraphQL based CMS like <Bold hover="#adaaaa">Graphcms</Bold>.
        </Backend>
      </Box>
    </>
  );
};

export default Stack;
