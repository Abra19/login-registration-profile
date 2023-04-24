import { useEffect, useState } from 'react';
import { Card } from 'antd';
import axios from 'axios';
import routes from '../routes';

const getAuthHeader = () => {
  const userId = JSON.parse(localStorage.getItem('userdatas') || '{}');

  if (userId && userId.token) {
    return { Authorization: `Bearer ${userId.token}` };
  }
  return {};
};

const AboutPage = () => {
  const [datas, setDatas] = useState({
    id: 0,
    username: '',
    avatar: '',
    about: '',
  });

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(routes.dataPath(), { headers: getAuthHeader() });
      setDatas(data.data);
    };
    getData();
  }, []);

  return (
    <Card
      cover={<img alt="avatar" src={datas.avatar} />}
      style={{
        width: '30%',
        minWidth: '300px',
        margin: '30px auto',
        backgroundColor: 'aliceblue',
      }}
    >
      <Card.Meta title={datas.username} description={datas.about} />
    </Card>
  );
};

export default AboutPage;
