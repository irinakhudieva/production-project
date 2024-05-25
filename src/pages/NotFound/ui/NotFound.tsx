import classes from './NotFound.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';


interface NotFoundProps  {
  className?: string;
}


export const NotFound: FC<NotFoundProps> = (props) => {
  const { t } = useTranslation();

    return (
        <div className={classNames(classes.NotFound, {}, [])}>
            {t('Страница не найдена')}
        </div>
  )
}

export default NotFound;