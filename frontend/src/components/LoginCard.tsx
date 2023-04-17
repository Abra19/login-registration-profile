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
    placeholderName,
    placeholderPassword,
    noAccount,
    registration,
    error,
    // authFailed,
    path,
  } = values;

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

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
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              name="username"
              className="mb-5"
              rules={[{ required: true, message: error }]}
            >
              <Input placeholder={placeholderName} />
            </Form.Item>

            <Form.Item
              name="password"
              className="mb-5"
              rules={[{ required: true, message: error }]}
            >
              <Input.Password placeholder={placeholderPassword} />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
            <Form.Item tooltip={error} />
          </Form>
        </Card>
      </div>
      <div className="footer p-4">
        <div className="text-center">
          <span className="me-5">
            {noAccount}
          </span>
          <Link to={path}>{registration}</Link>
        </div>
      </div>
    </div>
  );
};

export default CardElement;
