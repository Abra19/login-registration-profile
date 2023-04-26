import { Link } from 'react-router-dom';
import {
  Card,
  Button,
  Form,
  Input,
} from 'antd';

import loginImg from '../assets/loginImg.jpeg';
import { CardsProps } from '../types';

const CardElement = ({ values }: CardsProps) => {
  const {
    formik,
    title,
    buttonName,
    placeholderName,
    placeholderPassword,
    noAccount,
    registration,
    errorAuth,
    authFailed,
    path,
  } = values;

  const validateStatusUser = formik.errors.username ? 'error' : 'success';
  const validateStatusPassword = formik.errors.password ? 'error' : 'success';

  return (
    <div className="cardWrapper">
      <div className="cardContainer shadow-sm">
        <img src={loginImg} className="imgContainer" alt={title} />
        <Card title={title} className="cardStyle" bordered={false}>
          <Form
            name="basic"
            className="loginForm"
            initialValues={{ remember: true }}
            onFinish={formik.handleSubmit}
            autoComplete="off"
          >
            <Form.Item
              name="username"
              className="mb-5"
              help={formik.errors.username}
              validateStatus={validateStatusUser}
            >
              <Input
                name="username"
                placeholder={placeholderName}
                value={formik.values.username}
                onChange={formik.handleChange}
              />
            </Form.Item>

            <Form.Item
              name="password"
              className="mb-5"
              help={formik.errors.password}
              validateStatus={validateStatusPassword}
            >
              <Input.Password
                name="password"
                placeholder={placeholderPassword}
                value={formik.values.password}
                onChange={formik.handleChange}
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                {buttonName}
              </Button>
            </Form.Item>
            <div className="errorFooter">
              {authFailed && <Form.Item className="error">{errorAuth}</Form.Item>}
              {!formik.isSubmitting && formik.errors.error && <div className="error">{formik.errors.error}</div>}
            </div>
          </Form>
        </Card>
      </div>
      <div className="footer p-4">
        <div className="text-center">
          <span className="me-5">
            {noAccount}
          </span>
          <Button htmlType="button" type="link">
            <Link to={path}>{registration}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardElement;
