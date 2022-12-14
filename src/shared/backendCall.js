import axios from "axios";
import { handleToastMessage } from "./handleToastMessage";

export const backendCall = async (
  url,
  method = "POST",
  data,
  isNavigate = false,
  isShowErrorMessage = true,
  contentType = "application/json",
  useBaseUrl= true
) => {
  const _headers = {
    "Content-Type": contentType,
    Authorization: "Bearer " + localStorage.getItem("token") || "",
  };
  let _response = "";
  let _url = useBaseUrl? `https://devapi.udux.com/${url}` : url;
  await axios(_url, {
    method: method,
    data: data,
    headers: _headers,
  })
    .then((response) => {
      _response = response.data;
    })
    .catch((error) => {
      let _responseData = error.response.data;
      if (isShowErrorMessage) {
        let _message = typeof _responseData.message === "string" ? _responseData.message : _responseData.message?.[0];
        handleToastMessage("error", _message);
      }
      _response = _responseData;
      if (error.response.status === 401 && isNavigate) {
        window.location.replace("/");
        localStorage.clear();
      }
    });

  return _response;
};

