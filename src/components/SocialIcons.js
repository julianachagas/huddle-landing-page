import React from 'react';
import StyledSocialIcons from './styles/SocialIcons.styled';
import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';

function SocialIcons() {
  return (
    <StyledSocialIcons>
      <li>
        <a href="#top">
          <FaFacebookF />
        </a>
      </li>
      <li>
        <a href="#top">
          <FaTwitter />
        </a>
      </li>
      <li>
        <a href="#top">
          <FaInstagram />
        </a>
      </li>
    </StyledSocialIcons>
  );
}

export default SocialIcons;
