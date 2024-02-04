const BASE_URL = process.env.REACT_APP_BASE_URL

// AUTH ENDPOINTS
export const endpoints = {
  SENDOTP_API: BASE_URL + "/auth/sendotp",
  SIGNUP_API: BASE_URL + "/auth/signup",
  LOGIN_API: BASE_URL + "/auth/login",

  CREATE_TEXT: BASE_URL + "/auth/createText",
  DELETE_TEXT: BASE_URL + "/auth/deleteText",
  GET_TEXT: BASE_URL + "/auth/getText",

  CREATE_IMAGE: BASE_URL + "/auth/createLogo",
  DELETE_IMAGE: BASE_URL + "/auth/deleteLogo",
  GET_IMAGE: BASE_URL + "/auth/getLogo",

}

