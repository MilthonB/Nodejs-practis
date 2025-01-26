import { Router } from "express";
import { TodosController } from "./controller";


export class TodoRoutes {


    static get routes(): Router{

        const route = Router();
        const todocontroller = new TodosController(); 
        
        route.get('/', todocontroller.getTodos );
        route.get('/:id', todocontroller.getTodoById);
        route.post('/', todocontroller.createTodo);
        route.put('/:id', todocontroller.actTodo);
        route.delete('/:id', todocontroller.delTodo);


        return route;

    }

}