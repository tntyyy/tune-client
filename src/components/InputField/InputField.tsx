import React, { FC } from "react";
import styles from "./InputField.module.scss";

interface InputFieldProps {
    label: string;
    type: string;
    value: string;
    placeholder?: string;
    onChange: (event: string) => void;
}

const InputField: FC<InputFieldProps> = ({
    label,
    type,
    value,
    placeholder,
    onChange,
}) => {
    return (
        <label className={styles.label}>
            <span>{label}</span>
            <input
                className={styles.input}
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={(e) => onChange(e.target.value)}
            />
        </label>
    );
};

export default InputField;
