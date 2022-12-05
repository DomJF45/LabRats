import axios from 'axios';

const API_URL = 'api/labs/';

const registerLab = async (labData, userToken) => {

  const response = await axios.post(API_URL, labData, {
    headers: {
      Authorization: `Bearer ${userToken}`
    }
  }); // stores data retrieved from lab route in Server, sends body from user as well as token header
  // api/labs/

  return response.data; // returns the response from the server
}

const getLab  = async (token) => {

  const response = await axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }) // stores array of labs from Lab route in Server
  // api/labs/

  localStorage.setItem('labs', JSON.stringify(response.data))
  
  return response.data; // returns response from data as Labs[]
}

const getSingleLab = async(labId) => {
  
  // console.log(`Lab ID at getSingle Lab: ${labId}`)
  const response = await axios.get(`${API_URL}getOneLab`, {
    headers: {
      labId: labId
    }
  }) // stores single lab object from Lab route in server
  // api/labs/getOneLab route
  localStorage.setItem(`lab:${labId}`, JSON.stringify(response.data))
  return response.data; // returns single lab
}

const joinLab = async (labData, token) => {
  // console.log(labData)
  const response = await axios.post(`${API_URL}join`, labData, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }); // post request to lab, allows user to join, sends body and token for auth, responds with labObject
  // api/labs/join route

  localStorage.setItem(`labs`, JSON.stringify(response.data))

  return response.data;
}

const clearLab = async () => {
  localStorage.clear();
}

export const labService = {
  registerLab,
  getLab,
  joinLab,
  getSingleLab,
  clearLab
}