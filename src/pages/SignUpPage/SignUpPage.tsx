import "!style-loader!css-loader!react-toastify/dist/ReactToastify.css";
import React, { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Navigation from "@/containers/Navigation/Navigation";
import SignUpForm from "@/containers/SignUpForm/SignUpForm";

import { useAppDispatch } from "@/hooks/redux";

import { AppRoutesEnum } from "@/routes/types";

import { adapterSignUpFieldsToIUser } from "@/utils/adapterSignUpFieldsToIUser";
import { navigationLinks } from "@/utils/navigation";
import { successNotification } from "@/utils/notifications";
import { notificationsForEveryError } from "@/utils/notificationsForEveryError";

import { authApi } from "@/store/api/authApi";
import { setUser } from "@/store/reducers/authSlise";

import { ISignUpFormFields } from "@/types/sign";

import signUpIllustration from "@/assets/images/signUpIllustration.svg";

import styles from "./SignUpPage.module.scss";

const SignUpPage: FC = () => {
    const [registerUser] = authApi.useRegisterUserMutation();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const onSuccessSignUp = (data: any) => {
        console.log(data);
        dispatch(setUser(data));
        successNotification("You have successfully registered");
        navigate("/");
    };

    const onSubmitForm = async (
        e: React.FormEvent<HTMLFormElement>,
        data: ISignUpFormFields
    ) => {
        e.preventDefault();
        const userData = adapterSignUpFieldsToIUser(data);
        try {
            await registerUser(userData)
                .unwrap()
                .then(() => {
                    onSuccessSignUp(userData);
                })
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
