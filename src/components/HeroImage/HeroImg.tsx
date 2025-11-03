import React from "react";
import styled from "styled-components";
import { HeroImageProps } from "./HeroImg.types";

const HeroContainer = styled.div<{
    disabled?: boolean;
    height?: string;
}>`
    position: relative;
    width: 100%;
    height: ${(props) => props.height || "400px"};
    overflow: hidden;
    opacity: ${(props) => (props.disabled ? 0.5 : 1)};
    cursor: ${(props) => (props.disabled ? "not-allowed" : "inherit")};
    transition: opacity 0.3s ease;

    @media (max-width: 768px) {
        height: ${(props) => {
            const height = parseInt(props.height || "400");
            return `${height * 0.6}px`;
        }};
    }
`;

const HeroImg = styled.img<{
    disabled?: boolean;
}>`
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: ${(props) => (props.disabled ? "grayscale(100%)" : "none")};
    transition: filter 0.3s ease;
`;

const Overlay = styled.div<{
    overlayColor?: string;
}>`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${(props) => props.overlayColor || "rgba(0, 0, 0, 0.4)"};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
`;

const Title = styled.h1<{
    textColor?: string;
}>`
    color: ${(props) => props.textColor || "#ffffff"};
    font-size: 48px;
    font-weight: 700;
    margin: 0 0 16px 0;
    text-align: center;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

    @media (max-width: 768px) {
        font-size: 32px;
    }
`;

const Subtitle = styled.p<{
    textColor?: string;
}>`
    color: ${(props) => props.textColor || "#ffffff"};
    font-size: 24px;
    font-weight: 400;
    margin: 0;
    text-align: center;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);

    @media (max-width: 768px) {
        font-size: 18px;
    }
`;

export const HeroImage: React.FC<HeroImageProps> = ({
    src,
    alt,
    title,
    subtitle,
    disabled,
    height,
    overlayColor,
    textColor,
}) => {
    return (
        <HeroContainer disabled={disabled}>
            <HeroImg src={src} alt={alt} height={height} disabled={disabled} />
            <Overlay overlayColor={overlayColor}>
                <Title textColor={textColor}>{title}</Title>
                <Subtitle textColor={textColor}>{subtitle}</Subtitle>
            </Overlay>
        </HeroContainer>
    );
};
