import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { TableHeader } from "./Table_Header";
import { TableRow } from "../Table_Row/Table_Row";
import { TableCell } from "../Table_Cell/Table_Cell";
import { Table } from "../Table";

const meta: Meta<typeof TableHeader> = {
    title: "Components/Table/TableHeader",
    component: TableHeader,
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
    argTypes: {
        backgroundColor: { control: "color" },
        textColor: { control: "color" },
        disabled: { control: "boolean" },
    },
};

export default meta;
type Story = StoryObj<typeof TableHeader>;

export const Default: Story = {
    render: (args) => (
        <Table>
            <TableHeader {...args}>
                <TableRow>
                    <TableCell>Column 1</TableCell>
                    <TableCell>Column 2</TableCell>
                    <TableCell>Column 3</TableCell>
                </TableRow>
            </TableHeader>
        </Table>
    ),
    args: {
        disabled: false,
    },
};

export const Disabled: Story = {
    render: (args) => (
        <Table>
            <TableHeader {...args}>
                <TableRow>
                    <TableCell>Disabled Column 1</TableCell>
                    <TableCell>Disblaed Column 2</TableCell>
                    <TableCell>Disblaed Column 3</TableCell>
                </TableRow>
            </TableHeader>
        </Table>
    ),
    args: {
        disabled: true,
    },
};
