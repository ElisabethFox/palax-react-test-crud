import axios from 'axios';
import { createContext } from 'react';
import { useDispatch } from 'react-redux';


export const UserDataContext = createContext({});

const UserDataContextProvider = ({ socket, children }) => {
  const dispatch = useDispatch();

  const getUsersData = async () => {
    const response = axios.get('https://jsonplaceholder.typicode.com/users');
    console.log(response)
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