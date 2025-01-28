// Importación de los DTOs, entidades y repositorios desde el dominio
import { CreateTodoDtos, TodoDataSource, TodoEntity, TodoRepository, UpdateTodoDtos } from "../../domain";

// Implementación concreta del repositorio para manejar las operaciones de "todos"
export class TodoRepositoryImp implements TodoRepository {

    // Constructor para inyectar el datasource, que es la capa que interactúa con la base de datos
    constructor( private readonly datasource: TodoDataSource ) { }

    // Método para crear un nuevo "todo" utilizando el datasource
    create(createTodoDTO: CreateTodoDtos): Promise<TodoEntity> {
        // Llamamos al datasource para crear el "todo" en la base de datos
        return this.datasource.create(createTodoDTO);
    }

    // Método para obtener todos los "todos" desde el datasource
    getAll(): Promise<TodoEntity[]> {
        // Llamamos al datasource para obtener todos los "todos" de la base de datos
        return this.datasource.getAll();
    }

    // Método para encontrar un "todo" por su ID en el datasource
    findById(id: number): Promise<TodoEntity> {
        // Llamamos al datasource para encontrar un "todo" por ID en la base de datos
        return this.datasource.findById(id);
    }

    // Método para actualizar un "todo" por su ID
    updateById(updateTodoDto: UpdateTodoDtos): Promise<TodoEntity> {
        // Llamamos al datasource para actualizar el "todo" en la base de datos
        return this.updateById(updateTodoDto);
    }

    // Método para eliminar un "todo" por su ID utilizando el datasource
    deleteById(id: number): Promise<TodoEntity> {
        // Llamamos al datasource para eliminar el "todo" por ID en la base de datos
        return this.datasource.deleteById(id);
    }
}
