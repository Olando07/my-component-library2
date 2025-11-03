import React from "react";
import styled from "styled-components";
import { TableFooterProps } from "./Table_Footer.types";

const StyledTableFooter = styled.tfoot<{
    textColor?: string;
    disabled?: boolean;
    backgroundColor?: string;
}>`
    background-color: ${(props) =>
        props.disabled ? "#f5f5f5" : props.backgroundColor || "transparent"};
    color: ${(props) =>
        props.disabled ? "#999999" : props.textColor || "#333333"};
    cursor: ${(props) => (props.disabled ? "not-allowed" : "inherit")};
    font-weight: 500;
`;

export const TableFooter: React.FC<TableFooterProps> = ({
    children,
    textColor,
    backgroundColor,
    disabled,
}) => {
    return (
        <StyledTableFooter
            textColor={textColor}
            disabled={disabled}
            backgroundColor={backgroundColor}
        >
            {children}
        </StyledTableFooter>
    );
};
