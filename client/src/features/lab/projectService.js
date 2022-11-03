import axios from 'axios';

const API_URL = 'api/labs/'; // api/labs/:labId/projects

const getProjects = async(labId) => {
  
  const response = await axios.get(`${API_URL}${labId}/projects/`)

  return response.data;

}

const createProject = async(projectData) => {

  console.log(`LabID: ${projectData.labId} @ createProject service`)
  const response = await axios.post(`${API_URL}${projectData.labId}/projects/`, projectData);

  return response.data;

}

const deleteProject = async(projectData) => {
  const response = await axios.delete(`${API_URL}${projectData.labId}/projects/${projectData.projectId}`);

  return response.data
}

export const projectService = {
  getProjects,
  createProject,
  deleteProject
}