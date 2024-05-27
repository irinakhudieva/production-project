import classes from './Button.module.scss';
import { classNames } from 'shared/lib/classNames/classNames'; 
import { ButtonHTMLAttributes, FC } from 'react';


export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',

}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
}


export const Button: FC<ButtonProps> = (props) => {
   const {
        className,
        children,
        theme,
        ...otherProps
   } = props;
    
    return (
    <button 
        className={classNames(classes.Button, {}, [className, classes[theme]])}
        {...otherProps}
    >
        {children}
    </button>
  )
}

export default Button;