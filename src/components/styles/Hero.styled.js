import styled from 'styled-components';

const StyledHero = styled.section`
  height: 90vh;
  background-color: ${({ theme }) => theme.colors.paleCyan};
  background-image: url('./assets/bg-hero-desktop.svg');
  background-size: cover;
  background-position: center;

  & > div {
    height: inherit;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
    padding-top: 16.4rem;
    align-items: center;
  }

  div > div {
    max-width: 50rem;
  }

  p {
    margin-block: 3.2rem;
  }

  @media (max-width: ${props => props.theme.mobile}) {
    text-align: center;
    height: 100rem;
    background-image: url('./assets/bg-hero-mobile.svg');

    & > div {
      padding-top: 7rem;
      grid-template-columns: 1fr;
      align-content: center;
    }

    div > div {
      margin: 0 auto;
    }
  }

  @media (max-width: 450px) {
    height: 90rem;
  }
`;

export default StyledHero;
