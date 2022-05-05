import React, { useState } from 'react';
import styled from 'styled-components';
import Box from '../common/Container';
import device from '../common/MediaQueries';
import { Heading } from './Projects';

const ContactLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const MetaContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const Link = styled.a`
  transition: all 0.3s ease;

  &:hover {
    text-decoration: underline;
    color: #949494;
  }
`;

const PopUpContainer = styled.div`
  position: relative;
  @media ${device.mobile} {
    display: none;
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

  const Indicator = styled.button`
    transition: all 0.3s ease;
    font-size: 5rem;
    color: ${state ? `white` : `#d4d4d4`};
    cursor: pointer;
    background: none;
    border: none;
  `;

  return (
    <>
      <Box>
        <Heading>CONTACT</Heading>
        <MetaContainer>
          <ContactLinks>
            <Link
              href="mailto: kolade.afode@yahoo.com"
              target="_blank"
              rel="noreferrer"
              data-splitbee-event="External Link"
              data-splitbee-event-destination="email"
            >
              Email
            </Link>
            <Link
              href="https://twitter.com/KXLAA_"
              target="_blank"
              rel="noreferrer"
              data-splitbee-event="External Link"
              data-splitbee-event-destination="twitter"
            >
              Twitter
            </Link>
            <Link
              href="https://github.com/KXLAA"
              target="_blank"
              rel="noreferrer"
              data-splitbee-event="External Link"
              data-splitbee-event-destination="github"
            >
              Github
            </Link>

            <Link
              href="https://www.linkedin.com/in/kxlaa/"
              target="_blank"
              rel="noreferrer"
              data-splitbee-event="External Link"
              data-splitbee-event-destination="linkedin"
            >
              Linkedin
            </Link>
          </ContactLinks>
          <PopUpContainer>
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

            <Indicator type="button" onClick={() => setstate(!state)}>
              ⌘
            </Indicator>
          </PopUpContainer>
        </MetaContainer>
      </Box>
    </>
  );
};

export default Contact;
