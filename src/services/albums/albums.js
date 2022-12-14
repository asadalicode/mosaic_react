import { backendCall } from "../../shared/backendCall";

export const getAlbumsAPICall = async (pageNumber, limit) => {
    let _url = `streaming/albums?page=${pageNumber}&limit=${limit}`;

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

export const getAlbumsDetailAPICall = async (id) => {
    let _url = `streaming/albums/${id}`;

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


export const getAlbumTracksAPICall = async (id) => {
    let _url = `streaming/albums/${id}/tracks`;

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


export const deleteAlbumAPICall = async (deleteId) => {
    let _url = `streaming/albums/${deleteId}`;

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

