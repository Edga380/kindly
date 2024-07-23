import type { Meta, StoryObj } from '@storybook/react';
import MessageCard from '@/components/messaging/MessageCard';

const meta: Meta<typeof MessageCard> = {
  title: 'Messaging/MessageCard',
  component: MessageCard,
  parameters: {
    backgrounds: {
      default: 'messaging',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ShortMessageFromSelf: Story = {
  args: {
    senderId: 'testuser',
    createdAt: '16:04',
    messageText: 'Short test message',
    currentUser: 'testuser',
    messageId: 3,
  },
};

export const LongMessageFromSelf: Story = {
  args: {
    senderId: 'testuser',
    createdAt: '16:04',
    messageText:
      'This is a really long message and it even includes \nodd \n\n    formatting!! 🤪',
    currentUser: 'testuser',
    messageId: 3,
  },
};

export const ShortMessageFromOther: Story = {
  args: {
    senderId: 'testuser',
    createdAt: '16:04',
    messageText: 'Short test message',
    currentUser: 'anotheruser',
    messageId: 3,
  },
};

export const LongMessageFromOther: Story = {
  args: {
    senderId: 'testuser',
    createdAt: '16:04',
    messageText:
      "This message is really long! \nIn fact, it is much too long!! \n\nIt's very uncommon indeed 🤔",
    currentUser: 'anotheruser',
    messageId: 3,
  },
};
