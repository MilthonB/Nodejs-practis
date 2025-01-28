// Importación de los DTOs y entidades necesarias para el caso de uso
import { CreateTodoDtos, UpdateTodoDtos } from "../../dtos"; // DTOs utilizados para la creación y actualización de "todos" (aunque no se usan directamente aquí)
import { TodoEntity } from "../../entities/todo.entity"; // Entidad que representa un "todo" en el dominio
import { TodoRepository } from "../../repositories/todo.repository"; // Repositorio donde se realizan las operaciones de persistencia de "todos"

// Interfaz que define el caso de uso para eliminar un "todo"
// Esta interfaz garantiza que cualquier implementación del caso de uso tendrá un método `execute` que recibe un id de tipo number y retorna una promesa con una entidad "todo".
export interface DeleteTodoUseCase {
    execute(id: number): Promise<TodoEntity>;
}

// Implementación concreta del caso de uso para eliminar un "todo"
export class DeleteTodo implements DeleteTodoUseCase {

    // Inyección de dependencias: en este caso, se inyecta un repositorio de "todo"
    constructor(private readonly repository: TodoRepository) {}

    // Método que ejecuta la lógica del caso de uso para eliminar un "todo"
    // Este método recibe un id, lo pasa al repositorio para eliminar el "todo" y retorna una promesa con la entidad "todo" eliminada
    execute(id: number): Promise<TodoEntity> {
        return this.repository.deleteById(id); // Llamada al repositorio para eliminar el "todo" por su id
    }
}
