import { useState } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { SignupValuesProps } from '../types';
import axios from '../axios';
import useAuth from '../hooks/auth';
import routes from '../routes.js';
import { registrationSchema } from '../validation/validationSchema';
import SignupCard from './SignupCard';

const SignupPage = () => {
  const [registrationFailed, setRegistrationFailed] = useState(false);
  const auth = useAuth();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      passwordConfirmation: '',
    },
    validationSchema: registrationSchema(t('registrationRules.name'), t('registrationRules.password'), t('registrationRules.passwordEquality'), t('errors.required')),
    onSubmit: async (values) => {
      try {
        await axios.post(routes.signupPagePath(), {
          username: values.username,
          password: values.password,
        });
        const res = await axios.post(routes.loginPagePath(), {
          username: values.username,
          password: values.password,
        });
        localStorage.setItem('userdatas', JSON.stringify(res.data));
        auth.logIn();
        setRegistrationFailed(false);
        navigate(routes.aboutPagePath());
      } catch (err: any) {
        formik.setSubmitting(false);
        if (err.response.status === 400) {
          setRegistrationFailed(true);
          navigate(routes.signupPagePath());
        }
      }
    },
  });

  const values: SignupValuesProps = {
    formik,
    title: t('registrationTitle'),
    buttonName: t('registration'),
    placeholderName: t('placeholders.username'),
    placeholderPassword: t('placeholders.password'),
    placeholderPasswordConfirmation: t('placeholders.passwordConfirmation'),
    userExists: t('errors.userExist'),
    makedRegistration: t('makeRegistration'),
    enter: t('loginTitle'),
    registrationFailed,
    path: routes.loginPagePath(),
  };

  return (
    <div className="h-100">
      <div className="justify-content-center align-content-center h-100">
        <SignupCard values={values} />
      </div>
    </div>
  );
};

export default SignupPage;
