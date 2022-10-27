import React, { FC, useState } from "react";
import styles from "./SignUpForm.module.scss";
import InputField from "@/components/InputField/InputField";
import { ISignUpFormFields } from "@/types/sign";

interface SignUpFormProps {
    handleSubmit: React.FormEventHandler<HTMLFormElement>;
}

const SignUpForm: FC<SignUpFormProps> = ({ handleSubmit }) => {
    const [signUpData, setSignUpData] = useState<ISignUpFormFields>(
        {} as ISignUpFormFields
    );

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <InputField
                label={"Enter username"}
                type={"text"}
                value={signUpData.username}
                onChange={(username) =>
                    setSignUpData({ ...signUpData, username })
                }
            />
            <InputField
                label={"Enter email"}
                type={"text"}
                value={signUpData.email}
                onChange={(email) => setSignUpData({ ...signUpData, email })}
            />
            <InputField
                label={"Enter password"}
                type={"text"}
                value={signUpData.password}
                onChange={(password) =>
                    setSignUpData({ ...signUpData, password })
                }
            />
            <InputField
                label={"Confirm password"}
                type={"text"}
                value={signUpData.confirmPassword}
                onChange={(confirmPassword) =>
                    setSignUpData({ ...signUpData, confirmPassword })
                }
            />
            <button type="submit" className={styles.btn}>
                Sign Up
            </button>
        </form>
    );
};

export default SignUpForm;
