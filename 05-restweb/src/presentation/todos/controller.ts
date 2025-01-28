// Importación de tipos de Express para la gestión de solicitudes y respuestas
import { Request, Response } from "express";
// Importación del cliente Prisma para interactuar con la base de datos (aunque no se usa directamente aquí)
import { prisma } from "../../data/postgres";
// Importación de los DTOs para la creación y actualización de "todos"
import { CreateTodoDtos, UpdateTodoDtos } from "../../domain/dtos";
// Importación de las clases que representan los casos de uso del dominio, como crear, eliminar, obtener y actualizar "todos"
import { CreateTodo, DeleteTodo, GetTodo, GetTodos, TodoRepository, UpdateTodo } from "../../domain";

// Definición de datos de ejemplo para simular los "todos" (en un escenario real, esto sería reemplazado por la base de datos)
const todos = [
    { id: 1, text: 'Buy milk', createdAt: new Date() },
    { id: 2, text: 'Buy beer', createdAt: new Date() },
];

// Definición de la clase 'TodosController', que gestiona las solicitudes relacionadas con los "todos"
export class TodosController {

    // Inyección de dependencias (DI): El repositorio de "todos" es pasado al controlador para manejar las operaciones
    constructor(private readonly todoRepository: TodoRepository) {}


    // Método para obtener todos los "todos" de la base de datos
    public getTodos = (req: Request, res: Response) => {
        // Se crea una instancia del caso de uso 'GetTodos' para obtener todos los "todos" del repositorio
        new GetTodos(this.todoRepository)
            .execute()  // Ejecuta el caso de uso
            .then(todo => res.json(todos))  // Si tiene éxito, devuelve los "todos" en formato JSON
            .catch(error => res.status(400).json({ error }));  // Si ocurre un error, responde con el código de estado 400 y el mensaje de error
    }

    // Método para obtener un "todo" por su ID
    public getTodoById = (req: Request, res: Response) => {
        // Obtiene el ID del "todo" desde los parámetros de la URL
        const id = +req.params.id;

        // Se crea una instancia del caso de uso 'GetTodo' para obtener un "todo" por su ID
        new GetTodo(this.todoRepository)
            .execute(id)  // Ejecuta el caso de uso con el ID del "todo"
            .then(todo => res.json(todo))  // Si el "todo" se encuentra, lo devuelve en formato JSON
            .catch(error => res.status(400).json({ error }))  // Si ocurre un error, responde con un código de estado 400
    }

    // Método para crear un nuevo "todo"
    public createTodo = async (req: Request, res: Response) => {
        // Utiliza el DTO de creación para validar y estructurar los datos del "todo" a partir del cuerpo de la solicitud
        const [error, createTodoDto] = CreateTodoDtos.create(req.body);
        // Si hay un error con los datos de entrada, responde con un error 404
        if (error) res.status(404).json({ error });

        // Se crea una instancia del caso de uso 'CreateTodo' para crear un nuevo "todo"
        new CreateTodo(this.todoRepository)
            .execute(createTodoDto!)  // Ejecuta el caso de uso con el DTO creado
            .then(todo => res.json(todo))  // Si se crea correctamente, devuelve el "todo" en formato JSON
            .catch(error => res.status(400).json({ error }))  // Si ocurre un error, responde con un código de estado 400
    }

    // Método para actualizar un "todo"
    public acteTodo = (req: Request, res: Response) => {
        // Obtiene el ID del "todo" desde los parámetros de la URL
        const id = +req.params.id;
        // Utiliza el DTO de actualización para estructurar los datos del "todo" a partir del cuerpo de la solicitud
        const [error, updateTodoDto] = UpdateTodoDtos.create({ ...req.body, id });
        // Si hay un error con los datos de entrada, responde con un error 404
        if (error) res.status(404).json({ error });

        // Se crea una instancia del caso de uso 'UpdateTodo' para actualizar el "todo" con los nuevos datos
        new UpdateTodo(this.todoRepository)
            .execute(updateTodoDto!)  // Ejecuta el caso de uso con el DTO de actualización
            .then(todo => res.json(todo))  // Si se actualiza correctamente, devuelve el "todo" actualizado en formato JSON
            .catch(error => res.status(400).json({ error }));  // Si ocurre un error, responde con un código de estado 400
    }

    // Método para eliminar un "todo" por su ID
    public delTodo = async (req: Request, res: Response) => {
        // Obtiene el ID del "todo" desde los parámetros de la URL
        const id = +req.params.id;
        // Se crea una instancia del caso de uso 'DeleteTodo' para eliminar el "todo" por su ID
        new DeleteTodo(this.todoRepository)
            .execute(id)  // Ejecuta el caso de uso con el ID del "todo" a eliminar
            .then(todo => res.json(todo))  // Si el "todo" es eliminado correctamente, lo devuelve en formato JSON
            .catch(error => res.status(400).json({ error }));  // Si ocurre un error, responde con un código de estado 400
    }
}
