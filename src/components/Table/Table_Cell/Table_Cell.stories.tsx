import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { TableCell } from "./Table_Cell";

const meta: Meta<typeof TableCell> = {
    title: "Components/Table/TableCell",
    component: TableCell,
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
    argTypes: {
        textColor: { control: "color" },
        disabled: { control: "boolean" },
    },
};

export default meta;
type Story = StoryObj<typeof TableCell>;

export const DefaultCell: Story = {
    args: {
        children: "Sample Cell",
        disabled: false,
        textColor: "#333333",
    },
};

export const DisabledCell: Story = {
    args: {
        children: "Disabled Cell",
        disabled: true,
    },
};
