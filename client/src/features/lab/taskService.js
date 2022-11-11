import axios from "axios";

const API_URL = 'api/labs/';

const getTasks = async(route) => {
  const response = await axios.get(`${API_URL}${route.labId}/projects/${route.projectId}/tasks/`);

  return response.data;

}

const addTask = async(taskData) => {
  console.log(`${API_URL}${taskData.labId}/projects/${taskData.projectId}/tasks/`)
  const response = await axios.post(`/${API_URL}${taskData.labId}/projects/${taskData.projectId}/tasks/`, taskData);
 
  return response.data;
}

const editTask = async(taskData) => {
  console.log(taskData);
  const response = await axios.put(`/${API_URL}${taskData.labId}/projects/${taskData.projectId}/tasks/${taskData.taskId}`, taskData);

  return response.data;
}

const deleteTask = async(taskData) => {
  const response = await axios.delete(`/${API_URL}${taskData.labId}/projects/${taskData.projectId}/tasks/${taskData.taskId}`);

  return response.data;
}

export const taskService = {
  getTasks,
  addTask,
  editTask,
  deleteTask
}