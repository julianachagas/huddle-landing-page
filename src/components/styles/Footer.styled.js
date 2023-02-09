import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.darkCyan};
  padding-block: 10rem 5rem;
  position: relative;
  color: ${({ theme }) => theme.colors.paleCyan};
  font-size: 1.6rem;

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: -9rem;
    height: 9rem;
    background-color: inherit;
    z-index: -1;
    width: 100%;
  }

  div > div {
    display: flex;
    margin-block: 5rem;
    gap: 7%;
  }

  li {
    margin-bottom: 2rem;
  }

  ul {
    flex: 1;
  }

  ul:first-child {
    flex: 3;
    li {
      display: flex;
      align-items: center;
      gap: 2.5rem;
      &:first-child img {
        align-self: flex-start;
        position: relative;
        top: 0.5rem;
      }
    }
  }

  p {
    text-align: right;
    font-size: 1.4rem;
  }

  a:hover {
    text-decoration: underline;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    div > div {
      flex-direction: column;
      gap: initial;
      margin-block: 3rem 1rem;
    }

    ul:first-child {
      flex: 1;
      margin-bottom: 3rem;
    }

    p {
      text-align: center;
    }
  }
`;

export default StyledFooter;
