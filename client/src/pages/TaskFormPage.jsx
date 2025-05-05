// import { useForm } from "react-hook-form";
// import { createTask } from "../api/tasks.api";
// import { useNavigate, useParams } from "react-router-dom";

// export function TaskFormPage() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const navigate = useNavigate();
//   const params = useParams();

//   const onSubmit = handleSubmit(async (data) => {
//     await createTask(data);
//     navigate("/tasks");
//   });

//   return (
//     <div className="form-container">
//       <form onSubmit={onSubmit} className="task-form">
//         <input
//           type="text"
//           placeholder="Título"
//           {...register("title", { required: true })}
//         />
//         {errors.title && <span>El título es requerido</span>}

//         <textarea
//           rows="3"
//           placeholder="Descripción"
//           {...register("description", { required: true })}
//         ></textarea>
//         {errors.description && <span>La descripción es requerida</span>}

//         <input
//           type="datetime-local"
//           {...register("due_date")}
//         />

//         <select {...register("priority", { required: true })}>
//           <option value="">Seleccione prioridad</option>
//           <option value="Baja">Baja</option>
//           <option value="Media">Media</option>
//           <option value="Alta">Alta</option>
//         </select>
//         {errors.priority && <span>La prioridad es requerida</span>}

//         <select {...register("status", { required: true })}>
//           <option value="">Seleccione estado</option>
//           <option value="Pendiente">Pendiente</option>
//           <option value="En progreso">En progreso</option>
//           <option value="Completada">Completada</option>
//         </select>
//         {errors.status && <span>El estado es requerido</span>}

//         <button>Guardar</button>
//       </form>
//       {params.id && <button>Eliminar</button>}
//     </div>
//   );
// }
import { useForm } from "react-hook-form";
import { createTask } from "../api/tasks.api";
import { useNavigate, useParams } from "react-router-dom";

export function TaskFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const params = useParams();

  const onSubmit = handleSubmit(async (data) => {
    try {
      const taskData = {
        title: data.title,
        description: data.description,
        due_date: data.due_date,
        priority: data.priority,
        status: data.status
      };

      await createTask(taskData);
      navigate("/tasks");
    } catch (error) {
      console.error("Error al crear la tarea", error);
    }
  });

  return (
   <div className="form-container">
    <form onSubmit={onSubmit} className="task-form">
      <input
        type="text"
        placeholder="Título"
        {...register("title", { required: true })}
      />
      {errors.title && <span>El título es requerido</span>}

      <textarea
        rows="3"
        placeholder="Descripción"
        {...register("description", { required: true })}
      ></textarea>
      {errors.description && <span>La descripción es requerida</span>}

      <input
        type="date"
        {...register("due_date")}
        placeholder="YYYY-MM-DD"
      />

      <select {...register("priority", { required: true })}>
        <option value="">Selecciona prioridad</option>
        <option value="baja">Baja</option>
        <option value="media">Media</option>
        <option value="alta">Alta</option>
      </select>
      {errors.priority && <span>La prioridad es requerida</span>}

      <select {...register("status", { required: true })}>
        <option value="">Selecciona estado</option>
        <option value="pendiente">Pendiente</option>
        <option value="en progreso">En Progreso</option>
        <option value="completada">Completada</option>
      </select>
      {errors.status && <span>El estado es requerido</span>}

      <button type="submit">Guardar</button>
    </form>
    </div>
  );
}


