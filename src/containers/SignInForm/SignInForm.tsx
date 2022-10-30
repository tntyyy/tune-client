import React, { FC, useState } from "react";

import InputField from "@/components/InputField/InputField";

import { ISignInFormFields } from "@/types/sign";

import styles from "./SignInForm.module.scss";

interface SignUpFormProps {
    handleSubmit: React.FormEventHandler<HTMLFormElement>;
}

const SignInForm: FC<SignUpFormProps> = ({ handleSubmit }) => {
    const [signInData, setSignInData] = useState<ISignInFormFields>(
        {} as ISignInFormFields
    );

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <InputField
                label={"Enter email"}
                type={"text"}
                value={signInData.email}
                onChange={(email) => setSignInData({ ...signInData, email })}
            />
            <InputField
                label={"Enter password"}
                type={"text"}
                value={signInData.password}
                onChange={(password) =>
                    setSignInData({ ...signInData, password })
                }
            />
            <button type="submit" className={styles.btn}>
                Sign In
            </button>
        </form>
    );
};

export default SignInForm;
