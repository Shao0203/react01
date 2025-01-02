import React from 'react';
import { StyledButton } from './styles';

function Button({ inverse = false }) {
  return (
    <StyledButton as='a' href='#' inverse={inverse}>
      Click me
    </StyledButton>
  );
}

export default Button;
