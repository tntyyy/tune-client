import { adapterSignUpFieldsToIUser } from "@/utils/adapterSignUpFieldsToIUser";

import { ISignUpFormFields, ISignUpUser } from "@/types/sign";

describe("adapterSignUpFieldsToUser", () => {
    const data: ISignUpFormFields = {
        username: "test",
        email: "email@mail.ru",
        password: "password",
        confirmPassword: "password",
        role: "ARTIST",
    };

    it("should return true", () => {
        const trueData: ISignUpUser = {
            username: "test",
            email: "email@mail.ru",
            password: "password",
            role: "ARTIST",
        };
        expect(adapterSignUpFieldsToIUser(data)).toEqual(trueData);
    });
});
