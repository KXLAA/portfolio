import React from 'react';
import styled from 'styled-components';
import Box from 'components/common/Container';
import device from '../common/MediaQueries';
import { Tag } from 'components/common/Button';

const Container = styled(Box)`
  gap: 4rem;
  display: flex;
  flex-direction: column;
`;

const Heading = styled.h1`
  margin-bottom: 1.5rem;
  font-size: 2.5rem;
  color: #ffff;
  padding: 4px 16px;
  border-radius: 8px;
  background-color: #222222;
  width: fit-content;
`;

const Project = styled.div`
  padding-bottom: 5rem;
  background: #121212;
  border-radius: 8px;
  padding: 2rem;
  border: solid #222222 4px;
  display: flex;
  gap: 24px;

  p {
    font-size: 1.6rem;
  }

  @media ${device.desktop} {
    a {
      color: white;
      font-size: 4rem;
      font-weight: 700;
    }
  }

  @media ${device.laptop} {
    a {
      display: block;
      color: white;
      font-size: 2.8rem;
      font-weight: 700;
      width: fit-content;
    }
  }
`;

const Tech = styled.div`
  font-weight: 700;
  display: flex;
  gap: 16px;
  align-items: center;
  justify-items: center;

  @media ${device.desktop} {
    p {
      font-size: 10px;
      display: flex;
      gap: 8px;
    }
  }

  @media ${device.laptop} {
    p {
      font-size: 16px;
      display: flex;
      gap: 8px;
    }
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Img = styled.img`
  border-radius: 8px;
  width: 250px;
  aspect-ratio: 1/1;
`;

const PlaceHolder = styled.div`
  border-radius: 8px;
  width: 600px;
  aspect-ratio: 1/1;
  background-color: #222222;
`;

const Projects = () => {
  return (
    <div>
      <Heading>SELECTED PROJECTS</Heading>

      <Container>
        <Project>
          <PlaceHolder />

          <Description>
            <a
              href="https://www.nartefacts.com/"
              target="_blank"
              rel="noreferrer"
            >
              Nartefacts
            </a>

            <Tech>
              <Tag>Mongo DB</Tag>
              <Tag>GraphQL</Tag>
              <Tag>Javascript</Tag>
              <Tag>Next.js</Tag>
              <Tag>Styled-Components</Tag>
            </Tech>

            <p>
              A full stack application that provides color inspirations for
              designers with a twist, the colours are based on african album
              covers. Users can like color pallets & thier likes are saved to
              local storage.
            </p>
          </Description>
        </Project>

        <Project>
          <PlaceHolder />

          <Description>
            <a
              href="https://www.devportfolios.dev/"
              target="_blank"
              rel="noreferrer"
            >
              Dev Portfolios
            </a>

            <Tech>
              <Tag>GraphCMS</Tag>
              <Tag>GraphQL</Tag>
              <Tag>Typescript</Tag>
              <Tag>Next.js</Tag>
              <Tag>Styled-Components</Tag>
            </Tech>

            <p>
              A full stack application that provides color inspirations for
              designers with a twist, the colours are based on african album
              covers. Users can like color pallets & thier likes are saved to
              local storage.
            </p>

            {/* <p>
              A full stack application that curates the best software developer
              {`portfolio's`} on the internet. There are currenlty more than 50
              {`portfolio's`} featured.
            </p> */}
          </Description>
        </Project>

        <Project>
          <PlaceHolder />

          <Description>
            <a
              href="https://product-feedback-fem.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              Feedback App
            </a>

            <Tech>
              <Tag>Mongo DB</Tag>
              <Tag>Node.js</Tag>
              <Tag>Express</Tag>
              <Tag>Javascript</Tag>
              <Tag>React</Tag>
              <Tag>Styled-Components</Tag>
            </Tech>

            <p>
              A full stack application that provides color inspirations for
              designers with a twist, the colours are based on african album
              covers. Users can like color pallets & thier likes are saved to
              local storage.
            </p>

            {/* <p>
              Demo of a full stack app that allows users to create, edit and
              delete feedback
            </p> */}
          </Description>
        </Project>

        <Project>
          <PlaceHolder />

          <Description>
            <a
              href="https://product-feedback-fem.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              Front End Cardio
            </a>

            <Tech>
              <Tag>GraphCMS</Tag>
              <Tag>GraphQL</Tag>
              <Tag>Typescript</Tag>
              <Tag>Next.js</Tag>
              <Tag>Styled-Components</Tag>
            </Tech>

            <p>
              A full stack application that provides color inspirations for
              designers with a twist, the colours are based on african album
              covers. Users can like color pallets & thier likes are saved to
              local storage.
            </p>

            {/* <p>
              Demo of a full stack app that allows users to create, edit and
              delete feedback
            </p> */}
          </Description>
        </Project>
      </Container>
    </div>
  );
};

export default Projects;
