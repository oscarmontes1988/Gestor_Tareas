import axios from 'axios';

const tasksApi = axios.create({
    baseURL: 'http://localhost:8000/gestor_tareas/api/v1/gestor_tareas/'
})

export const getAllTasks = () => tasksApi.get('/');

export const createTask = (task) => tasksApi.post('/', task);

export const getTaskById = (taskId) => tasksApi.get(`${taskId}/`);

export const updateTask = (taskId, task) => tasksApi.put(`${taskId}/`, task);

export const deleteTask = (taskId) => tasksApi.delete(`${taskId}/`);


