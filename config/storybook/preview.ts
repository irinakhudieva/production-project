import type { Preview } from '@storybook/react';
import { 
    StyleDecorator 
} from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { 
    ThemeDecorator 
} from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { 
    RouteDecorator 
} from '../../src/shared/config/storybook/RouteDecorator/RouteDecorator';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [StyleDecorator, ThemeDecorator(Theme.LIGHT), RouteDecorator],
};

export default preview;
