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
import { getAllTasks } from "../api/tasks.api";

export function TasksList() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        async function loadTasks() {
            const res = await getAllTasks();
            setTasks(res.data);
        }
        loadTasks();
    }, []);

    return (
        <div className="task-table-container">
            <table className="task-table">
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Descripción</th>
                        <th>Completada</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task) => (
                        <tr key={task.id}>
                            <td>{task.title}</td>
                            <td>{task.description}</td>
                            <td>{task.done ? "✔️" : "❌"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}