import { createContext } from 'react';
import { AuthType } from '../types';

const AuthContext = createContext<AuthType>({} as AuthType);

export default AuthContext;
