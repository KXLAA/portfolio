import styled from 'styled-components';
import device from './MediaQueries';

export const LayoutStyled = styled.main`
  max-width: 1940px;
  margin: 0 auto;
  padding: 4rem;
  padding-top: 7rem;
  padding-bottom: 7rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;

  @media ${device.tablet} {
    padding: 3rem;
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  @media ${device.mobile} {
    padding: 1.2rem;
    padding-top: 4rem;
    padding-bottom: 4rem;
    gap: 2rem;
  }
`;

const Layout = ({ children }: React.PropsWithChildren<Record<never, any>>) => {
  return <LayoutStyled>{children}</LayoutStyled>;
};

export default Layout;
