import { Router, Request, Response } from "express";
import { TodoRoutes } from './todo/routes';


export class AppRouter {


    static routes(): Router{


        const routes =  Router();

        routes.use('/api/todos', TodoRoutes.route);

        return routes;

    }
}

