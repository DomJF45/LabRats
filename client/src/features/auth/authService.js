// service is for http request and sending data back, also sets data in local storage

import axios from 'axios';
import { labService } from '../lab/labService';

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

const signoutUser = async () => {
  localStorage.clear();
  // clear method from labservice (logout)
}

const updateUser = async(userData, userToken) => {
  console.log(userData)
  const response = await axios.put(`${API_URL}update`, userData, {
    headers: {
      'Authorization': `Bearer ${userToken}`
    }
  });
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
}

const authService = {
  registerUser,
  loginUser,
  signoutUser,
  updateUser
}

export default authService;