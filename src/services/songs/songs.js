import { backendCall } from "../../shared/backendCall";

export const getSongsAPICall = async (pageNumber, limit) => {
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

export const deleteSongAPICall = async (deleteId) => {
    let _url = `streaming/tracks/${deleteId}`;

    let _data = {
        isSuccess: false,
    };
    await backendCall(_url, "DELETE", {},false).then(async (response) => {
        if (!response.error) {
            _data = {
                isSuccess: true,
            }
        }
    });
    return _data;
}