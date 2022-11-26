/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useDebugValue, useEffect } from 'react';
import { AuthContext } from '~/contexts/AuthProvider';
import useLocalStorage from './useLocalStorage';

const LOCAL_STORAGE_KEY = 'CHOTOT_USER';
const useAuth = () => {
  const { auth, setAuth } = useContext(AuthContext);
  const { storedValue, setValue } = useLocalStorage(LOCAL_STORAGE_KEY, {});
  useEffect(() => {
    auth.user ??  setAuth(storedValue);
  });
  useEffect(() => {
    setValue(auth);
  },[auth]);
  useDebugValue(auth, (auth) => (auth?.user ? 'Logged In' : 'Logged Out'));
  return useContext(AuthContext);
};
export default useAuth;
