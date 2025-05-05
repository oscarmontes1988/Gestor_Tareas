// import { Link } from 'react-router-dom'

// export function Navigation() {
//     return (
//         <div>
            
//             <Link to="/tasks"><h1>Task App</h1></Link>
//             <Link to="/tasks-create">create task</Link>
//         </div>
//     )
// }

import { Link } from 'react-router-dom';
import '../index.css'; // Asegúrate de importar los estilos si aún no lo haces

export function Navigation() {
    return (
        <nav className="navbar">
            <Link to="/tasks" className="navbar-button">
                Consultar Tareas
            </Link>
            <Link to="/tasks-create" className="navbar-button">
                Crear Tareas
            </Link>
        </nav>
    );
}

