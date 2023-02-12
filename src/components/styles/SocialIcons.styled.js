import styled from 'styled-components';

const StyledSocialIcons = styled.ul`
  display: flex;
  gap: 2.5rem;

  li {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid currentColor;
    transition: all 0.3s ease-in-out;
  }

  a {
    font-size: 2rem;
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
  }

  li:hover {
    transform: translateY(3px);
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    justify-content: center;
    margin-top: 3rem;
  }
`;

export default StyledSocialIcons;
