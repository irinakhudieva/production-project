import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { useTranslation } from 'react-i18next';
import classes from './Sidebar.module.scss';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import AboutIcon from 'shared/assets/icons/about.svg';
import MainIcon from 'shared/assets/icons/home.svg';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';


interface SidebarProps {
  className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const { t } = useTranslation()

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    }

    return (
        <div 
            data-testid="sidebar" 
            className={classNames(
                classes.Sidebar,
                {[classes.collapsed]: collapsed}, 
                [className]
            )}>
            <div className={classes.items}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY} 
                    to={RoutePath.main}
                    className={classes.item} 
                >
                    <MainIcon className={classes.icon} />
                    <span className={classes.link}>
                        {t('На главную')}
                    </span>
                </AppLink>
                <AppLink 
                    theme={AppLinkTheme.SECONDARY} 
                    to={RoutePath.about}
                    className={classes.item}
                >
                    <AboutIcon className={classes.icon} />
                    <span className={classes.link}>
                        {t('О сайте')} 
                    </span>
                </AppLink> 
            </div>
            <Button
                className={classes.collapsedBtn}
                data-testid="sidebar-toggle" 
                onClick={onToggle}
                theme={ButtonTheme.BACKGROUND_INVERTED}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={classes.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>  
        </div>
  )
}

export default Sidebar;

