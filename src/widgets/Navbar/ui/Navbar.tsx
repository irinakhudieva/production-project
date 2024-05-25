import { useTranslation } from 'react-i18next';
import classes from './Navbar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';



interface NavbarProps {
  className?: string;
  theme?: AppLinkTheme;
}


export const Navbar = ({className}: NavbarProps) => {
  const { t } = useTranslation()
  
  return (
    <div data-testid="navbar"  className={classNames(classes.navbar, {}, [className])}>
        <AppLink 
            theme={AppLinkTheme.SECONDARY} 
            to='/'
        > 
            {t('На главную')}
        </AppLink>
        <AppLink 
            theme={AppLinkTheme.SECONDARY} 
            to='/about'
        >
            {t('О сайте')}
        </AppLink>
        <ThemeSwitcher />
        <LangSwitcher />
    </div>
  )
}

export default Navbar;
