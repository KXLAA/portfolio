import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Button } from 'components/common/Button';
import { BsArrowUpRightCircleFill } from 'react-icons/bs';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  color: #ffffff;
  padding: 24px;
  background-color: #101010;
  padding-bottom: 48px;
`;

const Logo = styled.h1`
  font-size: 148px;
  font-weight: 900;
`;

const Nav = styled.nav`
  display: flex;
  gap: 32px;
  font-size: 36px;
  font-weight: 900;
`;

const Description = styled.div`
  padding: 24px;
  font-size: 48px;
  font-weight: 900;
`;

const CtaContainer = styled.div`
  border-top: solid 16px;
  background: #ff9900;
  padding: 80px 24px;
  display: flex;
  gap: 64px;
  justify-content: flex-end;
`;

const Arrow = styled(BsArrowUpRightCircleFill)``;

const Header = () => {
  return (
    <header>
      <Container>
        <Logo>KOLA </Logo>
        <Nav>
          <Link href={`/`}>PROJECTS</Link>
          <Link href={`/`}>ABOUT</Link>
          <Link href={`/`}>CONTACT</Link>
        </Nav>
      </Container>
      <Description>
        A FRONT END DEVELOPER OBSESSED WITH CREATING ACCESSIBLE & RESPONSIVE
        USER INTERFACES.
      </Description>
      <CtaContainer>
        <Button>GITHUB</Button>
        <Button>RESUME</Button>
      </CtaContainer>
    </header>
  );
};

export default Header;
