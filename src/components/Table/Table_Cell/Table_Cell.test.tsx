import "@testing-library/jest-dom";
import { TableCell } from "./Table_Cell";

describe("TableCell Component", () => {
    test("component is defined and visible", () => {
        expect(TableCell).toBeDefined();
        expect(typeof TableCell).toBe("function");
    });

    test("has correct display name", () => {
        expect(TableCell.name).toBe("TableCell");
    });
});
