import { useContext } from 'react';
import { UserDataContext } from '../context/userDataContext';

export const useUsersData = () => useContext(UserDataContext);