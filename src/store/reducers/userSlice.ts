import { createSlice } from "@reduxjs/toolkit";

import { IUser } from "@/types/IUser";

interface IUserState {
    user: IUser | null;
}

const initialState: IUserState = {
    user: null,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        // logout: () => initialState,
    },
});

export default userSlice.reducer;
