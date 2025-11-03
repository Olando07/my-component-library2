import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RadioButton from "./RadioButton";

describe("RadioButton component", () => {
	test("shows working radio button", () => {
		render(<RadioButton label="Test button" value="test1" name="test_group" />)

		const radioContainer = screen.getByTestId('radioContainer');
		expect(radioContainer).toBeVisible();

		const radioBtn = screen.getByTestId('radioInput');
		expect(radioBtn).toBeVisible();
		expect(radioBtn).toHaveAttribute("type", "radio");
	});

	test("button style is different when disabled", () => {
		render(<RadioButton label="Disabled Button" value="test2" name="test_group" disabled />)

		const radioBtn = screen.getByTestId('radioInput');
		expect(radioBtn).toBeDisabled();
	});
});
