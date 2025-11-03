import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Label from "./Label";

describe("Label component", () => {
    test("renders and is visible", () => {
        render(<Label text="Visible Label" />);
        const label = screen.getByText(/visible label/i);
        expect(label).toBeVisible();
    });
});
