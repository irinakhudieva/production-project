import { useTranslation } from 'react-i18next';
import classes from './Navbar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import Modal from 'shared/ui/Modal/Modal';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';



interface NavbarProps {
  className?: string;
  theme?: AppLinkTheme;
}


export const Navbar = ({className}: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);
  
    return (
        <div 
            data-testid="navbar"
            className={classNames(classes.navbar, {}, [className])}
        >
            <Button 
                theme={ButtonTheme.OUTLINE}
                className={classes.links}
                onClick={onToggleModal}>
                {t('Войти')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Modal>
        </div>
    )
}

export default Navbar;
