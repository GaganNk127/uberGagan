import React, { useState, createContext } from 'react';

export const UserDataContext = createContext();

const UserContext = ({ children }) => {
  const [user, setUser] = useState({
    email: '',
    fullName: {
      firstname: '',
      lastname: ''
    }
  });
// const [user, setUser] = useState("User data")

  return (
    <UserDataContext.Provider value={{ user, setUser }}>
      {children}
    </UserDataContext.Provider>
  );
}

export default UserContext;
