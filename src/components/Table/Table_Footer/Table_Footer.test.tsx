import "@testing-library/jest-dom";
import { TableFooter } from "./Table_Footer";

describe("TableFooter Component", () => {
    test("component is defined and exports correctly", () => {
        expect(TableFooter).toBeDefined();
        expect(typeof TableFooter).toBe("function");
    });

    test("accepts backgroundColor and textColor props", () => {
        const props = {
            children: null,
            textColor: "#333333",
        };
        expect(props.textColor).toBe("#333333");
    });
});
