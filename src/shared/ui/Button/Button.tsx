import classes from './Button.module.scss';
import { classNames } from 'shared/lib/classNames/classNames'; 
import { ButtonHTMLAttributes, FC } from 'react';


export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  size?: ButtonSize;
}


export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        size = ButtonSize.M,
        ...otherProps
    } = props;
 
    return (
        <button 
            type="button"
            className={classNames(
                classes.Button, {}, [className, classes[theme], classes[size]]
            )}
            {...otherProps}
        >
            {children}
        </button>
    )
}

export default Button;