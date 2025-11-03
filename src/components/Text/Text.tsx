import React from "react";
import styled, { css } from "styled-components";
import { TextProps } from "./Text.types";

const StyledText = styled.p<{
    color?: string;
    fontWeight?: string;
    fontSize?: string;
    disabled?: boolean;
}>`
    color: ${(props) => (props.disabled ? "#6a6a6aff" : props.color)};
    font-size: ${({ fontSize }) => fontSize || "20px"};
    font-weight: ${({ fontWeight }) => fontWeight || "normal"};
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

    ${({ disabled }) =>
        disabled &&
        css`
            opacity: 0.55;
            cursor: not-allowed;
            pointer-events: none;
        `}
`;

const Text: React.FC<TextProps> = ({
    content = "Text content",
    color,
    fontSize,
    fontWeight,
    disabled,
}) => {
    if (!content) throw new Error("Text cannot be empty");
    return (
        <StyledText
            color={color}
            fontSize={fontSize}
            fontWeight={fontWeight}
            disabled={disabled}
        >
            {content}
        </StyledText>
    );
};

export default Text;
