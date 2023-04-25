import { useState } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { CardsValuesProps } from '../types';
import axios from '../axios';
import useAuth from '../hooks/auth';
import routes from '../routes.js';
import { loginSchema } from '../validation/validationSchema';
import LoginCard from './LoginCard';

const LoginPage = () => {
  const [authFailed, setAuthFailed] = useState(false);
  const auth = useAuth();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: loginSchema(t('errors.required')),
    onSubmit: async (values) => {
      try {
        const res = await axios.post(routes.loginPagePath(), {
          username: values.username,
          password: values.password,
        });
        localStorage.setItem('userdatas', JSON.stringify(res.data));
        auth.logIn();
        setAuthFailed(false);
        navigate(routes.aboutPagePath());
      } catch (err: any) {
        formik.setSubmitting(false);
        if (err.response.status === 401) {
          setAuthFailed(true);
          navigate(routes.loginPagePath());
        }
      }
    },
  });

  const values: CardsValuesProps = {
    formik,
    title: t('loginTitle'),
    buttonName: t('entry'),
    placeholderName: t('placeholders.login'),
    placeholderPassword: t('placeholders.password'),
    noAccount: t('noAccount'),
    registration: t('registration'),
    errorAuth: t('errors.auth'),
    authFailed,
    path: routes.signupPagePath(),
  };

  return (
    <div className="h-100">
      <div className="justify-content-center align-content-center h-100">
        <LoginCard values={values} />
      </div>
    </div>
  );
};

export default LoginPage;
