import React from 'react';
import UserData from '../UserData';

function UserDataCard({ msg, ...rest }) {
  return (
    <div>
      <h1>Welcome!</h1>
      <h2>{msg}</h2>
      <UserData {...rest} />
    </div>
  );
}

export default UserDataCard;
