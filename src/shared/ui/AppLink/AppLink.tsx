import { Link, LinkProps } from 'react-router-dom';
import classes from './AppLink.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}


export const AppLink: FC<AppLinkProps> = (props) => {
    const { 
        to, 
        className, 
        children, 
        theme = AppLinkTheme.PRIMARY, 
        ...otherProps 
    } = props;
    
    return (
    <Link 
        to={to} 
        className={classNames(classes.AppLink, {}, [className, classes[theme]])}
        {...otherProps}
    >
        {children}
    </Link>
  )
}

export default AppLink;