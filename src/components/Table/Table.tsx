import React from "react";
import styled from "styled-components";
import { TableProps } from "./Table.types";

const StyledTable = styled.table<{
    disabled?: boolean;
    backgroundColor?: string;
    borderColor?: string;
}>`
    width: 100%;
    border-collapse: collapse;
    background-color: ${(props) =>
        props.disabled ? "#f5f5f5" : props.backgroundColor || "#ffffff"};
    border: 1px solid "#dddddd";
    opacity: ${(props) => (props.disabled ? 0.6 : 1)};
    cursor: ${(props) => (props.disabled ? "not-allowed" : "inherit")};
    transition: opacity 0.3s ease;

    @media (max-width: 768px) {
        font-size: 14px;
    }
`;

export const Table: React.FC<TableProps> = ({
    children,
    disabled,
    backgroundColor,
}) => {
    return (
        <StyledTable disabled={disabled} backgroundColor={backgroundColor}>
            {children}
        </StyledTable>
    );
};
