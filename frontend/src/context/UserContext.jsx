import React, { useState, createContext } from 'react';

export const UserDataContext = createContext();

function UserContext({ children }) {
  const [user, setUser] = useState({
    email: '',
    fullName: {
      firstname: '',
      lastname: ''
    }
  });

  return (
    <UserDataContext.Provider value={{ user, setUser }}>
      {children}
    </UserDataContext.Provider>
  );
}

export default UserContext;
