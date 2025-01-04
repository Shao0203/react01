import React from 'react';

function Menu({ children }) {
  return <nav>{children}</nav>;
}

function Item({ children }) {
  return <div>{children}</div>;
}

Menu.Item = Item;

export default Menu;
