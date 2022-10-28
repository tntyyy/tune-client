import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "@/store/reducers/userSlice";
import { authApi } from "@/store/api/authApi";

const rootReducer = combineReducers({
    userReducer,
    [authApi.reducerPath]: authApi.reducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(authApi.middleware),
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
