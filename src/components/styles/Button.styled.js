import styled, { css } from 'styled-components';

const Button = styled.button`
  border: none;
  border-radius: 50px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-weight: 700;
  font-size: 1.6rem;
  padding: 1.5rem 6rem;
  transition: all 0.3s ease-in-out;
  background-color: #fff;
  color: ${({ theme }) => theme.colors.darkCyan};
  text-transform: capitalize;
  &:hover {
    opacity: 0.8;
    transform: scale(0.98);
  }
  ${props =>
    props.primary &&
    css`
      color: #fff;
      background-color: ${({ theme }) => theme.colors.primary};
    `}

  @media (max-width: ${props => props.theme.mobile}) {
    ${props =>
      !props.primary &&
      css`
        padding: 0.8rem 2.4rem;
      `}
  }
`;

export default Button;
