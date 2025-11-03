export interface DropdownProps {
    options: string[];
    selected?: string;
    onChange?: (value: string) => void;
    disabled?: boolean;
}
