import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IAuthState {
    id: number | null;
    name: string | null;
    email: string | null;
    role: string | null;
}

const initialState: IAuthState = {
    id: null,
    name: null,
    email: null,
    role: null,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state: IAuthState, action: PayloadAction<IAuthState>) => {
            return {
                id: action.payload.id,
                name: action.payload.name,
                email: action.payload.email,
                role: action.payload.role,
            };
        },
        logout: (state: IAuthState) => {
            return {
                id: null,
                name: null,
                email: null,
                role: null,
            };
        },
    },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
