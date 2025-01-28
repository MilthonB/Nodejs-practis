// Importa Router desde la librería 'express' y TodoRoutes desde el archivo 'todos/routes'
import { Router } from "express";
import { TodoRoutes } from "./todos/routes";

// Define una clase 'AppRoutes' que se encargará de organizar las rutas de la aplicación
export class AppRoutes {

    // Método estático 'route' que retorna un Router configurado con todas las rutas de la aplicación
    static get route(): Router {

        // Crea una nueva instancia de Router de Express
        const router = Router();

        // Usa las rutas definidas en 'TodoRoutes' bajo la ruta '/api/todos'
        // Esto configura que todas las rutas relacionadas con 'todos' estarán bajo '/api/todos'
        router.use('/api/todos', TodoRoutes.routes);

        // Devuelve el Router con las rutas configuradas
        return router;
    }
}
