// Importación de los DTOs y entidades necesarias para el caso de uso
import { CreateTodoDtos } from "../../dtos"; // DTO que contiene la estructura de datos para crear un "todo"
import { TodoEntity } from "../../entities/todo.entity"; // Entidad que representa un "todo" en el dominio
import { TodoRepository } from "../../repositories/todo.repository"; // Repositorio donde se realizan las operaciones de persistencia de "todos"

// Interfaz que define el caso de uso para la creación de un "todo"
// Esta interfaz garantiza que cualquier implementación del caso de uso tendrá un método `execute` que recibe un DTO y retorna una promesa con una entidad "todo".
export interface CreateTodoUseCase {
    execute(dto: CreateTodoDtos): Promise<TodoEntity>;
}

// Implementación concreta del caso de uso para crear un "todo"
export class CreateTodo implements CreateTodoUseCase {

    // Inyección de dependencias: en este caso, se inyecta un repositorio de "todo"
    constructor(private readonly repository: TodoRepository) {}

    // Método que ejecuta la lógica del caso de uso para crear un "todo"
    // Este método recibe un DTO, lo pasa al repositorio para su creación y retorna una promesa con la entidad "todo" creada
    execute(dto: CreateTodoDtos): Promise<TodoEntity> {
        return this.repository.create(dto); // Llamada al repositorio para crear el "todo"
    }
}
