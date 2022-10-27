import React, { FC } from "react";
import styles from "./SignUpPage.module.scss";
import { navigationLinks } from "@/utils/navigation";
import Navigation from "@/containers/Navigation/Navigation";
import SignUpForm from "@/containers/SignUpForm/SignUpForm";
import signUpIllustration from "@/assets/images/signUpIllustration.svg";

const SignUpPage: FC = () => {
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
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;
