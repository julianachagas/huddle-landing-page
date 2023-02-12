import styled from 'styled-components';

const StyledSection = styled.section`
  margin-block: 16rem;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-block: 10rem;
  }
`;

export default StyledSection;
