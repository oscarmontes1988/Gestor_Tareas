// export function TaskCard({ task }) {
//     return (
//         <div>
//             <h1>{task.title}</h1>
//             <p>{task.description}</p> 
//             <hr /> 
//         </div>
//     );
// }

export function TaskTable({ tasks }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Tareas</th>
                    <th>Descripción Tarea</th>
                    <th>Estado</th>
                </tr>
            </thead>
            <tbody>
                {tasks.map((task, index) => (
                    <tr key={index}>
                        <td>{task.title}</td>
                        <td>{task.description}</td>
                        <td>{task.status}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
