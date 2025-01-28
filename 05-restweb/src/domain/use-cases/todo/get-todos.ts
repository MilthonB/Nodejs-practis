// Importación de los DTOs y entidades necesarias para el caso de uso
import { CreateTodoDtos, UpdateTodoDtos } from "../../dtos"; // DTOs utilizados para la creación y actualización de "todos" (aunque no se usan directamente aquí)
import { TodoEntity } from "../../entities/todo.entity"; // Entidad que representa un "todo" en el dominio
import { TodoRepository } from "../../repositories/todo.repository"; // Repositorio donde se realizan las operaciones de persistencia de "todos"

// Interfaz que define el caso de uso para obtener todos los "todos"
// Esta interfaz garantiza que cualquier implementación del caso de uso tendrá un método `execute` que no recibe parámetros y retorna una promesa con un array de entidades "todo".
export interface GetTodosUseCase {
    execute(): Promise<TodoEntity[]>; // Método que devuelve una lista de "todos"
}

// Implementación concreta del caso de uso para obtener todos los "todos"
export class GetTodos implements GetTodosUseCase {

    // Inyección de dependencias: en este caso, se inyecta un repositorio de "todo"
    constructor(private readonly repository: TodoRepository) {}

    // Método que ejecuta la lógica del caso de uso para obtener todos los "todos"
    // Este método no recibe parámetros y simplemente llama al repositorio para obtener todos los "todos" disponibles
    execute(): Promise<TodoEntity[]> {
        return this.repository.getAll(); // Llamada al repositorio para obtener todos los "todos"
    }
}
