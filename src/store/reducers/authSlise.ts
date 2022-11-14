import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { RootState } from "@/store/store";

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
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.role = action.payload.role;
        },
    },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
