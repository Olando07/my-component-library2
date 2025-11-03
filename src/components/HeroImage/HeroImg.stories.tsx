import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { HeroImage } from "./HeroImg";

const meta: Meta = {
    title: "Components/HeroImage",
    component: HeroImage,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
    argTypes: {
        height: { control: "text" },
        overlayColor: { control: "color" },
        textColor: { control: "color" },
        disabled: { control: "boolean" },
    },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
    args: {
        src: "https://via.placeholder.com/1920x600",
        alt: "Hero image",
        title: "Welcome to Our Site",
        subtitle: "Discover amazing content",
        disabled: false,
        height: "500px",
        overlayColor: "rgba(0, 0, 0, 0.4)",
        textColor: "#ffffff",
    },
};

export const WithoutText: Story = {
    args: {
        src: "https://via.placeholder.com/1920x600",
        alt: "Hero image without text",
        height: "400px",
    },
};

export const Disabled: Story = {
    args: {
        src: "https://via.placeholder.com/1920x600",
        alt: "Disabled hero image",
        title: "Disabled Hero",
        subtitle: "This hero is disabled",
        disabled: true,
    },
};
