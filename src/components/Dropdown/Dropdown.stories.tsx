// Dropdown.stories.tsx
import type { Meta, StoryObj } from "@storybook/react-webpack5";
import Dropdown from "./Dropdown";
import { DropdownProps } from "./Dropdown.types";

const meta: Meta<typeof Dropdown> = {
    title: "Components/Dropdown",
    component: Dropdown,
    tags: ["autodocs"],
    argTypes: {
        options: { control: "object" },
        selected: { control: "text" },
        disabled: { control: "boolean" },
    },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
    args: {
        options: ["Option 1", "Option 2", "Option 3"],
        selected: "Option 1",
        disabled: false,
    } as DropdownProps,
};

export const Disabled: Story = {
    args: {
        options: ["Option 1", "Option 2", "Option 3"],
        selected: "Option 2",
        disabled: true,
    } as DropdownProps,
};
