import classes from './Navbar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';



interface NavbarProps {
  className?: string;
  theme?: AppLinkTheme;
}


export const Navbar = ({className}: NavbarProps) => {
  return (
    <div className={classNames(classes.navbar, {}, [className])}>
        <AppLink 
            theme={AppLinkTheme.SECONDARY} 
            to='/'
        > 
            На главную
        </AppLink>
        <AppLink 
            theme={AppLinkTheme.SECONDARY} 
            to='/about'
        >
            О сайте
        </AppLink>
        <ThemeSwitcher />
    </div>
  )
}

export default Navbar;
