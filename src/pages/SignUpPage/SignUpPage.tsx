import React, { FC } from "react";
import styles from "./SignUpPage.module.scss";
import { navigationLinks } from "@/utils/navigation";
import Navigation from "@/containers/Navigation/Navigation";
import SignUpForm from "@/containers/SignUpForm/SignUpForm";
import signUpIllustration from "@/assets/images/signUpIllustration.svg";
import { AppRoutesEnum } from "@/routes/types";
import { Link } from "react-router-dom";
import { authApi } from "@/store/api/authApi";

const SignUpPage: FC = () => {
    const [registerUser, { isLoading, isSuccess, error }] =
        authApi.useRegisterUserMutation();

    const onSubmitForm = async (e: React.MouseEvent<HTMLFormElement>) => {
        e.preventDefault();
        const response = await registerUser({
            email: "user123@mail.ru",
            username: "username123",
            password: "Hfdbkm123!",
            confirmPassword: "Hfdbkm123!",
            role: "USER",
        });

        console.log(response);
    };

    return (
        <div className={styles.main}>
            <Navigation links={navigationLinks} />
            <div className={styles.content}>
                <div className={styles.info}>
                    <h2 className={styles.info__title}>
                        <span>Tune</span> is a digital music service
                    </h2>
                    <img
                        src={signUpIllustration}
                        alt="Sign Up"
                        className={styles.info__image}
                    />
                </div>
                <div className={styles.form}>
                    <h2 className={styles.form__title}>Let`s join</h2>
                    <p className={styles.form__subtitle}>
                        Make an account for the best experience
                    </p>
                    <SignUpForm handleSubmit={onSubmitForm} />
                    <div className={styles.form__redirect}>
                        <span>Already have an account?</span>
                        <Link to={AppRoutesEnum.SIGNIN}>Sign In</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;
