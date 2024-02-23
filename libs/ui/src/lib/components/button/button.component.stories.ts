import { Args, Meta, StoryObj } from '@storybook/angular';
import { expect } from '@storybook/jest';
import { within } from '@storybook/testing-library';

import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
    component: ButtonComponent,
    title: 'ButtonComponent',
    render: (args: Args) => {
        const props: Args = args;
        return {
            props,
            template: `
                <button uiButton [appearance]="appearance" [size]="size">Button Example</button>
            `
        };
    }
};
export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
    args: {
        appearance: 'primary',
        size: 'medium'
    }
};

export const Secondary: Story = {
    args: {
        appearance: 'secondary',
        size: 'medium'
    }
};

export const Basic: Story = {
    args: {
        appearance: 'basic',
        size: 'medium'
    }
};

export const Heading: Story = {
    args: {
        appearance: 'primary',
        size: 'medium'
    },
    // eslint-disable-next-line @typescript-eslint/require-await
    play: async ({ canvasElement }: { canvasElement: HTMLElement }): Promise<void> => {
        // eslint-disable-next-line @typescript-eslint/typedef
        const canvas = within(canvasElement);
        expect(canvas.getByText(/button works!/gi)).toBeTruthy();
    }
};
