import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Button from 'shared/ui/Button/Button';
import classes from './ErrorPage.module.scss';

interface ErrorPageProps {
  className?: string;
}


export const ErrorPage: FC<ErrorPageProps> = (props) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    }

    return (
        <div className={classNames(classes.ErrorPage, {}, [])}>
           <p>{t('Произошла непредвиденная ошибка')}</p>
           <Button onClick={reloadPage}>
              {t('Обновить страницу')}
           </Button>
        </div>
  )
}

export default ErrorPage;