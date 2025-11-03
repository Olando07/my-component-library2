import React from "react";
import styled from "styled-components";
import { TableHeaderProps } from "./Table_Header.types";

const StyledTableHeader = styled.thead<{
    backgroundColor?: string;
    textColor?: string;
    disabled?: boolean;
}>`
    color: ${(props) => props.textColor || "#333333"};
    background-color: ${(props) =>
        props.disabled ? "#f5f5f5" : props.backgroundColor || "transparent"};
    cursor: ${(props) => (props.disabled ? "not-allowed" : "inherit")};
    font-weight: 600;
`;

export const TableHeader: React.FC<TableHeaderProps> = ({
    children,
    backgroundColor,
    textColor,
    disabled,
}) => {
    return (
        <StyledTableHeader
            backgroundColor={backgroundColor}
            textColor={textColor}
            disabled={disabled}
        >
            {children}
        </StyledTableHeader>
    );
};
