import styled from 'styled-components';

const StyledCard = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 4rem 0;
  padding: 4rem 6rem;
  justify-content: space-between;
  gap: 15%;

  div:last-child {
    width: 40%;
  }

  div:first-child {
    flex: 1;
  }

  p {
    color: ${({ theme }) => theme.colors.grayishBlue};
    margin-top: 1.6rem;
  }

  &:nth-child(even) {
    flex-direction: row-reverse;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    gap: 5rem;
    text-align: center;
    padding: 4rem 2.5rem;

    &,
    &:nth-child(even) {
      flex-direction: column-reverse;
    }

    div:last-child {
      width: 100%;
    }
  }
`;

export default StyledCard;
