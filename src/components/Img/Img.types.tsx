export interface ImgProps {
    src: string;
    alt: string;
    width?: string;
    height?: string;
    disabled?: boolean;
    borderRadius?: string;
    objectFit?: "cover" | "contain" | "fill" | "none";
}
