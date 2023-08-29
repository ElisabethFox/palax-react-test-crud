import axios from 'axios';
import React, { FC, createContext } from 'react';

export const UserDataContext = createContext({});

interface UserContextProviderProps {
  children: React.ReactNode;
}

const UserDataContextProvider: FC<UserContextProviderProps> = ({ children }) => {

  const getUsersData = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response;
  };

  return (
    <UserDataContext.Provider value={{
        getUsersData,
    }}
    >
      {children}
    </UserDataContext.Provider>
  );
};

export default UserDataContextProvider;