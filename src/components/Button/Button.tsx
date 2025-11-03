import React from "react";
import styled, { css } from "styled-components";
import { ButtonProps } from "./Button.types";

const StyledButton = styled.button<{
    $disabled?: boolean;
    $background?: string;
}>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    border-radius: 8px;
    transition:
        background 180ms ease,
        opacity 180ms ease;
    cursor: pointer;
    user-select: none;
    background: var(--color-primary, #007bff);
    color: white;
    border: none;
    padding: 8px 14px;
    font-size: 1rem;
    ${({ $background }) =>
        $background &&
        css`
            background: ${$background} !important;
        `}

    @media (min-width: 768px) {
        border-radius: 10px;
    }

    ${({ $disabled }) =>
        $disabled &&
        css`
            opacity: 0.55;
            cursor: not-allowed;
            pointer-events: none;
        `}
`;

const Button: React.FC<ButtonProps> = ({
    label,
    disabled = false,
    background,
}) => {
    return (
        <StyledButton
            $disabled={disabled}
            $background={background}
            aria-disabled={disabled}
            disabled={disabled}
        >
            {label}
        </StyledButton>
    );
};

export default Button;
