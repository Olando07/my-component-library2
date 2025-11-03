import React from "react";
import styled from "styled-components";
import { TableRowProps } from "./Table_Row.types";

const StyledTableRow = styled.tr<{
    $disabled?: boolean;
    $backgroundColor?: string;
}>`
    background-color: ${(props) =>
        props.$disabled ? "#f5f5f5" : props.$backgroundColor || "transparent"};
    cursor: ${(props) => (props.$disabled ? "not-allowed" : "inherit")};
    transition: background-color 0.2s ease;

    tbody &:nth-child(even) {
        background-color: ${(props) =>
            props.$disabled ? "#f5f5f5" : "#fafafa"};
    }
`;

export const TableRow: React.FC<TableRowProps> = ({
    children,
    disabled,
    backgroundColor,
}) => {
    return (
        <StyledTableRow $disabled={disabled} $backgroundColor={backgroundColor}>
            {children}
        </StyledTableRow>
    );
};
