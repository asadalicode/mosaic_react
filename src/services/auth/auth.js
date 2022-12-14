import { backendCall } from "../../shared/backendCall";
import { setRefreshToken, setToken, setUser } from "../../shared/localstorage";

export const loginAPICall = async (
    data,
) => {
    let _url = "core/auth/login";

    let _isSuccess = false;
    await backendCall(_url, "POST", data).then(async (response) => {
        if (!response.error) {
            const { profile, tokens, user } = response.data;
            await setToken(tokens.accessToken);
            await setRefreshToken(tokens.refreshToken);
            await setUser(profile)
            _isSuccess = true;
        }
    });
    return _isSuccess;
};
