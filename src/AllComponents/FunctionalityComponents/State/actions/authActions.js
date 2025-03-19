import axios from "axios";
import {jwtDecode} from "jwt-decode";
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

const API_URL = process.env.REACT_APP_API_URL;

// Login Action
export const loginUser = (credentials) => async (dispatch) => {
  dispatch({ type: LOGIN_USER_REQUEST });

  try {
    const response = await axios.post(`${API_URL}/login`, credentials);
    const { token } = response.data;
    // Decode the JWT token
    const decodedData = jwtDecode(token);
    console.log("extracted data ", decodedData)

    sessionStorage.setItem("token", token);
    sessionStorage.setItem("user", JSON.stringify(decodedData));

    dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: { token, user:decodedData },
    });
  } catch (error) {
    dispatch({
      type: LOGIN_USER_FAIL,
      payload: error.response?.data?.error || "Login failed",
    });
  }
};

// Register User Action
export const registerUser = (userData) => async (dispatch) => {
  dispatch({ type: REGISTER_USER_REQUEST });

  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    dispatch({
      type: REGISTER_USER_SUCCESS,
      payload: response.data.message,
    });
  } catch (error) {
    dispatch({
      type: REGISTER_USER_FAIL,
      payload: error.response?.data?.error || "Registration failed",
    });
  }
};

// Logout Action
export const logoutUser = () => (dispatch) => {
  try {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
    
    dispatch({ type: LOGOUT_USER_SUCCESS });
  } catch (error) {
    dispatch({
      type: LOGOUT_USER_FAIL,
      payload: "Logout failed",
    });
  }
};

// Forgot Password Action
export const forgotPassword = (email) => async (dispatch) => {
  dispatch({ type: FORGOT_PASSWORD_REQUEST });

  try {
    const response = await axios.post(`${API_URL}/forgot-password`, { email });
    dispatch({
      type: FORGOT_PASSWORD_SUCCESS,
      payload: response.data.message,
    });
  } catch (error) {
    dispatch({
      type: FORGOT_PASSWORD_FAIL,
      payload: error.response?.data?.message || "Request failed",
    });
  }
};

// Set Token Details
export const setTokenDetails = () => async (dispatch) => {
  dispatch({ type: SET_TOKEN_DETAILS_REQUEST });

  try {
    const token = sessionStorage.getItem("token");
    const user = JSON.parse(sessionStorage.getItem("user"));

    if (token && user) {
      dispatch({
        type: SET_TOKEN_DETAILS_SUCCESS,
        payload: { token, user },
      });
    } else {
      throw new Error("No token found");
    }
  } catch (error) {
    dispatch({
      type: SET_TOKEN_DETAILS_FAIL,
      payload: error.message || "Failed to set token details",
    });
  }
};

// Clear Token Details
export const clearTokenDetails = () => (dispatch) => {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("user");
  dispatch({ type: CLEAR_TOKEN_DETAILS });
};

// Clear Errors
export const clearErrors = () => (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
