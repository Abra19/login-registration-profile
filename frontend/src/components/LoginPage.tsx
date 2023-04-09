import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { useFormik } from 'formik';
import { Container, Row, Col } from 'react-bootstrap'; ///
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { CardsValuesProps } from '../types';
import useAuth from '../hooks/auth.js';
import routes from '../routes.js';
import { loginSchema } from '../validation/validationSchema';
import CardElement from './CardElement';

const LoginPage = () => {
  const inputNameRef = useRef<HTMLInputElement>(null!);
  const [authFailed, setAuthFailed] = useState(false);
  const auth = useAuth();
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    inputNameRef.current.focus();
  }, []);

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
          inputNameRef.current.select();
        }
      }
    },
  });

  const values: CardsValuesProps = {
    formik,
    title: t('entry'),
    placeholderName: t('placeholders.login'),
    placeholderPassword: t('placeholders.password'),
    noAccount: t('noAccount'),
    registration: t('registration'),
    error: t('errors.invalidFeedback'),
    authFailed,
    inputNameRef,
    path: routes.registerPagePath(),
  };

  return (
    <Container fluid className="h-100">
      <Row className="justify-content-center align-content-center h-100">
        <Col xs={12} md={8} xxl={6}>
          <CardElement values={values} />
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
