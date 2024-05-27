import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import 'app/styles/index.scss';
import AppLink, { AppLinkTheme } from './AppLink';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof AppLink> = {
    title: 'shared/AppLink',
    component: AppLink,
    args: {
        to: '/'
     },
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.PRIMARY
    },
};
Primary.decorators = [ThemeDecorator(Theme.DARK)]

export const Secondary: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.SECONDARY,
    },
};
Secondary.decorators = [ThemeDecorator(Theme.DARK)]
