import { ISignUpFormFields, ISignUpUser } from "@/types/sign";

export const adapterSignUpFieldsToIUser = (
    data: ISignUpFormFields
): ISignUpUser => {
    return {
        username: data.username,
        email: data.email,
        password: data.password,
        role: data.role,
    };
};
