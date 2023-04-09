import { ReactNode } from 'react';

export type ChildrenProps = {
  children: ReactNode;
}

export type AuthType = {
  loggedIn: boolean;
  logIn: () => void;
  logOut: () => void;
}

export type CardsValuesProps = {
  formik: any;
  title: string;
  placeholderName: string;
  placeholderPassword: string;
  noAccount: string;
  registration: string;
  error: string;
  authFailed: boolean;
  inputNameRef: any;
  path: string;
}

export interface CardsProps {
  values: CardsValuesProps;
}
