import classes from './ThemeSwitcher.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import LightIcon from 'shared/assets/icons/light-theme.svg';
import DarkIcon from 'shared/assets/icons/dark-theme.svg';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';


interface ThemeSwitcherProps  {
  className?: string;
}


export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
    const { theme, toggleTheme } = useTheme();
    
    
    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames(classes.ThemeSwitcher, {}, [])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK 
              ? <LightIcon style={{height:'35px', width: '35px'}} /> 
              : <DarkIcon style={{height:'35px', width: '35px'}}/>
            }
        </Button>
  )
}

export default ThemeSwitcher;