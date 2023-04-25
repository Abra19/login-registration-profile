import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useLocation,
} from 'react-router-dom';
import { Button } from 'antd';
import { useTranslation } from 'react-i18next';

import { ChildrenProps } from '../types';
import useAuth from '../hooks/auth';
import routes from '../routes.js';
import AuthProvider from '../contexts/AurhProvider';

import AboutPage from './AboutPage';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import NotFoundPage from './NotFoundPage';

const PrivateRoute = ({ children }: ChildrenProps): any => {
  const auth = useAuth();
  const location = useLocation();

  return (
    auth.loggedIn ? children : <Navigate to={routes.loginPagePath()} state={{ from: location }} />
  );
};

const AuthButton = () => {
  const auth = useAuth();
  const { t } = useTranslation();

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    auth.loggedIn ? <Button onClick={auth.logOut}>{t('exit')}</Button> : <></>
  );
};

const App = () => {
  const { t } = useTranslation();
  console.log(process.env);
  console.log(routes.loginPagePath());
  return (
    <AuthProvider>
      <div className="d-flex flex-column h-100 mainContainer">
        <Router>
          <ul className="d-flex justify-content-between shadow p-4 rounded navPannel">
            <li className="menuItem">
              <Link to={routes.aboutPagePath()} className="linkStyle text-left">{t('name')}</Link>
            </li>
            <li className="menuItem">
              <AuthButton />
            </li>
          </ul>
          <Routes>
            <Route
              path={routes.aboutPagePath()}
              element={(
                <PrivateRoute>
                  <AboutPage />
                </PrivateRoute>
              )}
            />
            <Route path={routes.loginPagePath()} element={<LoginPage />} />
            <Route path={routes.aboutPagePath()} element={<AboutPage />} />
            <Route path={routes.signupPagePath()} element={<SignupPage />} />
            <Route path={routes.notFoundPath()} element={<NotFoundPage />} />
          </Routes>
        </Router>
      </div>
    </AuthProvider>
  );
};

export default App;
