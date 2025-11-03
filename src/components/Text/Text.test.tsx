import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Text from "./Text";

describe("Text component", () => {
    test("renders and is visible", () => {
        render(<Text content="Visible Text" />);
        const textelement = screen.getByText(/visible Text/i);
        expect(textelement).toBeVisible();
    });

    test("Shows error when text is empty", () => {
        expect(() => render(<Text content="" />)).toThrow(
            "Text cannot be empty",
        );
    });
});
