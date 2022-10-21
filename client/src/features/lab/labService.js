import axios from 'axios';

const API_URL = 'api/lab/';

const registerLab = async (labData, userToken) => {
  const response = await axios.post(API_URL, labData, {
    headers: {
      'Authorization': `Bearer ${userToken}`
    }
  });

  if (response.data) {
    localStorage.setItem('lab', JSON.stringify(response.data))
  }

  return response.data;
}

export const labService = {
  registerLab
}