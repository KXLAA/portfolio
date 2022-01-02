import React from 'react';
import styled from 'styled-components';
import device from '../common/MediaQueries';
import { Tag } from 'components/common/Button';
import { projectData } from './projectData';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem;
`;

const Project = styled.div`
  background: #121212;
  transition: all 0.3s ease;
  border-radius: 8px;
  border: solid #222222 4px;
  display: flex;
  flex-direction: column;
  -webkit-box-shadow: 3px 4px 15px -8px rgba(0, 0, 0, 0.71);
  box-shadow: 3px 4px 15px -8px rgba(0, 0, 0, 0.71);

  &:hover {
    transform: translateX(0rem) translateY(-0.3125rem);
  }

  a {
    color: white;
    font-size: 4rem;
    font-weight: 700;
    transition: all 0.3s ease;

    &:hover {
      text-decoration: underline;
      color: #949494;
    }
  }

  @media ${device.laptop} {
    a {
      font-size: 2.8rem;
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

  div {
    font-size: 2rem;
    color: #ffffff;
  }
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
  padding: 2rem;
  padding-bottom: 2rem;

  p {
    font-size: 1.4rem;
  }
`;

const Tech = styled.div`
  font-weight: 700;
  display: flex;
  gap: 1rem;
  font-size: 16px;

  @media ${device.laptop} {
    font-size: 12.5px;
    display: flex;
  }
`;

const Projects = () => {
  return (
    <section>
      <Heading>SELECTED PROJECTS</Heading>

      <Container>
        {projectData.map(
          ({ title, url, description, videoMp4, videoWebm, tech, poster }) => (
            <Project key={title}>
              <Indicator>
                <div>⌘</div>
              </Indicator>

              <a href={url} target="_blank" rel="noreferrer">
                <video autoPlay loop muted poster={poster}>
                  <source src={videoWebm} type="video/webm" />
                  <source src={videoMp4} type="video/mp4" />
                </video>
              </a>

              <Description>
                <a href={url} target="_blank" rel="noreferrer">
                  {title}
                </a>

                <Tech>
                  {tech.map((stack) => (
                    <Tag key={stack}>{stack}</Tag>
                  ))}
                </Tech>

                <p>{description}</p>
              </Description>
            </Project>
          ),
        )}
      </Container>
    </section>
  );
};

export default Projects;
