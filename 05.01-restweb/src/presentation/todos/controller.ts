import { TodoRepositories } from "../../domain/repositories/todo-respositories";
import {Request, Response} from 'express';
import { GetTodos } from "../../domain/use-case/get-todos";



export class TodoController{

    constructor(private readonly todoRepositorie: TodoRepositories){}


    public getTodos = (req: Request, res: Response)=>{
        new GetTodos(this.todoRepositorie)
        .execute(+req.params.id)
        .then(todos => res.json(todos))
        .catch(error => res.status(400).json({error})) 
    }


}

