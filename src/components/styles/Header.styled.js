import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: transparent;
  position: absolute;
  top: 0;
  width: 100%;
  padding-block: 4.8rem;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: ${props => props.theme.mobile}) {
    padding-block: 3.2rem;

    img {
      width: 120px;
    }
  }
`;

export default StyledHeader;
