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
  buttonName: string;
  placeholderName: string;
  placeholderPassword: string;
  noAccount: string;
  registration: string;
  errorAuth: string;
  authFailed: boolean;
  path: string;
}

export interface CardsProps {
  values: CardsValuesProps;
}

export type SignupValuesProps = {
  formik: any;
  title: string;
  buttonName: string;
  placeholderName: string;
  placeholderPassword: string;
  placeholderPasswordConfirmation:string;
  userExists: string;
  makedRegistration: string;
  enter: string;
  registrationFailed: boolean;
  path: string;
}

export interface SignupProps {
  values: SignupValuesProps;
}
