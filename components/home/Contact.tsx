import React from 'react';
import styled from 'styled-components';
import Box from 'components/common/Container';

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    padding: 0;
  }
`;

const Link = styled.a``;

const Contact = () => {
  return (
    <Container>
      <h1>CONTACT ?</h1>
      <Link>Email</Link>
      <Link>Twitter</Link>
      <Link>Github</Link>
    </Container>
  );
};

export default Contact;
