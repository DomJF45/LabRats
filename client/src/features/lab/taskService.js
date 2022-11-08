import axios from "axios";

const API_URL = 'api/labs/';

const getTasks = async(route) => {

  const response = await axios.get(`${API_URL}${route.labId}/projects/${route.projectId}/tasks/`);

  return response.data;

}

const addTask = async(taskData) => {
  console.log(`${API_URL}${taskData.labId}/projects/${taskData.projectId}/tasks/`)
  const response = await axios.post(`/${API_URL}${taskData.labId}/projects/${taskData.projectId}/tasks/`, taskData);;
  // try {
  //   response = await axios.post(`/${API_URL}${taskData.labId}/projects/${taskData.projectId}/tasks/`, taskData);
  // } catch ( error ) {
  //   console.log(error)
  // }

  return response.data;
}

export const taskService = {
  getTasks,
  addTask
}