import classes from './LangSwitcher.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';


interface LangSwitcherProps  {
  className?: string;
}


export const LangSwitcher: FC<LangSwitcherProps> = (props) => {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  }

    
    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames(classes.LangSwitcher, {}, [])}
            onClick={toggle}
        >
           {i18n.language === 'ru' ? t('En') : t('Ru')}
        </Button>
  )
}

export default LangSwitcher;