import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { TableRow } from "./Table_Row";
import { TableCell } from "../Table_Cell/Table_Cell";
import { Table } from "../Table";

const meta: Meta<typeof TableRow> = {
    title: "Components/Table/TableRow",
    component: TableRow,
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
type Story = StoryObj<typeof TableRow>;

export const Default: Story = {
    render: (args) => (
        <Table>
            <tbody>
                <TableRow {...args}>
                    <TableCell>Cell 1</TableCell>
                    <TableCell>Cell 2</TableCell>
                    <TableCell>Cell 3</TableCell>
                </TableRow>
            </tbody>
        </Table>
    ),
    args: {
        disabled: false,
    },
};

export const Disabled: Story = {
    render: (args) => (
        <Table>
            <tbody>
                <TableRow {...args}>
                    <TableCell>Disabled Cell 1</TableCell>
                    <TableCell>Disabled Cell 2</TableCell>
                </TableRow>
            </tbody>
        </Table>
    ),
    args: {
        disabled: true,
    },
};
