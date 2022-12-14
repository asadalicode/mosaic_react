import { backendCall } from "../../shared/backendCall";

export const getPlaylistAPICall = async (pageNumber, limit,type) => {
    let _url = `streaming/playlists?page=${pageNumber}&limit=${limit}&type=${type}`;

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

export const deletePlaylistAPICall = async (deleteId) => {
    let _url = `streaming/playlists/${deleteId}`;

    let _data = {
        isSuccess: false,
    };
    await backendCall(_url, "DELETE", {}, false).then(async (response) => {
        if (!response.error) {
            _data = {
                isSuccess: true,
            }
        }
    });
    return _data;
}


export const getCombinedSearchAPICall = async (query) => {
    let _url = `data/search/combined?q=${query}`;

    let _data = {
        isSuccess: false,
        data: {}
    };
    await backendCall(_url, "GET", {}, false).then(async (response) => {
        if (!response.error) {
            _data = {
                isSuccess: true,
                data: response.data
            }
        }
    });
    return _data;
}

export const uploadImageAPICall = async (imageData) => {
    let _url = `core/uploader/presigned-url`;

    let _data = {
        isSuccess: false,
        data: {}
    };
    await backendCall(_url, "POST", imageData, false).then(async (response) => {
        if (!response.error) {
            _data = {
                isSuccess: true,
                data: response.data
            }
        }
    });
    return _data;
}

export const uploadFileToAWSAPICall = async (url, file) => {
    let _data = {
        isSuccess: false,
        data: {}
    };
    const result = await fetch(url, {
        method: "PUT",
        body: file["file"],
    });
    console.log(result);
    return _data;
}
export const postPlaylistAPICall = async (playlistData) => {
    let url = `streaming/playlists/managed`;
    let _data = {
        isSuccess: false,
        data: {}
    };
    await backendCall(url, "POST", playlistData, false).then(async (response) => {
        if (!response.error) {
            _data = {
                isSuccess: true,
                data: response.data
            }
        }
    });
    return _data;
}