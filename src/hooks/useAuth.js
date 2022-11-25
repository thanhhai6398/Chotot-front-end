/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useDebugValue, useEffect } from 'react';
import { AuthContext } from '~/contexts/AuthProvider';
import useLocalStorage from './useLocalStorage';

const LOCAL_STORAGE_KEY = 'CHOTOT_USER';
const useAuth = () => {
  const { auth } = useContext(AuthContext);
  const { setValue } = useLocalStorage(LOCAL_STORAGE_KEY, {});
  useEffect(() => {
    console.log(auth);
    setValue(auth);
  }, [auth]);
  useDebugValue(auth, (auth) => (auth?.user ? 'Logged In' : 'Logged Out'));
  return useContext(AuthContext);
};
export default useAuth;
