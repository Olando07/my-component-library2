import React from "react";
import styled, { css } from "styled-components";
import { ImgProps } from "./Img.types";

const StyledImg = styled.img<{
    width?: string;
    height?: string;
    borderRadius?: string;
    objectFit?: string;
    backgroundColor?: string;
    borderColor?: string;
    disabled?: boolean;
}>`
    width: ${(props) => props.width || "100%"};
    height: ${(props) => props.height || "auto"};
    object-fit: ${(props) => props.objectFit || "cover"};
    border-radius: ${(props) => props.borderRadius || "0"};
    opacity: ${(props) => (props.disabled ? 0.4 : 1)};
    filter: ${(props) => (props.disabled ? "grayscale(100%)" : "none")};
    cursor: ${(props) => (props.disabled ? "not-allowed" : "inherit")};
    transition: all 0.3s ease;
    display: block;

    @media (max-width: 768px) {
        width: 100%;
        height: auto;
    }
`;

export const Img: React.FC<ImgProps> = ({
    src,
    alt,
    width,
    height,
    disabled,
    borderRadius,
    objectFit,
}) => {
    return (
        <StyledImg
            src={src}
            alt={alt}
            width={width}
            height={height}
            disabled={disabled}
            borderRadius={borderRadius}
            objectFit={objectFit}
            data-testid="image"
        />
    );
};
