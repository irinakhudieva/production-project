import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import Main from './Main';

const meta: Meta<typeof Main> = {
    title: 'pages/Main',
    component: Main,
    args: {},
};

export default meta;
type Story = StoryObj<typeof Main>;

export const Normal: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)]