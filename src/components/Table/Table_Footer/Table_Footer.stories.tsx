import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { TableFooter } from "./Table_Footer";
import { TableRow } from "../Table_Row/Table_Row";
import { TableCell } from "../Table_Cell/Table_Cell";
import { Table } from "../Table";

const meta: Meta<typeof TableFooter> = {
    title: "Components/Table/TableFooter",
    component: TableFooter,
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
type Story = StoryObj<typeof TableFooter>;

export const DefaultFooter: Story = {
    render: (args) => (
        <Table>
            <TableFooter {...args}>
                <TableRow>
                    <TableCell>Footer Cell 1</TableCell>
                    <TableCell>Footer Cell 2</TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    ),
    args: {
        textColor: "#333333",
        disabled: false,
    },
};

export const DisabledFooter: Story = {
    render: (args) => (
        <Table>
            <TableFooter {...args}>
                <TableRow>
                    <TableCell>Disbaled Footer Cell 1</TableCell>
                    <TableCell>Disbaled Footer Cell 2</TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    ),
    args: {
        disabled: true,
    },
};
