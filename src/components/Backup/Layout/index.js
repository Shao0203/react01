import './style.css';

import React from 'react';

function Layout({ Nav, children }) {
  return (
    <div className='container'>
      <nav>{<Nav />}</nav>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
