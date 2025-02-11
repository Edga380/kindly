import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within, waitFor, fn } from '@storybook/test';
import { expect } from '@storybook/jest';
import Modal from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'General/Modal',
  component: Modal,
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement);
    await step('Open Modal', async () => {
      await userEvent.click(canvas.getByText(args.name));
    });
    expect(canvas.queryByText(args.message)).toBeVisible();

    await step('Confirm action', async () => {
      await userEvent.click(canvas.getByText('Confirm'));
    });
    await waitFor(() => expect(args.onAction).toHaveBeenCalled());

    await step('Cancel action', async () => {
      await userEvent.click(canvas.getByText('Cancel'));
    });
    expect(canvas.queryByText(args.message)).not.toBeInTheDocument();
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ItemDeleteModal: Story = {
  args: {
    onAction: fn(),
    name: 'Delete Item',
    targetId: 269,
    message: 'By pressing "Confirm" you will delete this item permanently.',
  },
};

export const ProfileDeleteModal: Story = {
  args: {
    onAction: fn(),
    name: 'Delete Profile',
    targetId: 616,
    message:
      'Your profile will be deleted permanently. Are you sure you want to continue?',
  },
};

export const GiveAwayModal: Story = {
  args: {
    onAction: fn(),
    name: 'Give Away',
    targetId: 123,
    message:
      'Are you sure you want to give away this item? Once confirmed, the recipient will be notified.',
  },
};

export const DisabledModal: Story = {
  args: {
    onAction: fn(),
    name: 'Conditionally disabled',
    targetId: 1312,
    message: 'Invisible message because the modal is disabled',
    isDisabled: true,
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    await step('Modal is disabled', async () => {
      expect(canvas.getByRole('button')).toBeDisabled();
    });
  },
};
