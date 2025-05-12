// Importa la librería axios, que se utiliza para hacer solicitudes HTTP.
import axios from 'axios';

// Crea una instancia personalizada de axios con una URL base para reutilizar en las peticiones.
// Esta URL apunta al backend local en el endpoint del API de tareas.
const tasksApi = axios.create({
    baseURL: 'http://localhost:8000/gestor_tareas/api/v1/gestor_tareas/'
})
// Define una función para obtener todas las tareas.
// Realiza una solicitud GET a la URL base (equivalente a /gestor_tareas/api/v1/gestor_tareas/).
export const getAllTasks = () => tasksApi.get('/');

// Define una función para crear una nueva tarea.
// Recibe un objeto 'task' como parámetro y realiza una solicitud POST con ese objeto en el cuerpo.
export const createTask = (task) => tasksApi.post('/', task);

// Define una función para obtener una tarea específica por su ID.
// Realiza una solicitud GET al endpoint con el ID proporcionado.
export const getTaskById = (taskId) => tasksApi.get(`${taskId}/`);

// Define una función para actualizar una tarea existente.
// Recibe el ID de la tarea y un objeto actualizado, y realiza una solicitud PUT.
export const updateTask = (taskId, task) => tasksApi.put(`${taskId}/`, task);

// Define una función para eliminar una tarea específica.
// Realiza una solicitud DELETE al endpoint con el ID de la tarea.
export const deleteTask = (taskId) => tasksApi.delete(`${taskId}/`);