import { IUser } from "@/types/IUser";
import { createSlice } from "@reduxjs/toolkit";

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
