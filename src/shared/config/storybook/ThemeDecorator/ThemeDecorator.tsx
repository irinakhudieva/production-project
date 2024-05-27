import { Decorator } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import 'app/styles/index.scss';

export const ThemeDecorator: Decorator = (theme: Theme) => (story: () => Story) => {
    return (
        <div className={`app ${theme}`}>
            {story()}
        </div> 
    )
};