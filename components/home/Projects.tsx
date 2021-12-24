import styled from 'styled-components';
import React from 'react';
import Link from 'next/link';

const Header = styled.div`
  justify-content: space-between;
  background: #101010;
  color: #ffffff;
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

const Content = styled.div`
  padding: 24px;
  background: #ff9900;
  text-align: center;

  a {
    font-weight: 900;
    font-size: 96px;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
`;

const Card = styled.div`
  width: 100%;
  border: 16px solid #000000;
  background-color: #000000;
`;

const Bar = styled.div`
  background: #ffffff;
  border-bottom: 16px solid #000000;
  padding: 8px;
  display: flex;
  justify-content: flex-end;
`;

const Status = styled.div`
  border: 4px solid #000000;
  background: #ff9900;
  width: 40px;
  height: 40px;
  border-radius: 100%;
`;

const Demo = styled.div`
  img {
    height: 380px;
    width: 100%;
  }
`;

const Description = styled.div`
  height: 380px;
`;

const Projects = () => {
  return (
    <>
      <Header>
        <h1>PROJECTS</h1>
      </Header>

      <Content>
        <Container>
          <Card>
            <Bar>
              <Status />
            </Bar>

            <Description />

            <Demo></Demo>
          </Card>
          <Card>
            <Bar>
              <Status />
            </Bar>

            <Description />

            <Demo></Demo>
          </Card>
          <Card>
            <Bar>
              <Status />
            </Bar>

            <Description />

            <Demo></Demo>
          </Card>
          <Card>
            <Bar>
              <Status />
            </Bar>

            <Description />

            <Demo></Demo>
          </Card>
        </Container>
        <Link href={`/`}> VIEW ALL </Link>
      </Content>
    </>
  );
};

export default Projects;
