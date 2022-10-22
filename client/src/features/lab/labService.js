import axios from 'axios';

const API_URL = 'api/labs/';

const registerLab = async (labData, userToken) => {
  const response = await axios.post(API_URL, labData, {
    headers: {
      Authorization: `Bearer ${userToken}`
    }
  });

  return response.data;
}

const getLab  = async (token) => {
  const response = await axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  if (response) {
    console.log('get lab print');
  }
  
  return response.data;
}

const joinLab = async (labData, token) => {
  const response = await axios.get(`${API_URL}/joinLab`, labData, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
}

export const labService = {
  registerLab,
  getLab
}