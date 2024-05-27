import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import NotFound from './NotFound';

const meta: Meta<typeof NotFound> = {
    title: 'pages/NotFound',
    component: NotFound,
    args: {},
};

export default meta;
type Story = StoryObj<typeof NotFound>;

export const Normal: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)]