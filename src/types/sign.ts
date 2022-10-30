export interface ISignUpUser {
    username: string;
    email: string;
    password: string;
    role: string;
}

export interface ISignUpFormFields extends ISignUpUser {
    confirmPassword: string;
}

export interface ISignInFormFields {
    email: string;
    password: string;
}
