import React from 'react';
import StyledCard from './styles/Card.styled';

function Card({ title, text, image }) {
  return (
    <StyledCard>
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div>
        <img src={`./assets/${image}`} alt="" />
      </div>
    </StyledCard>
  );
}

export default Card;
