export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    disabled?: boolean;
    background?: string;
}
