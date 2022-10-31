import axios from 'axios';

const API_URL = 'api/labs/'; // api/labs/:labId/projects

const getProjects = async(labId) => {
  
  const response = await axios.get(`API_URL${labId}/projects`)

  return response.data;

}

const createProject = async(projectData, labId) => {

  const response = await axios.post(`API_URL${labId}/projects`, projectData);

  return response.data;

}

export const projectServce = {
  getProjects,
  createProject
}