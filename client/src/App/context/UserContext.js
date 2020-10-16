import React, { createContext, useState } from 'react';

export const UserContext = createContext(null);

export default ({ children }) => {
  const [user, setUser] = useState({jwt: 'asdfsaf'});

  return (
      <UserContext.Provider value={{ user, setUser }}>
          {children}
      </UserContext.Provider>
  );
};
