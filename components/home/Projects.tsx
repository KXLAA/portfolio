import React from 'react';
import styled from 'styled-components';
import Box from 'components/common/Container';
import device from '../common/MediaQueries';

const Project = styled.div`
  padding-bottom: 5rem;

  @media ${device.desktop} {
    a {
      color: yellow;
      font-size: 4rem;
      font-weight: 700;
    }
  }

  @media ${device.laptop} {
    a {
      color: yellow;
      font-size: 3rem;
      font-weight: 700;
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
      font-size: 2rem;
      display: flex;
      gap: 8px;
    }
  }

  @media ${device.laptop} {
    p {
      font-size: 1.5rem;
      display: flex;
      gap: 8px;
    }
  }
`;

const Divider = styled.span`
  font-weight: 700;
  color: yellow;

  @media ${device.desktop} {
    font-size: 3rem;
  }

  @media ${device.laptop} {
    font-size: 2rem;
  }
`;

const Projects = () => {
  return (
    <Box>
      <h1>SELECTED PROJECTS</h1>

      <Project>
        <a href="https://www.nartefacts.com/" target="_blank" rel="noreferrer">
          Nartefacts
        </a>
        <Tech>
          <p>Mongo DB</p>
          <Divider>*</Divider>
          <p>GraphQL</p>
          <Divider>*</Divider>
          <p>Javascript</p>
          <Divider>*</Divider>
          <p>Next.js</p>
          <Divider>*</Divider>
          <p>Styled-Components</p>
        </Tech>
        <p>
          A full stack application that provides color inspirations for
          designers with a twist, the colours are based on african album covers.
          Users can like color pallets & thier likes are saved to local storage.
        </p>
      </Project>

      <Project>
        <a
          href="https://www.devportfolios.dev/"
          target="_blank"
          rel="noreferrer"
        >
          Dev Portfolios
        </a>
        <Tech>
          <p>GraphCMS</p>
          <Divider>*</Divider>
          <p>GraphQL</p>
          <Divider>*</Divider>
          <p>Typescript</p>
          <Divider>*</Divider>
          <p>Next.js</p>
          <Divider>*</Divider>
          <p>Styled-Components</p>
        </Tech>
        <p>
          A full stack application that curates the best software developer
          {`portfolio's`} on the internet. There are currenlty more than 50
          {`portfolio's`} featured.
        </p>
      </Project>

      <Project>
        <a
          href="https://product-feedback-fem.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          Product Feedback App
        </a>
        <Tech>
          <p>Mongo DB</p>
          <Divider>*</Divider>
          <p>Node.js & Express</p>
          <Divider>*</Divider>
          <p>Javascript</p>
          <Divider>*</Divider>
          <p>React</p>
          <Divider>*</Divider>
          <p>Styled-Components</p>
        </Tech>
        <p>
          Demo of a full stack app that allows users to create, edit and delete
          feedback
        </p>
      </Project>

      <Project>
        <a
          href="https://product-feedback-fem.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          Front End Cardio
        </a>
        <Tech>
          <p>GraphCMS</p>
          <Divider>*</Divider>
          <p>GraphQL</p>
          <Divider>*</Divider>
          <p>Typescript</p>
          <Divider>*</Divider>
          <p>Next.js</p>
          <Divider>*</Divider>
          <p>Styled-Components</p>
        </Tech>
        <p>
          A full stack application that provides color inspirations for
          designers with a twist, the colours are based on african album covers.
          Users can like color pallets & thier likes are saved to local storage
        </p>
      </Project>
    </Box>
  );
};

export default Projects;
