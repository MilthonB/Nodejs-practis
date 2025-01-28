// Importación del Router de Express para manejar las rutas de la aplicación
import { Router } from "express";
// Importación del controlador que maneja las operaciones de los "todos"
import { TodosController } from "./controller";
// Importación de la interfaz del origen de datos para los "todos"
import { TodoDataSource } from "../../domain";
// Importación de la implementación concreta del origen de datos de los "todos"
import { TodoDataSourceImp } from "../../infrastructure/datasources/todo.datasources.imp";
// Importación de la implementación del repositorio para los "todos"
import { TodoRepositoryImp } from "../../infrastructure/repositories/todo.repository";

// Clase que define las rutas de la API para manejar los "todos"
export class TodoRoutes {

    // Método estático para obtener las rutas de los "todos"
    static get routes(): Router {

        // Se crea una instancia del Router para definir las rutas
        const route = Router();

        // Se instancia el origen de datos de "todos" (que interactúa con la base de datos)
        const datasources = new TodoDataSourceImp();
        
        // Se instancia el repositorio de "todos", que utilizará el origen de datos para obtener los "todos"
        const todoRepository = new TodoRepositoryImp(datasources);

        // Se instancia el controlador 'TodosController', pasando el repositorio como argumento
        const todocontroller = new TodosController(todoRepository);

        // Definición de la ruta GET para obtener todos los "todos" (GET /api/todos)
        route.get('/', todocontroller.getTodos);

        // Definición de la ruta GET para obtener un "todo" por su ID (GET /api/todos/:id)
        route.get('/:id', todocontroller.getTodoById);

        // Definición de la ruta POST para crear un nuevo "todo" (POST /api/todos)
        route.post('/', todocontroller.createTodo);

        // Definición de la ruta PUT para actualizar un "todo" por su ID (PUT /api/todos/:id)
        route.put('/:id', todocontroller.acteTodo);

        // Definición de la ruta DELETE para eliminar un "todo" por su ID (DELETE /api/todos/:id)
        route.delete('/:id', todocontroller.delTodo);

        // Se devuelve el objeto Router con todas las rutas definidas
        return route;
    }
}
