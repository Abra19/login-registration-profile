import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import notFoundImage from '../assets/notFound.jpg';

const NotFoundPage = () => {
  const { t } = useTranslation();
  return (
    <div className="text-center">
      <img src={notFoundImage} alt="Страница не найдена" className="img-fluid h-25" width="400" />
      <h1 className="h4 text-muted">{t('pageNotFound')}</h1>
      <p className="text-muted">
        {t('redirect')}
        <Link to="/">{t('mainPage')}</Link>
      </p>
    </div>
  );
};

export default NotFoundPage;
