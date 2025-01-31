import { Router, Request, Response } from "express";
import { TodoRoute } from "./todos/routes";



export class AppRoute {


    static routes(): Router{
        const routes =  Router();
        
        routes.use('/api/todos', TodoRoute.todoroutes);
        
        return routes;
    }
}