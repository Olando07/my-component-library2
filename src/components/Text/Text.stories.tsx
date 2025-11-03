import type { Meta, StoryObj } from "@storybook/react-webpack5";
import Text from "./Text";
import { TextProps } from "./Text.types";

const meta: Meta<typeof Text> = {
    title: "Components/Text",
    component: Text,
    tags: ["autodocs"],
    argTypes: {
        content: { control: "text" },
        color: { control: "color" },
        disabled: { control: "boolean" },
    },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
    args: {
        Text: "Default Text",
        background: "#007bff",
    } as unknown as TextProps,
};

export const Disabled: Story = {
    args: {
        content: "Disabled Text",
        disabled: true,
    },
};
