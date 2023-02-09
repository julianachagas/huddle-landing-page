import React from 'react';
import SocialIcons from './SocialIcons';
import Container from './styles/Container.styled';
import StyledFooter from './styles/Footer.styled';

function Footer() {
  return (
    <StyledFooter>
      <Container>
        <img src="./assets/logo-footer.svg" alt="" />
        <div>
          <ul>
            <li>
              <img src="./assets/icon-location.svg" alt="" />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae aliquid minima impedit eos fuga reiciendis corporis
            </li>
            <li>
              <img src="./assets/icon-phone.svg" alt="" />
              1-543-123-4567
            </li>
            <li>
              <img src="./assets/icon-email.svg" alt="" />
              example@huddle.com
            </li>
          </ul>
          <ul>
            <li>
              <a href="#top">About us</a>
            </li>
            <li>
              <a href="#top">What we do</a>
            </li>
            <li>
              <a href="#top">FAQ</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#top">Career</a>
            </li>
            <li>
              <a href="#top">Blog</a>
            </li>
            <li>
              <a href="#top">Contact </a>
            </li>
          </ul>
          <SocialIcons />
        </div>
        <p>&copy; Copyright 2023 Huddle. All rights reserved.</p>
      </Container>
    </StyledFooter>
  );
}

export default Footer;
