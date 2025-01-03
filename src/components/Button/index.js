import React from 'react';
import { StyledButton } from './styles';

function Button() {
  return (
    <StyledButton as='a' href='#'>
      Click me
    </StyledButton>
  );
}

export default Button;
