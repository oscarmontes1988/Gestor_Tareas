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

import { useEffect, useState } from "react";
import { getAllTasks, getTaskById, updateTask, deleteTask } from "../api/tasks.api";

export function TasksList() {
    const [tasks, setTasks] = useState([]);

    const loadTasks = async () => {
        const res = await getAllTasks();
        setTasks(res.data);
    };

    useEffect(() => {
        loadTasks();
    }, []);

    const handleEditTask = async (taskId) => {
        const res = await getTaskById(taskId);
        const task = res.data;
        const newTitle = prompt('Ingrese el nuevo título:', task.title);
        const newDescription = prompt('Ingrese la nueva descripción:', task.description);
        if (newTitle && newDescription) {
            await updateTask(taskId, { title: newTitle, description: newDescription });
            await loadTasks();
        }
    };

    const handleDeleteTask = async (taskId) => {
        await deleteTask(taskId);
        await loadTasks();
    };

    return (
        <div className="task-table-container">
            <table className="task-table">
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Descripción</th>
                        <th>Completada</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task, index) => (
                        <tr key={index}>
                            <td>{task.title}</td>
                            <td>{task.description}</td>
                            <td>{task.done ? "✔️" : "❌"}</td>
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
