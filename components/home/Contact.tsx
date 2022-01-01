import React from 'react';
import styled from 'styled-components';
import Box from 'components/common/Container';

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
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

const Link = styled.a``;

const Contact = () => {
  return (
    <div>
      <Heading>CONTACT ?</Heading>
      <Container>
        <Link>Email</Link>
        <Link>Twitter</Link>
        <Link>Github</Link>
      </Container>
    </div>
  );
};

export default Contact;
