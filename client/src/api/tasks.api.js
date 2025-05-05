import axios from 'axios';

export const getAllTasks = () => {
    return axios.get('http://localhost:8000/gestor_tareas/api/v1/gestor_tareas/')
}