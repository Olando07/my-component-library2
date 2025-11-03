import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Table } from "./Table";
import { TableRow } from "./Table_Row";
import { TableCell } from "./Table_Cell";

describe("Table Component", () => {
    test("renders table and is visible", () => {
        render(
            <Table>
                <tbody>
                    <TableRow>
                        <TableCell>Test Cell</TableCell>
                    </TableRow>
                </tbody>
            </Table>,
        );
        const cellElement = screen.getByText(/Test Cell/i);
        expect(cellElement).toBeInTheDocument();
        expect(cellElement).toBeVisible();
    });

    test("changes background color when disabled", () => {
        const { rerender } = render(
            <Table>
                <tbody>
                    <TableRow>
                        <TableCell>Test Cell</TableCell>
                    </TableRow>
                </tbody>
            </Table>,
        );
        const tableElement = screen.getByText(/Test Cell/i).closest("table");

        expect(tableElement).toBeVisible();

        rerender(
            <Table disabled>
                <tbody>
                    <TableRow>
                        <TableCell>Test Cell</TableCell>
                    </TableRow>
                </tbody>
            </Table>,
        );
        expect(tableElement).toHaveStyle("background-color: #f5f5f5");
    });
});
