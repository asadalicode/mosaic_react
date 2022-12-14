import { backendCall } from "../../shared/backendCall";

export const getProjectAPICall = async (pageNumber, limit) => {
    let _url = `streaming/tracks?page=${pageNumber}&limit=${limit}`;

    let _data = {
        isSuccess: false,
        result: {}
    };
    await backendCall(_url, "GET", {}).then(async (response) => {
        if (!response.error) {
            _data = {
                isSuccess: true,
                result: response
            }
        }
    });
    return _data;
}

