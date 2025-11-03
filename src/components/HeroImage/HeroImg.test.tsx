import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { HeroImage } from "./HeroImg";

describe("HeroImage Component", () => {
    test("renders hero image and is visible", () => {
        render(
            <HeroImage
                src="https://via.placeholder.com/1920x600"
                alt="Hero Image"
            />,
        );
        const imgElement = screen.getByAltText(/Hero Image/i);
        expect(imgElement).toBeInTheDocument();
        expect(imgElement).toBeVisible();
    });

    test("changes opacity when disabled", () => {
        const { rerender } = render(
            <HeroImage
                src="https://via.placeholder.com/1920x600"
                alt="Hero Image"
                disabled
            />,
        );
        const imgElement = screen.getByAltText(/Hero Image/i);
        const container = imgElement.parentElement;

        expect(container).toHaveStyle("opacity: 0.5");

        rerender(
            <HeroImage
                src="https://via.placeholder.com/1920x600"
                alt="Hero Image"
                disabled
            />,
        );
        expect(container).toHaveStyle("opacity: 0.5");
    });
});
