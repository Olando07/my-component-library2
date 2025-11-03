import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Dropdown from "./Dropdown";

describe("Dropdown component", () => {
    test("renders and is visible", () => {
        render(
            <Dropdown
                options={["Option 1", "Option 2"]}
                selected="Option 1"
                disabled={false}
            />,
        );
        const dropdownElement = screen.getByRole("combobox");
        expect(dropdownElement).toBeVisible();
    });

    test("is visually disabled when disabled prop is true", () => {
        render(
            <Dropdown
                options={["Option 1", "Option 2"]}
                selected="Option 1"
                disabled={true}
            />,
        );
        const dropdownElement = screen.getByRole("combobox");
        expect(dropdownElement).toBeDisabled();
    });
});
