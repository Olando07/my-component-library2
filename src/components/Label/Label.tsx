import React from "react";
import styled, { css } from "styled-components";
import { LabelProps } from "./Label.types";

const StyledLabel = styled.label<{
    color?: string;
    disabled?: boolean;
}>`
    font-size: 20px;
    text-decoration: none;
    color: black;

    ${({ disabled }) =>
        disabled &&
        css`
            opacity: 0.55;
            cursor: not-allowed;
            pointer-events: none;
        `}
`;

const Label: React.FC<LabelProps> = ({ text = "Label:", color, disabled }) => {
    return (
        <StyledLabel color={color} disabled={disabled}>
            {text}
        </StyledLabel>
    );
};

export default Label;
