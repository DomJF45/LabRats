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
  
  return response.data;
}

const getSingleLab = async(labId) => {
  
  console.log(`Lab ID at getSingle Lab: ${labId}`)
  const response = await axios.get(`${API_URL}getOneLab`, {
    headers: {
      labId: labId
    }
  })

  return response.data;
}

const joinLab = async (labData, token) => {
  console.log(labData)
  const response = await axios.post(`${API_URL}join`, labData, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
}

export const labService = {
  registerLab,
  getLab,
  joinLab,
  getSingleLab
}