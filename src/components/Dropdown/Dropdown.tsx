import React from "react";
import styled, { css } from "styled-components";
import { DropdownProps } from "./Dropdown.types";

const StyledSelect = styled.select<{
    disabled?: boolean;
}>`
    padding: 10px 12px;
    border-radius: 6px;
    border: 1px solid #8f8f8fff;
    font-size: 1rem;
    background-color: ${({ disabled }) => (disabled ? "#e0e0e0" : "#fff")};
    color: ${({ disabled }) => (disabled ? "#888" : "#000")};
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
    transition: background-color 0.2s ease;

    @media (min-width: 768px) {
        width: 100%;
    }
`;

const Dropdown: React.FC<DropdownProps> = ({ options, onChange, disabled }) => {
    return (
        <StyledSelect
            onChange={(e) => onChange?.(e.target.value)}
            disabled={disabled}
        >
            {options.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </StyledSelect>
    );
};

export default Dropdown;
