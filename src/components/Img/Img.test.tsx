import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Img } from "./Img";

describe("Text component", () => {
    test("renders image and is visible", () => {
        render(<Img src="./cat.jpg" alt="Test Image" />);
        const textelement = screen.getByTestId("image");
        expect(textelement).toBeVisible();
    });

    test("Changes style when disabled", () => {
        render(<Img src="./cat.jpg" alt="Disabled Image" disabled={true} />);
    });
});
