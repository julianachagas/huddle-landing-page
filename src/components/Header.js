import React from 'react';
import StyledHeader from './styles/Header.styled';
import Button from './styles/Button.styled';
import Container from './styles/Container.styled';

function Header() {
  return (
    <StyledHeader id="top">
      <Container>
        <a href="index.html">
          <img src="./assets/logo.svg" alt="Logo" />
        </a>
        <Button>Try It Free</Button>
      </Container>
    </StyledHeader>
  );
}

export default Header;
