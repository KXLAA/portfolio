import styled from 'styled-components';
import device from './MediaQueries';

const Box = styled.section`
  @media ${device.desktop} {
    font-weight: 400;
    font-size: 4rem;
    padding-bottom: 5rem;

    h1 {
      font-size: 3rem;
      padding-bottom: 1rem;
    }
  }

  @media ${device.laptop} {
    font-weight: 400;
    font-size: 2.5rem;
    padding-bottom: 5rem;

    h1 {
      font-size: 3rem;
      padding-bottom: 1rem;
    }
  }
`;

export default Box;
