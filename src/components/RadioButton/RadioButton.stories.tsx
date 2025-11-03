import type { Meta, StoryObj } from "@storybook/react-webpack5";
import RadioButton from "./RadioButton";
import { RadioButtonProps } from "./RadioButton.types";
import { useState } from "react";

const meta: Meta<typeof RadioButton> = {
    title: "Components/RadioButton",
    component: RadioButton,
    tags: ["autodocs"],
    argTypes: {
        label: { control: "text" },
        name: { control: "text" },
        value: { control: "text" },
        checked: { control: "boolean" },
        disabled: { control: "boolean" },
    },
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
    args: {
        label: "Option 1",
        name: "group1",
        value: "default_group",
        checked: true,
        disabled: false,
    } as RadioButtonProps,
};

export const Disabled: Story = {
    args: {
        label: "Disabled",
        name: "disabled",
        value: "disabled_group",
        checked: false,
        disabled: true,
    } as RadioButtonProps,
};

export const Checked: Story = {
    args: {
        label: "Checked",
        name: "checked",
        value: "checked_group",
        checked: true,
        disabled: false,
    } as RadioButtonProps,
};

export const RadioGroup: Story = {
    render: () => {
        const [selected, setSelected] = useState("option1");
        return (
            <>
                <h2>Select an option: </h2>
                <RadioButton
                    label="BMW"
                    name="car-group"
                    value="option1"
                    checked={selected === "option1"}
                    onChange={setSelected}
                />
                <RadioButton
                    label="Mercedes"
                    name="car-group"
                    value="option2"
                    checked={selected === "option2"}
                    onChange={setSelected}
                />
                <RadioButton
                    label="Audi"
                    name="car-group"
                    value="option3"
                    checked={selected === "option3"}
                    onChange={setSelected}
                />
            </>
        );
    },
};
