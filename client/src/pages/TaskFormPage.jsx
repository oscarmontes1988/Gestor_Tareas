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
    await createTask(data);
    navigate("/tasks");
  });

  return (
    <div className="task-form-container">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Nombre de la tarea"
          {...register("title", { required: true })}
        />
        {errors.title && <span>El title es requerido</span>}

        <textarea
          rows="3"
          placeholder="Descripción"
          {...register("description", { required: true })}
        ></textarea>
        {errors.description && <span>Description es requerido</span>}

        <button type="submit">Guardar</button>
      </form>
      {params.id && (
        <button style={{ marginTop: '1rem', backgroundColor: 'crimson' }}>
          Eliminar
        </button>
      )}
    </div>
  );
}
