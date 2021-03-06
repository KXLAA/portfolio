import styled from 'styled-components';
import device from './MediaQueries';

const Box = styled.section`
  @media ${device.desktop} {
    font-weight: 400;
    font-size: 4rem;
  }

  @media ${device.laptop} {
    font-weight: 400;
    font-size: 3rem;
  }

  @media ${device.tablet} {
    font-weight: 400;
    font-size: 2rem;
  }

  @media ${device.mobile} {
    font-weight: 400;
    font-size: 1.5rem;
  }
`;

export default Box;
