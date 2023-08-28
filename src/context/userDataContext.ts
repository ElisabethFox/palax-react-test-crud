import axios from 'axios';
import { createContext } from 'react';

export const UserDataContext = createContext({});

const UserDataContextProvider = ({ children }) => {

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