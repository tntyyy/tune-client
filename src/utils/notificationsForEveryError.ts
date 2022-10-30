import { errorNotification } from "@/utils/notifications";

export interface IError {
    msg: string;
    param: string;
    location: string;
}

export const notificationsForEveryError = (errors: IError[]) => {
    errors.forEach((error) => {
        errorNotification(error.msg);
    });
};
