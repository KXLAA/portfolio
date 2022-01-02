import React, { useState } from 'react';
import styled from 'styled-components';
import Box from 'components/common/Container';

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const MetaContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
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

const Link = styled.a`
  transition: all 0.3s ease;

  &:hover {
    text-decoration: underline;
    color: #949494;
  }
`;

const PopUp = styled.div`
  background: #121212;
  transition: all 0.3s ease;
  border-radius: 8px;
  border: solid #222222 2px;
  position: absolute;
  width: 300px;
  right: 0px;
  bottom: 110px;

  a {
    font-weight: 500;
    display: block;
    padding: 16px;
    font-size: 1.2rem;
    border-bottom: solid #222222 1px;
    transition: all 0.3s ease;

    &:hover {
      background-color: #d4d4d4;
      color: #121212;
    }
  }

  a:first-child {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  a:last-child {
    border-bottom: none;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`;

const Contact = () => {
  const [state, setstate] = useState(false);

  const Indicator = styled.div`
    transition: all 0.3s ease;
    font-size: 5rem;
    color: ${state ? `white` : `#d4d4d4`};
    cursor: pointer;
  `;

  return (
    <>
      <div>
        <Heading>CONTACT</Heading>
        <MetaContainer>
          <Container>
            <Link
              href="mailto: kolade.afode@yahoo.com"
              target="_blank"
              rel="noreferrer"
            >
              Email
            </Link>
            <Link
              href="https://twitter.com/KXLAA_"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </Link>
            <Link
              href="https://github.com/KXLAA"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </Link>
          </Container>
          <div style={{ position: `relative` }}>
            {state && (
              <PopUp>
                <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
                  Built with Next.js
                </a>
                <a
                  href="https://kxlaa-v1.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Version 01
                </a>
                <a
                  href="https://github.com/KXLAA/portfolio"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Code
                </a>
              </PopUp>
            )}

            <Indicator onClick={() => setstate(!state)}>⌘</Indicator>
          </div>
        </MetaContainer>
      </div>
    </>
  );
};

export default Contact;
