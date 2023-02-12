import React from 'react';
import Container from './styles/Container.styled';
import StyledSection from './styles/Section.styled';

function Section({ children }) {
  return (
    <StyledSection>
      <Container>{children}</Container>
    </StyledSection>
  );
}

export default Section;
