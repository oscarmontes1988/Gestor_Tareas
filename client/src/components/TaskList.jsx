import { useEffect, useState } from "react";
import { getAllTasks, deleteTask } from "../api/tasks.api"; // Asegúrate de que las funciones estén bien importadas
import { useNavigate } from "react-router-dom";

export function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedDateFilter, setSelectedDateFilter] = useState("");
  const navigate = useNavigate();

  // Define la función loadTasks fuera de useEffect para poder usarla en otros lugares
  const loadTasks = async () => {
    const res = await getAllTasks();
    setTasks(res.data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleDeleteTask = async (taskId, taskTitle) => {
    const confirmDelete = window.confirm(
      `¿Está seguro que desea eliminar el registro con ID: ${taskId} y Nombre de tarea: "${taskTitle}"?`
    );

    if (!confirmDelete) return;

    await deleteTask(taskId);
    loadTasks();
  };

  const filterAndSortTasks = () => {
    let filteredTasks = tasks;

    // Filtro por estado
    if (selectedStatus) {
      filteredTasks = filteredTasks.filter(
        (task) => task.status === selectedStatus
      );
    }

    // Orden por fecha
    if (selectedDateFilter === "mas_recientes") {
      filteredTasks = [...filteredTasks].sort(
        (a, b) => new Date(b.due_date) - new Date(a.due_date)
      );
    } else if (selectedDateFilter === "mas_antiguos") {
      filteredTasks = [...filteredTasks].sort(
        (a, b) => new Date(a.due_date) - new Date(b.due_date)
      );
    }

    return filteredTasks;
  };

  const displayedTasks = filterAndSortTasks();

  return (
    <div className="task-table-container">
      <div className="filtros-container">
        <div className="filtro-estado">
          <label htmlFor="statusFilter" className="filtro-label">
            Filtrar por estado:
          </label>
          <select
            id="statusFilter"
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="filtro-select"
          >
            <option value="">Todos</option>
            <option value="pendiente">Pendiente</option>
            <option value="en progreso">En Progreso</option>
            <option value="completada">Completada</option>
          </select>
        </div>

        <div className="filtro-fecha">
          <label htmlFor="dateFilter" className="filtro-label">
             Ordenar por fecha: 
          </label>
          <select
            id="dateFilter"
            value={selectedDateFilter}
            onChange={(e) => setSelectedDateFilter(e.target.value)}
            className="filtro-select"
          >
            <option value="">Sin orden</option>
            <option value="mas_recientes">Más Recientes</option>
            <option value="mas_antiguos">Más Antiguos</option>
          </select>
        </div>
      </div>

      <table className="task-table">
        <thead>
          <tr>
            <th className="table-header">Nombre de la tarea</th>
            <th className="table-header">Descripción</th>
            <th className="table-header">Fecha de Vencimiento</th>
            <th className="table-header">Prioridad</th>
            <th className="table-header">Estado</th>
            <th className="table-header">Categoría</th>
            <th className="table-header">Acciones</th>
          </tr>
        </thead>

        <tbody>
          {displayedTasks.map((task, index) => (
            <tr key={index}>
              <td className="table-cell">{task.title}</td>
              <td className="table-cell">{task.description}</td>
              <td className="table-cell">
                {task.due_date
                  ? new Date(task.due_date).toISOString().split("T")[0]
                  : "No especificado"}
              </td>
              <td className="table-cell">{task.priority}</td>
              <td
                className={
                  task.status === "pendiente"
                    ? "estado-rojo"
                    : task.status === "en progreso"
                    ? "estado-amarillo"
                    : task.status === "completada"
                    ? "estado-verde"
                    : ""
                }
              >
                {task.status}
              </td>
              <td
                className={
                  task.category?.trim().toLowerCase() === "urgente e importante"
                    ? "categoria-roja"
                    : task.category?.trim().toLowerCase() ===
                      "urgente y no importante"
                    ? "categoria-naranja"
                    : task.category?.trim().toLowerCase() ===
                      "no urgente, pero importante"
                    ? "categoria-amarilla"
                    : task.category?.trim().toLowerCase() ===
                      "no urgente y no importante"
                    ? "categoria-verde"
                    : ""
                }
              >
                {task.category}
              </td>

              <td>
                <button
                  onClick={() => navigate(`/tasks/edit/${task.id}`)}
                  className="btn-editar"
                >
                  Editar
                </button>
                <button
                  onClick={() => handleDeleteTask(task.id, task.title)}
                  className="btn-eliminar"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
