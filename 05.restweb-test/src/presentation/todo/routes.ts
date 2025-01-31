import { Router } from "express";
import { TodoController } from "./controller";
import { TodoRepositoryImp } from "../../infrastructure/repositories/todo.repositoriesimp";
import { TodoDataSourcesImp } from "../../infrastructure/datasources/todo.datasourceimp";





export class TodoRoutes{


    static get route(): Router{
    
        const routes = Router();
        
        // las ruutas se tiene que mandar al caso de uso de cada un, en este caso el caos de uso necesita 
        // Un repositorio y un repositorio necesita un Datasources

        const todoDataSources =  new TodoDataSourcesImp();

        const todoRepositorie =  new TodoRepositoryImp(todoDataSources);

        const todoController =  new TodoController(todoRepositorie);

        routes.get('/', todoController.getTodos); //controllador
        routes.get('/:id', todoController.getTodoById); //controllador

        routes.post('/', todoController.createTodo); //controllador

        routes.put('/:id', todoController.acteTodo); //controllador
        routes.delete('/:id', todoController.delTodo); //controllador


        

        return routes;

    }

}