import type { Meta, StoryObj } from "@storybook/react-webpack5";
import Button from "./Button";
import { ButtonProps } from "./Button.types";

const meta: Meta<typeof Button> = {
    title: "Components/Button",
    component: Button,
    tags: ["autodocs"],
    argTypes: {
        label: { control: "text" },
        background: { control: "color" },
        disabled: { control: "boolean" },
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args: {
        label: "Default Button",
        background: "#007bff",
        disabled: false,
    } as ButtonProps,
};

export const Disabled: Story = {
    args: {
        label: "Disabled Button",
        background: "#007bff",
        disabled: true,
    } as ButtonProps,
};
