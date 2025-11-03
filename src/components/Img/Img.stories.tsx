import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Img } from "./Img";

const meta: Meta = {
    title: "Components/Img",
    component: Img,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        width: { control: "text" },
        height: { control: "text" },
        borderRadius: { control: "text" },
        disabled: { control: "boolean" },
        objectFit: {
            control: { type: "select" },
            options: ["cover", "contain", "fill", "none"],
        },
    },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
    args: {
        src: "https://via.placeholder.com/400x300",
        alt: "Placeholder image",
        width: "400px",
        height: "300px",
        disabled: false,
        borderRadius: "0",
        objectFit: "cover",
    },
};

export const Rounded: Story = {
    args: {
        src: "https://via.placeholder.com/300x300",
        alt: "Rounded image",
        width: "300px",
        height: "300px",
        borderRadius: "12px",
    },
};

export const Disabled: Story = {
    args: {
        src: "https://via.placeholder.com/400x300",
        alt: "Disabled image",
        width: "400px",
        height: "300px",
        disabled: true,
    },
};
