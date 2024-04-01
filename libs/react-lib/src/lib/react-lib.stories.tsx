import type { Meta, StoryObj } from '@storybook/react';
import { TestComponent } from './react-lib';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof TestComponent> = {
  component: TestComponent,
  title: 'TestComponent',
};
export default meta;
type Story = StoryObj<typeof TestComponent>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Component from ReactLib!/gi)).toBeTruthy();
  },
};
