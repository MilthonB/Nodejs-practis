// Importa los tipos Request y Response de Express para tipar las solicitudes y respuestas
import { Request, Response } from "express";
// Importa el cliente de Prisma para interactuar con la base de datos PostgreSQL
import { prisma } from "../../data/postgres";
// Importa los DTOs para crear y actualizar "todo"
import { CreateTodoDtos, UpdateTodoDtos } from "../../domain/dtos";
// Importa la interfaz TodoRepository, que define los métodos para interactuar con la base de datos
import { TodoRepository } from "../../domain";

// Aquí tienes algunos ejemplos de datos ficticios para "todos" (esto se sustituirá por la base de datos)
const todos = [
    { id: 1, text: 'Buy milk', createdAt: new Date() },
    { id: 2, text: 'Buy beer', createdAt: new Date() },
];

// Define la clase 'TodosController', que maneja las operaciones relacionadas con "todos"
export class TodosController {

    //* Inyección de dependencias (DI)
    // El constructor recibe una instancia de TodoRepository para manejar las operaciones de "todo"
    constructor(private readonly todoRepository: TodoRepository) { }

    // Método para obtener todos los "todos"
    public getTodos = async (req: Request, res: Response) => {
        // Obtiene todos los "todos" de la base de datos usando el repositorio
        const todos = await this.todoRepository.getAll();
        // Aquí puedes utilizar Prisma directamente si es necesario
        // const todosDb =  await prisma.todo.findMany();
        // Envía la lista de todos los "todos" como respuesta en formato JSON
        res.json(todos);
    }

    // Método para obtener un "todo" por su ID
    public getTodoById = async (req: Request, res: Response) => {
        const id = +req.params.id; // Convierte el parámetro de la URL a un número

        try {
            // Busca el "todo" en la base de datos por su ID
            const todo = await this.todoRepository.findById(id);
            // Si lo encuentra, lo envía como respuesta
            res.json(todo);
        } catch (error) {
            // Si ocurre un error (por ejemplo, si no se encuentra el "todo"), responde con un código 400 y el error
            res.status(400).json({ error });
        }
    }

    // Método para crear un nuevo "todo"
    public createTodo = async (req: Request, res: Response) => {
        // Crea un DTO para el nuevo "todo" a partir del cuerpo de la solicitud
        const [error, createTodoDto] = CreateTodoDtos.create(req.body);
        
        // Si ocurre un error al crear el DTO, responde con un código 404 y el error
        if (error) return res.status(404).json({ error });
        
        // Crea el nuevo "todo" en la base de datos usando el repositorio
        const todo = await this.todoRepository.create(createTodoDto!);
        
        // Envía el "todo" recién creado como respuesta
        res.json(todo);
    }

    // Método para actualizar un "todo" por su ID
    public actTodo = async (req: Request, res: Response) => {
        // Convierte el ID de la URL a un número
        const id = +req.params.id;
        
        // Crea el DTO para actualizar el "todo", agregando el ID
        const [error, updateTodoDto] = UpdateTodoDtos.create({ ...req.body, id });
        
        // Si ocurre un error al crear el DTO, responde con un código 400 y el error
        if (error) return res.status(400).json({ error });
        
        // Actualiza el "todo" en la base de datos usando el repositorio
        const updatedTodo = await this.todoRepository.updateById(updateTodoDto!);
        
        // Envía el "todo" actualizado como respuesta
        res.json(updatedTodo);
    }

    // Método para eliminar un "todo" por su ID
    public delTodo = async (req: Request, res: Response) => {
        // Convierte el ID de la URL a un número
        const id = +req.params.id;
        
        // Elimina el "todo" en la base de datos usando el repositorio
        const deletedTodo = await this.todoRepository.deleteById(id);
        
        // Envía el resultado de la eliminación como respuesta
        res.json(deletedTodo);
    }
}
