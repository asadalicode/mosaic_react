import { backendCall } from "../../shared/backendCall";

export const getBillingPlanAPICall = async () => {
    let _url = `core/billing-plan`;

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

export const getBillingPlanDetailAPICall = async (id) => {
    let _url = `core/billing-plan/${id}`;

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


export const addBillingAPICall = async (data) => {
    let _url = `core/billing-plan`;

    let _data = {
        isSuccess: false,
        data: {}
    };
    await backendCall(_url, "POST", data, false).then(async (response) => {
        if (!response.error) {
            _data = {
                isSuccess: true,
                data: response.data
            }
        }
    });
    return _data;
}