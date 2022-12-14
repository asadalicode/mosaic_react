import { getToken } from "./localstorage";

export const authChecker = () => {
    let isAuthenticated = false;

    if (getToken()) {
        isAuthenticated = true;
    }

    return isAuthenticated;
};
