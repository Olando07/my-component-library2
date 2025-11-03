import React from "react";
import styled, { css } from "styled-components";
import { RadioButtonProps } from "./RadioButton.types";

const StyledRadioContainer = styled.div<{
    disabled?: boolean;
    backgroundColor?: "#b3dbffff";
}>`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
    transition: all 0.3s ease;
    opacity: ${(props) => (props.disabled ? 0.6 : 1)};
    background-color: ${(props) =>
        props.disabled ? "#eaeaeaff" : props.backgroundColor || "transparent"};
`;

const StyledInput = styled.input<{
    disabled?: boolean;
}>`
    accent-color: #007bff;
    width: 18px;
    height: 18px;
`;

const StyledLabel = styled.label<{
    disabled?: boolean;
}>`
    font-size: 16px;
`;

const RadioButton: React.FC<RadioButtonProps> = ({
    label,
    name,
    value,
    checked = false,
    disabled = false,
    onChange,
}) => {
    const testId = `radio_${name}${value}`;

    const handleChange = () => {
        if (!disabled && onChange) {
            onChange(value);
        }
    };

    return (
        <StyledRadioContainer
            disabled={disabled}
            data-testid="radioContainer"
            onClick={handleChange}
        >
            <StyledInput
                type="radio"
                id={testId}
                name={name}
                value={value}
                checked={checked}
                disabled={disabled}
                data-testid="radioInput"
                onClick={handleChange}
            />
            <StyledLabel
                htmlFor={testId}
                disabled={disabled}
                data-testid="radioLabel"
            >
                {label}
            </StyledLabel>
        </StyledRadioContainer>
    );
};

export default RadioButton;
