// import { useEffect, useState } from "react";
// import { getAllTasks } from "../api/tasks.api";
// import { TaskCard } from "./TaskCard";

// export function TasksList() {
//     const [tasks, setTasks] = useState([]);

//     useEffect(() => {
//        async function loadTasks() {
//         const res = await getAllTasks()
//         setTasks(res.data);
//        }
//        loadTasks();
//     }, []);

//     return (
//      <div>
//         {tasks.map((task) => (
//             <TaskCard key={task.id} task={task} />
//         ))}
//         </div>
//     );
// }

// import { useEffect, useState } from "react";
// import { getAllTasks, getTaskById, updateTask, deleteTask } from "../api/tasks.api";

// export function TasksList() {
//     const [tasks, setTasks] = useState([]);

//     const loadTasks = async () => {
//         const res = await getAllTasks();
//         setTasks(res.data);
//     };

//     useEffect(() => {
//         loadTasks();
//     }, []);

//     const handleEditTask = async (taskId) => {
//         const res = await getTaskById(taskId);
//         const task = res.data;
//         const newTitle = prompt('Ingrese el nuevo título:', task.title);
//         const newDescription = prompt('Ingrese la nueva descripción:', task.description);
//         if (newTitle && newDescription) {
//             await updateTask(taskId, { title: newTitle, description: newDescription });
//             await loadTasks();
//         }
//     };

//     const handleDeleteTask = async (taskId) => {
//         await deleteTask(taskId);
//         await loadTasks();
//     };

//     return (
//         <div className="task-table-container">
//             <table className="task-table">
//                 <thead>
//                     <tr>
//                         <th>Título</th>
//                         <th>Descripción</th>
//                         <th>Completada</th>
//                         <th>Acciones</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {tasks.map((task, index) => (
//                         <tr key={index}>
//                             <td>{task.title}</td>
//                             <td>{task.description}</td>
//                             <td>{task.done ? "✔️" : "❌"}</td>
//                             <td>
//                                 <button onClick={() => handleEditTask(task.id)}>Editar</button>
//                                 <button onClick={() => handleDeleteTask(task.id)}>Eliminar</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }

import { useEffect, useState } from "react";
import { getAllTasks, updateTask, deleteTask } from "../api/tasks.api"; // Asegúrate de que las funciones estén bien importadas

export function TaskList() {
    const [tasks, setTasks] = useState([]);

    // Define la función loadTasks fuera de useEffect para poder usarla en otros lugares
    const loadTasks = async () => {
        const res = await getAllTasks();
        setTasks(res.data);
    };

    useEffect(() => {
        loadTasks();
    }, []);

    const handleEditTask = async (taskId) => {
        const newTitle = prompt('Ingrese el nuevo título:', taskId.title);
        const newDescription = prompt('Ingrese la nueva descripción:', taskId.description);
        const newPriority = prompt('Ingrese la nueva prioridad:', taskId.priority); // Pide la prioridad
        const newStatus = prompt('Ingrese el nuevo estado:', taskId.status); // Pide el estado
        const newDueDate = prompt('Ingrese la nueva fecha de vencimiento:', taskId.due_date); // Pide la fecha de vencimiento

        // Aquí es donde podrías formatear la fecha
        const formattedDate = new Date(newDueDate).toISOString().split('T')[0];

        await updateTask(taskId, {
            title: newTitle,
            description: newDescription,
            priority: newPriority,
            status: newStatus,
            due_date: formattedDate 
        });

        loadTasks();
    }; 

    const handleDeleteTask = async (taskId) => {
        await deleteTask(taskId);
        loadTasks();
    };

    return (
        <div className="task-table-container">
            <table className="task-table">
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Descripción</th>
                        <th>Prioridad</th>
                        <th>Estado</th>
                        <th>Fecha de Vencimiento</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task, index) => (
                        <tr key={index}>
                            <td>{task.title}</td>
                            <td>{task.description}</td>
                            <td>{task.priority}</td>
                            <td>{task.status}</td>
                            {/* <td>{task.due_date ? new Date(task.due_date).toLocaleString() : 'No especificado'}</td> */}
                            <td>{task.due_date ? new Date(task.due_date).toISOString().split('T')[0] : 'No especificado'}</td>
                            <td>
                                <button onClick={() => handleEditTask(task.id)}>Editar</button>
                                <button onClick={() => handleDeleteTask(task.id)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
