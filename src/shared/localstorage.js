export const setToken = async (token) => {
    await localStorage.setItem("token", token);
}

export const getToken = () => {
    return localStorage.getItem("token");
}

export const setRefreshToken = async (token) => {
    await localStorage.setItem("refreshToken", token);
}

export const getRefreshToken = async () => {
    return await localStorage.getItem("refreshToken");
}
export const setUser = async (user) => {
    await localStorage.setItem("user", JSON.stringify(user));
}