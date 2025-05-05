export function TaskCard({ task }) {
    return (
        <div>
            <h1>{task.title}</h1>
            <p>{task.description}</p> 
            <hr /> 
        </div>
    );
}

// export function TaskCard({ task }) {
//     return (
//         <table border="1" cellpadding="5" cellspacing="0">
//             <thead>
//                 <tr>
//                     <th>Tareas</th>
//                     <th>Descripción Tarea</th>
//                     <th>Estado</th>
//                 </tr>
//             </thead>
//             <tbody>
//                     <tr key={task.id}>
//                         <td>{task.title}</td>
//                         <td>{task.description}</td>
//                         <td>{task.done}</td>
//                     </tr>
//             </tbody>
//         </table>
//     );
// }
