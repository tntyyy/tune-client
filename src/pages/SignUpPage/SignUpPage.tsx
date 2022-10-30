import React, { FC } from "react";
import styles from "./SignUpPage.module.scss";
import { navigationLinks } from "@/utils/navigation";
import Navigation from "@/containers/Navigation/Navigation";
import SignUpForm from "@/containers/SignUpForm/SignUpForm";
import signUpIllustration from "@/assets/images/signUpIllustration.svg";
import { AppRoutesEnum } from "@/routes/types";
import { Link, useNavigate } from "react-router-dom";
import { authApi } from "@/store/api/authApi";
import { ISignUpFormFields } from "@/types/sign";
import { adapterSignUpFieldsToIUser } from "@/utils/adapterSignUpFieldsToIUser";
import { ToastContainer } from "react-toastify";
import "!style-loader!css-loader!react-toastify/dist/ReactToastify.css";
import { notificationsForEveryError } from "@/utils/notificationsForEveryError";

const SignUpPage: FC = () => {
    const [registerUser] = authApi.useRegisterUserMutation();
    const navigate = useNavigate();

    const onSuccessSignUp = () => {
        navigate("/");
    };

    const onSubmitForm = async (
        e: React.FormEvent<HTMLFormElement>,
        data: ISignUpFormFields
    ) => {
        e.preventDefault();
        try {
            await registerUser(adapterSignUpFieldsToIUser(data))
                .unwrap()
                .then(() => onSuccessSignUp())
                .catch((error) =>
                    notificationsForEveryError(error.data.message.errors)
                );
        } catch (e) {
            const errors = e.data.message.errors;
            notificationsForEveryError(errors);
        }
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
            <ToastContainer />
        </div>
    );
};

export default SignUpPage;
