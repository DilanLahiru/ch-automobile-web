// Define the base URL for the API
//export const baseUrl = "http://212.24.110.146:5000";
export const baseUrl = "http://192.168.8.101:3000";

export const API_PATH = {
  AUTH: {
    LOGIN: "/api/customer/login",
    REGISTER: "/api/customer/register",
    GET_LOGIN_USER: "/api/customer/get-login-user",
    LOGOUT: "/api/customer/logout",
  },
  APPOINTMENT: {
    GET_ALL: "/api/appointment/all",
    CREATE: "/api/appointment/create-guest",
    UPDATE: "/api/appointment/update",
    DELETE: "/api/appointment/delete",
    GET_BY_ID: "/api/appointment/get-by-customer-id",
  },
};
