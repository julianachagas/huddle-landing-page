import React from 'react';
import StyledBanner from './styles/Banner.styled';
import Button from './styles/Button.styled';
import Container from './styles/Container.styled';

function Banner() {
  return (
    <Container>
      <StyledBanner>
        <h2>Ready to build your community?</h2>
        <Button primary>Get started for free</Button>
      </StyledBanner>
    </Container>
  );
}

export default Banner;
