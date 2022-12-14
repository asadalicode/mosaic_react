import { backendCall } from "../../shared/backendCall";

export const getArtistAPICall = async (pageNumber, limit) => {
    let _url = `streaming/artists?page=${pageNumber}&limit=${limit}`;

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

export const deleteArtistAPICall = async (deleteId) => {
    let _url = `streaming/artists/${deleteId}`;

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

export const getArtistDetailAPICall = async (id) => {
    let _url = `streaming/artists/${id}`;

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