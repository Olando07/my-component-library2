import React from "react";
import styled from "styled-components";
import { TableCellProps } from "./Table_Cell.types";

const StyledTableCell = styled.td<{ disabled?: boolean; textColor?: string }>`
	padding: 12px 16px;
	border: 1px solid #dddddd;
	color: ${(props) => (props.disabled ? "#999999" : props.textColor || "#333333")};
	text-align: left};

	@media (max-width: 768px) {
		padding: 8px 12px;
	}
`;

export const TableCell: React.FC<TableCellProps> = ({
    children,
    disabled,
    textColor,
}) => {
    return (
        <StyledTableCell disabled={disabled} textColor={textColor}>
            {children}
        </StyledTableCell>
    );
};
