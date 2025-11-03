// Card.stories.tsx
import type { Meta, StoryObj } from "@storybook/react-webpack5";
import Card from "./Card";
import { CardProps } from "./Card.types";

const meta: Meta<typeof Card> = {
    title: "Components/Card",
    component: Card,
    tags: ["autodocs"],
    argTypes: {
        title: { control: "text" },
        background: { control: "color" },
        disabled: { control: "boolean" },
    },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
    args: {
        title: "Default Card",
        background: "#007bff",
        image: "https://via.placeholder.com/150",
        disabled: false,
    } as unknown as CardProps,
};

export const Disabled: Story = {
    args: {
        title: "Disabled Card",
        background: "#007bff",
        image: "https://via.placeholder.com/150",
        disabled: true,
    } as unknown as CardProps,
};
