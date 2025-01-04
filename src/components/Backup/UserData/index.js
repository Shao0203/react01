import React from 'react';

function UserData({ user }) {
  return (
    <div>
      <p>
        {user.name} - {user.age}
      </p>
    </div>
  );
}

export default UserData;
