import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TableRow } from "./Table_Row";
import { TableCell } from "../Table_Cell/Table_Cell";
import { Table } from "../Table";

describe("TableRow Component", () => {
	test("renders table row and is visible", () => {
		render(
			<Table>
				<tbody>
					<TableRow>
						<TableCell>Test Cell</TableCell>
					</TableRow>
				</tbody>
			</Table>
		);
		const cellElement = screen.getByText(/Test Cell/i);
		expect(cellElement).toBeInTheDocument();
		expect(cellElement).toBeVisible();
	});

	test("changes background color when disabled", () => {
		const { rerender } = render(
			<Table>
				<tbody>
					<TableRow backgroundColor="transparent">
						<TableCell>Test Cell</TableCell>
					</TableRow>
				</tbody>
			</Table>
		);
		const rowElement = screen.getByText(/Test Cell/i).closest("tr");

		expect(rowElement).toHaveStyle("background-color: transparent");

		rerender(
			<Table>
				<tbody>
					<TableRow disabled backgroundColor="transparent">
						<TableCell>Test Cell</TableCell>
					</TableRow>
				</tbody>
			</Table>
		);
		expect(rowElement).toHaveStyle("background-color: #f5f5f5");
	});
});
