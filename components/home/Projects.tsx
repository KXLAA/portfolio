import React from 'react';
import styled from 'styled-components';
import device from '../common/MediaQueries';
import { Tag } from 'components/common/Button';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5rem;
`;

const Project = styled.div`
  background: #121212;
  border-radius: 8px;
  border: solid #222222 4px;
  display: flex;
  flex-direction: column;

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

const Indicator = styled.div`
  height: 30px;
  width: 100%;
  background-color: #222222;
  display: flex;
  align-items: center;
  padding: 24px;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  color: #ffff;
  padding: 4px 16px;
  border-radius: 8px;
  background-color: #222222;
  width: fit-content;
  margin-bottom: 1.5rem;
`;

const Circle = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  background-color: white;
  border-radius: 100%;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 24px;
  padding-bottom: 5rem;

  p {
    font-size: 1.6rem;
  }

  p {
    @media ${device.desktop} {
      font-weight: 400;
      font-size: 2.5rem;
    }
  }
`;

const Tech = styled.div`
  font-weight: 700;
  display: flex;
  gap: 16px;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  overflow-x: auto;
  scroll-snap-type: x;
  -ms-overflow-style: none;
  scrollbar-width: none;
  padding: 0 1.5rem;
  -webkit-overflow-scrolling: touch;
  margin: 0 -1rem;
  &::-webkit-scrollbar {
    display: none;
  }
  margin-bottom: 0.5rem;

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

const Projects = () => {
  return (
    <div>
      <Heading>SELECTED PROJECTS</Heading>

      <Container>
        <Project>
          <Indicator>
            <Circle />
          </Indicator>

          <video autoPlay loop muted>
            <source src="/Untitled.webm" type="video/webm" />
            <source src="/Untitled.mp4" type="video/mp4" />
          </video>

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
              A full-stack application that provides colour pallette
              inspirations for designers & developers. The colour palettes are
              inspired by the vibrant colours of African album covers. Users can
              like colour pallets & their likes are saved to local storage. The
              like count on each colour pallette is persisted in a Mongo DB
              database.
            </p>
          </Description>
        </Project>

        <Project>
          <Indicator>
            <Circle />
          </Indicator>

          <video autoPlay loop muted>
            <source src="/Untitled.webm" type="video/webm" />
            <source src="/Untitled.mp4" type="video/mp4" />
          </video>

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
              A website that curates the most beautiful developer portfolios on
              the web for inspiration. I built Devportfolios after looking for
              targeted inspiration to build this portfolio. I wanted a design
              inspiration site more targeted towards software developer
              {``}
              {`portfolio's`} but I {`couldn't`} find any so Devportfolios was
              born.
            </p>
          </Description>
        </Project>

        <Project>
          <Indicator>
            <Circle />
          </Indicator>

          <video autoPlay loop muted>
            <source src="/Untitled.webm" type="video/webm" />
            <source src="/Untitled.mp4" type="video/mp4" />
          </video>

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
              A full-stack application that allows users to create, update and
              delete feedback suggestions. The design was provided by frontend
              mentor. It was originally meant to be a frontend build but I added
              Node js & express backend which communicated with a MongoDB
              database with a REST API. I also Included authentication.
            </p>
          </Description>
        </Project>

        <Project>
          <Indicator>
            <Circle />
          </Indicator>

          <video autoPlay loop muted>
            <source src="/Untitled.webm" type="video/webm" />
            <source src="/Untitled.mp4" type="video/mp4" />
          </video>

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
              As part of my self-learning, I completed a lot of challenges and
              tutorial projects. Front end cardio is a collection of some of the
              best of these projects & challenges, there are currently 15
              projects in the collection created with a range of different
              technologies. You can view the live demos and the accompanying
              source code of all projects listed.
            </p>
          </Description>
        </Project>
      </Container>
    </div>
  );
};

export default Projects;
