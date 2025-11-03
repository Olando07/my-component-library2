import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Table } from "./Table";
import { TableHeader } from "./Table_Header";
import { TableRow } from "./Table_Row";
import { TableCell } from "./Table_Cell";
import { TableFooter } from "./Table_Footer";

const meta: Meta<typeof Table> = {
    title: "Components/Table",
    component: Table,
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
    argTypes: {
        backgroundColor: { control: "color" },
        disabled: { control: "boolean" },
    },
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
    render: (args) => (
        <Table {...args}>
            <TableHeader>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Role</TableCell>
                </TableRow>
            </TableHeader>
            <tbody>
                <TableRow>
                    <TableCell>John Doe</TableCell>
                    <TableCell>john@example.com</TableCell>
                    <TableCell>Developer</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Jane Smith</TableCell>
                    <TableCell>jane@example.com</TableCell>
                    <TableCell>Designer</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Bob Johnson</TableCell>
                    <TableCell>bob@example.com</TableCell>
                    <TableCell>Manager</TableCell>
                </TableRow>
            </tbody>
            <TableFooter>
                <TableRow>
                    <TableCell>Total: 3 users</TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    ),
    args: {
        disabled: false,
        backgroundColor: "#ffffff",
    },
};

export const Disabled: Story = {
    render: (args) => (
        <Table {...args}>
            <TableHeader>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                </TableRow>
            </TableHeader>
            <tbody>
                <TableRow>
                    <TableCell>John Doe</TableCell>
                    <TableCell>john@example.com</TableCell>
                </TableRow>
            </tbody>
        </Table>
    ),
    args: {
        disabled: true,
    },
};
