import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./Button";

describe("Button component", () => {
    test("renders and is visible", () => {
        render(<Button label="Visible" />);
        const btn = screen.getByRole("button", { name: /visible/i });
        expect(btn).toBeVisible();
    });

    test("is disabled when disabled prop is true", () => {
        render(<Button label="Disabled" disabled />);
        const btn = screen.getByRole("button", { name: /disabled/i });
        expect(btn).toBeDisabled();
    });
});
