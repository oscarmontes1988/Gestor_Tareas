// import { Link } from 'react-router-dom'

// export function Navigation() {
//     return (
//         <div>

//             <Link to="/tasks"><h1>Task App</h1></Link>
//             <Link to="/tasks-create">create task</Link>
//         </div>
//     )
// }

import { Link } from "react-router-dom";
import "../index.css"; // Asegúrate de importar los estilos si aún no lo haces

export function Navigation() {
  return (
    <nav className="navbar">
      <Link to="/tasks-create" className="navbar-button">
        <img className="icon-img"
          src="https://res.cloudinary.com/dfed81ssz/image/upload/v1746559415/CREAR1_vthsa3.png"
          alt="Crear Tareas"
        />
        <h5 style={{ textAlign: "center", margin: 0 }}>Crear Tareas</h5>
      </Link>
      <Link to="/tasks" className="navbar-button">
        <img className="icon-img"
          src="https://res.cloudinary.com/dfed81ssz/image/upload/v1746559415/CONSULTAR1_nn3bd2.png"
          alt="Consultar Tareas"
        />
        <h5 style={{ textAlign: "center", margin: 0 }}>Consultar Tareas</h5>
      </Link>
    </nav>
  );
}
