import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { IGenericResponse } from "@/store/api/types";

import { AuthRoutes } from "@/types/api";
import { ISignInFormFields, ISignUpUser } from "@/types/sign";

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl: process.env.BASE_URL }),
    endpoints: (build) => ({
        registerUser: build.mutation<IGenericResponse, ISignUpUser>({
            query: (data) => ({
                url: AuthRoutes.REGISTER,
                method: "POST",
                body: data,
            }),
        }),
        loginUser: build.mutation<IGenericResponse, ISignInFormFields>({
            query: (data) => ({
                url: AuthRoutes.LOGIN,
                method: "POST",
                body: data,
            }),
        }),
    }),
});
