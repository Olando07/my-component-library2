import type { Meta, StoryObj } from "@storybook/react-webpack5";
import Label from "./Label";
import { LabelProps } from "./Label.types";

const meta: Meta<typeof Label> = {
    title: "Components/Label",
    component: Label,
    tags: ["autodocs"],
    argTypes: {
        text: { control: "text" },
        color: { control: "color" },
    },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
    args: {
        text: "Default Label",
        background: "#007bff",
    } as LabelProps,
};

export const Disabled: Story = {
    args: {
        text: "Disabled Label",
        disabled: true,
    },
};
