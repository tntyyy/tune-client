import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IGenericResponse } from "@/store/api/types";
import { ISignUpUser } from "@/types/sign";
import { AuthRoutes } from "@/types/api";

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
    }),
});