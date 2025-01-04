import React from 'react';

function CardTitle({ underline = false, children }) {
  return (
    <h2 style={{ borderBottom: underline ? '1px solid' : 'none' }}>
      {children}
    </h2>
  );
}

export default CardTitle;
