import styled from 'styled-components';

export const LayoutStyled = styled.main`
  max-width: 1500px;
  width: 100%;
  border: solid #101010 16px;
  margin: 0 auto;
`;

const Layout = ({ children }: React.PropsWithChildren<Record<never, any>>) => {
  return <LayoutStyled>{children}</LayoutStyled>;
};

export default Layout;
