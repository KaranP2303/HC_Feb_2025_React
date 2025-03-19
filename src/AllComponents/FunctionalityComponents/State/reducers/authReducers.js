import {
    LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    LOGOUT_USER_SUCCESS,
    LOGOUT_USER_FAIL,
    FORGOT_PASSWORD_REQUEST,
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_FAIL,
    SET_TOKEN_DETAILS_REQUEST,
    SET_TOKEN_DETAILS_SUCCESS,
    SET_TOKEN_DETAILS_FAIL,
    CLEAR_TOKEN_DETAILS,
    CLEAR_ERRORS,
  } from "../constants/authConstants";
  
  const initialState = {
    token: sessionStorage.getItem("token") || null,
    user: null,
    loading: false,
    error: null,
    message: null,
    successMessage:null
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_USER_REQUEST:
      case REGISTER_USER_REQUEST:
      case FORGOT_PASSWORD_REQUEST:
      case SET_TOKEN_DETAILS_REQUEST:
        return { ...state, loading: true, error: null };
  
      case LOGIN_USER_SUCCESS:
        return {
          ...state,
          loading: false,
          token: action.payload.token,
          user: action.payload.user,
          error: null,
        };
  
      case REGISTER_USER_SUCCESS:
      case FORGOT_PASSWORD_SUCCESS:
        return {
          ...state,
          loading: false,
          successMessage: action.payload,
          error: null,
        };
  
      case SET_TOKEN_DETAILS_SUCCESS:
        return {
          ...state,
          loading: false,
          token: action.payload.token,
          user: action.payload.user,
        };
  
      case LOGIN_USER_FAIL:
      case REGISTER_USER_FAIL:
      case FORGOT_PASSWORD_FAIL:
      case SET_TOKEN_DETAILS_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      case LOGOUT_USER_SUCCESS:
      case CLEAR_TOKEN_DETAILS:
        return { ...initialState, token: null, user: null };
  
      case LOGOUT_USER_FAIL:
        return { ...state, error: action.payload };
  
      case CLEAR_ERRORS:
        return { ...state, error: null ,successMessage:null};
  
      default:
        return state;
    }
  };
  
  export default authReducer;
  