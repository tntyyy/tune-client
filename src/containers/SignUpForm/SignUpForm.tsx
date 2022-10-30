import React, { FC, useState } from "react";

import InputField from "@/components/InputField/InputField";

import { ISignUpFormFields } from "@/types/sign";

import styles from "./SignUpForm.module.scss";

interface SignUpFormProps {
    handleSubmit: (
        event: React.FormEvent<HTMLFormElement>,
        data: ISignUpFormFields
    ) => void;
}

const SignUpForm: FC<SignUpFormProps> = ({ handleSubmit }) => {
    const [signUpData, setSignUpData] = useState<ISignUpFormFields>(
        {} as ISignUpFormFields
    );

    return (
        <form
            className={styles.form}
            onSubmit={(event: React.FormEvent<HTMLFormElement>) =>
                handleSubmit(event, signUpData)
            }
        >
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
            <div className={styles.roles}>
                <label className={styles.radio}>
                    <input
                        type="radio"
                        name={"role"}
                        value="USER"
                        onChange={(event) =>
                            setSignUpData({
                                ...signUpData,
                                role: event.target.value,
                            })
                        }
                    />
                    <span>I am a regular user</span>
                </label>
                <label className={styles.radio}>
                    <input
                        type="radio"
                        name={"role"}
                        value="ARTIST"
                        onChange={(event) =>
                            setSignUpData({
                                ...signUpData,
                                role: event.target.value,
                            })
                        }
                    />
                    <span>I'm an artist</span>
                </label>
            </div>
            <button type="submit" className={styles.btn}>
                Sign Up
            </button>
        </form>
    );
};

export default SignUpForm;
