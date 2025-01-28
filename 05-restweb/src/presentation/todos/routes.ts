import { Router } from "express";
import { TodosController } from "./controller";
import { TodoDataSource } from "../../domain";
import { TodoDataSourceImp } from "../../infrastructure/datasources/todo.datasources.imp";
import { TodoRepositoryImp } from "../../infrastructure/repositories/todo.repository";


export class TodoRoutes {


    static get routes(): Router{

        const route = Router();
        const datasources = new TodoDataSourceImp();
        const todoRepository = new TodoRepositoryImp(datasources);

        const todocontroller = new TodosController( todoRepository ); 
        
        route.get('/', todocontroller.getTodos );
        route.get('/:id', todocontroller.getTodoById);
        route.post('/', todocontroller.createTodo);
        
        route.put('/:id', todocontroller.acteTodo);
        route.delete('/:id', todocontroller.delTodo);


        return route;

    }

}