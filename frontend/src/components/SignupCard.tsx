import { Link } from 'react-router-dom';
import {
  Card,
  Button,
  Form,
  Input,
} from 'antd';

import signupImg from '../assets/signupImg.jpeg';
import { SignupProps } from '../types';

const SignupCard = ({ values }: SignupProps) => {
  const {
    formik,
    title,
    buttonName,
    placeholderName,
    placeholderPassword,
    placeholderPasswordConfirmation,
    userExists,
    makedRegistration,
    enter,
    registrationFailed,
    path,
  } = values;

  const validateStatusUser = formik.errors.username ? 'error' : 'success';
  const validateStatusPassword = formik.errors.password ? 'error' : 'success';
  const validateStatusPasswordConfirmation = formik.errors.passwordConfirmation ? 'error' : 'success';

  return (
    <div className="cardWrapper">
      <div className="cardContainer shadow-sm">
        <img src={signupImg} className="imgContainer" alt={title} />
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

            <Form.Item
              name="passwordConfirmation"
              className="mb-5"
              help={formik.errors.passwordConfirmation}
              validateStatus={validateStatusPasswordConfirmation}
            >
              <Input.Password
                name="passwordConfirmation"
                placeholder={placeholderPasswordConfirmation}
                value={formik.values.passwordConfirmation}
                onChange={formik.handleChange}
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                {buttonName}
              </Button>
            </Form.Item>
            {registrationFailed && <Form.Item className="error">{userExists}</Form.Item>}
          </Form>
        </Card>
      </div>
      <div className="footer p-4">
        <div className="text-center">
          <span className="me-5">
            {makedRegistration}
          </span>
          <Button htmlType="button" type="link">
            <Link to={path}>{enter}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignupCard;
