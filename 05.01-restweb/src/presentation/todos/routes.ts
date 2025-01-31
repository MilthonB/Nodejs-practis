import { Router } from "express";
import { TodoDataSources } from "../../domain/datasources/todo-datasources";
import { TodoDataSourcesImp } from "../../infrastructure/datasources/todo-datasourcesImp";
import { TodoRepositoriesImp } from "../../infrastructure/repositories/todo-repositoriesImp";
import { TodoController } from "./controller";



export class TodoRoute{


    static get todoroutes():Router{
        const routes = Router();

        const tododatasource =  new TodoDataSourcesImp();

        const todorepositorie =  new TodoRepositoriesImp(tododatasource);

        const todocontroller =  new TodoController(todorepositorie);

        routes.get('/:id', todocontroller.getTodos); //controllers


        return routes;


    }

}