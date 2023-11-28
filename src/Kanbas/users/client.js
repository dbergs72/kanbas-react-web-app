import axios from "axios";

export const BASE_API = process.env.REACT_APP_BASE_API_URL;
export const USERS_API = `${BASE_API}/api/users`;
export const signin = async (credentials) => {
  const response = await axios.post(`${USERS_API}/signin`, credentials);
  return response.data;
};

export const signup = async (credentials) => {
  const response = await axios.post(`${USERS_API}/signup`, credentials);
  return response.data;
};

export const account = async () => {
  const response = await axios.post(`${USERS_API}/account`);
  console.log(response.data);
  return response.data;
};

export const updateUser = async (user) => {
  const response = await axios.put(`${USERS_API}/${user._id}`, user);
  return response.data;
};

export const findAllUsers = async () => {
  const response = await axios.get(`${USERS_API}`);
  return response.data;
};

export const createUser = async (user) => {
  const response = await axios.post(`${USERS_API}`, user);
  return response.data;
};

export const findUserById = async (userId) => {
  const response = await axios.get(`${USERS_API}/${userId}`);
  return response.data;
};

export const deleteUser = async (userId) => {
  const response = await axios.delete(`${USERS_API}/${userId}`);
  return response.data;
};
