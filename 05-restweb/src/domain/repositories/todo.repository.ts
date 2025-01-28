import { CreateTodoDtos, UpdateTodoDtos } from "../dtos";
import { TodoEntity } from "../entities/todo.entity";
import { TodoDataSource } from "../datasources/todo.datasource";




// Definición de la clase abstracta TodoRepository, que actúa como un contrato para las implementaciones de repositorios de "Todo"
export abstract class TodoRepository {

    // Método abstracto para crear un nuevo "todo"
    // Acepta un objeto CreateTodoDtos como entrada y retorna una promesa que resuelve en una instancia de TodoEntity
    abstract create(createTodoDTO: CreateTodoDtos): Promise<TodoEntity>;

    // Método abstracto para obtener todos los "todos"
    // Retorna una promesa que resuelve en un arreglo de instancias de TodoEntity
    abstract getAll(): Promise<TodoEntity[]>;

    // Método abstracto para encontrar un "todo" por su ID
    // Acepta un número como ID y retorna una promesa que resuelve en una instancia de TodoEntity
    abstract findById(id: number): Promise<TodoEntity>;

    // Método abstracto para actualizar un "todo" por su ID
    // Acepta un objeto UpdateTodoDtos como entrada y retorna una promesa que resuelve en una instancia de TodoEntity
    abstract updateById(updateTodoDto: UpdateTodoDtos): Promise<TodoEntity>;

    // Método abstracto para eliminar un "todo" por su ID
    // Acepta un número como ID y retorna una promesa que resuelve en una instancia de TodoEntity
    abstract deleteById(id: number): Promise<TodoEntity>;

}
