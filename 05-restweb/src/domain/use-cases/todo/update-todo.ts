// Importación de los DTOs, entidades y repositorios necesarios para el caso de uso
import { CreateTodoDtos, UpdateTodoDtos } from "../../dtos"; // DTOs utilizados para la creación y actualización de "todos"
import { TodoEntity } from "../../entities/todo.entity"; // Entidad que representa un "todo" en el dominio
import { TodoRepository } from "../../repositories/todo.repository"; // Repositorio donde se realizan las operaciones de persistencia de "todos"

// Interfaz que define el caso de uso para actualizar un "todo"
// Esta interfaz garantiza que cualquier implementación del caso de uso tendrá un método `execute` que recibe un DTO de actualización y devuelve una promesa con la entidad "todo" actualizada.
export interface UpdateTodoUseCase {
    execute(dto: UpdateTodoDtos): Promise<TodoEntity>; // Método que actualiza un "todo" y devuelve la entidad "todo" actualizada
}

// Implementación concreta del caso de uso para actualizar un "todo"
export class UpdateTodo implements UpdateTodoUseCase {

    // Inyección de dependencias: en este caso, se inyecta un repositorio de "todo"
    constructor(private readonly repository: TodoRepository) {}

    // Método que ejecuta la lógica del caso de uso para actualizar un "todo"
    // Este método recibe un DTO con los datos de actualización y pasa esos datos al repositorio para que realice la operación de actualización en la base de datos.
    execute(dto: UpdateTodoDtos): Promise<TodoEntity> {
        return this.repository.updateById(dto); // Llamada al repositorio para actualizar el "todo" por su ID
    }
}
