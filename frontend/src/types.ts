/* eslint-disable functional/no-return-void */
import { ReactNode } from 'react';

export type ChildrenProps = {
  children: ReactNode;
}

export type AuthType = {
  loggedIn: boolean;
  logIn: () => void;
  logOut: () => void;
}
