// service is for http request and sending data back, also sets data in local storage

import axios from 'axios';

const API_URL = '/api/users/';

// takes in user data from authService
const registerUser = async (userData) => {
  const response = await axios.post(API_URL, userData);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;
}

const loginUser = async(userData) => {
  const response = await axios.post(`${API_URL}login`, userData);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;
}

const signoutUser = () => {
  localStorage.removeItem('user');
}

const authService = {
  registerUser,
  loginUser,
  signoutUser
}

export default authService;