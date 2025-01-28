// Importación de promesas desde "dns", aunque parece innecesario en este contexto
import { promises } from "dns";
// Importación de los DTOs y la entidad desde el dominio
import { CreateTodoDtos, UpdateTodoDtos } from "../dtos";
import { TodoEntity } from "../entities/todo.entity";

// Definición de la clase abstracta TodoDataSource, que se usa como una interfaz para las implementaciones concretas
export abstract class TodoDataSource {

    // Método abstracto para crear un "todo" en la base de datos. Debe ser implementado en las clases concretas.
    abstract create( createTodoDTO: CreateTodoDtos ): Promise<TodoEntity>;

    // Método abstracto para obtener todos los "todos" en la base de datos. Debe ser implementado en las clases concretas.
    // Aquí se menciona la idea de agregar paginación en el futuro.
    abstract getAll(): Promise<TodoEntity[]>;

    // Método abstracto para encontrar un "todo" por su ID en la base de datos.
    // Debe ser implementado en las clases concretas.
    abstract findById( id: number ): Promise<TodoEntity>;

    // Método abstracto para actualizar un "todo" por su ID.
    // Debe ser implementado en las clases concretas.
    abstract updateById( updateTodoDto: UpdateTodoDtos ): Promise<TodoEntity>;

    // Método abstracto para eliminar un "todo" por su ID.
    // Debe ser implementado en las clases concretas.
    abstract deleteById( id: number ): Promise<TodoEntity>;
}
