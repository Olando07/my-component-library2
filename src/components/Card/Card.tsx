import React from "react";
import styled, { css } from "styled-components";
import { CardProps } from "./Card.types";

const StyledCard = styled.div<{
    background?: string;
    disabled?: boolean;
}>`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 16px;
    border-radius: 12px;
    transition: 0.3s ease;
    cursor: pointer;
    background-color: ${({ background }) => background || "#fff"};
    box-shadow: opx 2px 6px rgba(0, 0, 0, 0.1);
    width: 280px;

    @media (min-width: 768px) {
        border-radius: 10px;
        width: 80px;
    }

    ${({ disabled }) =>
        disabled &&
        css`
            opacity: 0.55;
            cursor: not-allowed;
            pointer-events: none;
        `}
`;

const CardTitle = styled.h3`
    font-size: 1.2rem;
    margin: 12px 0 8px;
    text-align: center;
`;

const CardContent = styled.p`
    font-size: 0.95rem;
    margin: 0;
    text-align: center;
    color: #333;
`;

const Card: React.FC<CardProps> = ({
    title,
    content = "Card description is shown here",
    disabled = false,
    background,
}) => {
    if (!title) throw new Error("Title cannot be empty");
    return (
        <StyledCard
            disabled={disabled}
            background={background}
            aria-disabled={disabled}
        >
            <CardTitle>{title}</CardTitle>
            <CardContent>{content}</CardContent>
        </StyledCard>
    );
};

export default Card;
