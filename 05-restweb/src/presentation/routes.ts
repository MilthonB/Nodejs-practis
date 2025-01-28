import { Request, Response, Router } from "express";
import { TodosController } from "./todos/controller";
import { TodoRoutes } from "./todos/routes";


export class AppRoutes{

    static get route(): Router{

        const router = Router();

        router.use('/api/todos', TodoRoutes.routes);

        return router;
    }


}

