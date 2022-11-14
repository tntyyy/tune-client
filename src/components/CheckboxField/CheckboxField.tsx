import React, { FC } from "react";

import styles from "./CheckboxField.module.scss";

interface CheckboxFieldProps {
    label: string;
    name: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckboxField: FC<CheckboxFieldProps> = ({
    name,
    value,
    label,
    onChange,
}) => {
    return (
        <label className={styles.radio}>
            <input type="radio" name={name} value={value} onChange={onChange} />
            <span>{label}</span>
        </label>
    );
};

export default CheckboxField;
