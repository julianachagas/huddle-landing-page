import React from 'react';
import StyledHero from './styles/Hero.styled';
import Button from './styles/Button.styled';
import Container from './styles/Container.styled';

function Hero() {
  return (
    <StyledHero>
      <Container>
        <div>
          <h1>Build the comunity your fans will love</h1>
          <p>
            Hiddle re-assets the way we build comunities. You have a voice, but
            so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>
          <Button primary>Get Started For Free</Button>
        </div>
        <img src="./assets/illustration-mockups.svg" alt="" />
      </Container>
    </StyledHero>
  );
}

export default Hero;
