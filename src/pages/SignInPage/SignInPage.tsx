import React, { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Navigation from "@/containers/Navigation/Navigation";
import SignInForm from "@/containers/SignInForm/SignInForm";

import { AppRoutesEnum } from "@/routes/types";

import { navigationLinks } from "@/utils/navigation";
import { notificationsForEveryError } from "@/utils/notificationsForEveryError";

import { authApi } from "@/store/api/authApi";

import { ISignInFormFields } from "@/types/sign";

import signIllustration from "@/assets/images/signInIllustration.svg";

import styles from "./SignInPage.module.scss";

const SignInPage: FC = () => {
    const [loginUser] = authApi.useLoginUserMutation();
    const navigate = useNavigate();

    const onSuccessSignIn = () => {
        navigate("/");
    };

    const onSubmitForm = async (
        e: React.FormEvent<HTMLFormElement>,
        data: ISignInFormFields
    ) => {
        e.preventDefault();
        try {
            await loginUser(data)
                .unwrap()
                .then(() => onSuccessSignIn())
                .catch((error) =>
                    notificationsForEveryError(error.data.message.errors)
                );
        } catch (e) {
            const errors = e?.data?.message;
            if (errors) {
                notificationsForEveryError(errors);
            }
        }
    };

    return (
        <div className={styles.main}>
            <Navigation links={navigationLinks} />
            <div className={styles.content}>
                <div className={styles.info}>
                    <h2 className={styles.info__title}>
                        Break into the world of music with <span>Tune</span>
                    </h2>
                    <img
                        src={signIllustration}
                        alt="Sign In"
                        className={styles.info__image}
                    />
                </div>
                <div className={styles.form}>
                    <h2 className={styles.form__title}>Heyy, There</h2>
                    <p className={styles.form__subtitle}>
                        Please login we have exciting content for you
                    </p>
                    <SignInForm handleSubmit={onSubmitForm} />
                    <div className={styles.form__redirect}>
                        <span>Don't have an account?</span>
                        <Link to={AppRoutesEnum.SIGNUP}>Sign Up</Link>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SignInPage;
