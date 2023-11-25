import axios from "axios";
export const BASE_API = process.env.REACT_APP_API_BASE;
export const USERS_API = `${BASE_API}/users`;
export const signin = async (credentials) => {
  const response = await axios.post(`${USERS_API}/signin`, credentials);
  return response.data;
};

export const account = async () => {
  const response = await axios.put(`${USERS_API}/account`);
  return response.data;
};
