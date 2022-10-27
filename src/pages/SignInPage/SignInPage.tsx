import React, { FC } from "react";
import styles from "./SignInPage.module.scss";
import { navigationLinks } from "@/utils/navigation";
import Navigation from "@/containers/Navigation/Navigation";
import signIllustration from "@/assets/images/signInIllustration.svg";
import { AppRoutesEnum } from "@/routes/types";
import { Link } from "react-router-dom";
import SignInForm from "@/containers/SignInForm/SignInForm";

const SignInPage: FC = () => {
    const onSubmitForm = (e: React.MouseEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("submit");
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
        </div>
    );
};

export default SignInPage;
