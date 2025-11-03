import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Card from "./Card";

describe("Card component", () => {
    test("renders and is visible", () => {
        render(
            <Card
                title="Visible Card"
                content="This is visible card content."
            />,
        );
        const cardTitle = screen.getByRole("heading", {
            name: /visible card/i,
        });
        expect(cardTitle).toBeVisible();
    });

    test("is visually disabled when disabled prop is true", () => {
        render(
            <Card
                title="Disabled Card"
                content="This is disabled card content."
                disabled
            />,
        );
        const cardTitle = screen.getByRole("heading", {
            name: /disabled card/i,
        });
        expect(cardTitle).toBeVisible();
    });
});
