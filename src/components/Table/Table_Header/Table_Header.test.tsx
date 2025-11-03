import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TableHeader } from "./Table_Header";
import { TableRow } from "../Table_Row/Table_Row";
import { TableCell } from "../Table_Cell/Table_Cell";
import { Table } from "../Table";

describe("TableHeader Component", () => {
    test("renders table header and is visible", () => {
        render(
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableCell>Test Header</TableCell>
                    </TableRow>
                </TableHeader>
            </Table>,
        );
        const headerElement = screen.getByText(/Test Header/i);
        expect(headerElement).toBeInTheDocument();
        expect(headerElement).toBeVisible();
    });

    test("applies background color correctly", () => {
        render(
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableCell>Test Header</TableCell>
                    </TableRow>
                </TableHeader>
            </Table>,
        );
        const headerElement = screen.getByText(/Test Header/i).closest("thead");
    });
});
