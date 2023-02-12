import styled from 'styled-components';

const StyledBanner = styled.div`
  max-width: 70rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  padding: 6rem;
  margin: 0 auto;
  border-radius: 20px;
  text-align: center;
  background-color: #fff;

  h2 {
    margin-bottom: 3rem;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 6rem 2rem;
  }
`;

export default StyledBanner;
