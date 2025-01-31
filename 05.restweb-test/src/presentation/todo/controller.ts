import { Response, Request } from 'express';
import { TodoRepository } from '../../domain/repositories/todo.repositorie';
import { CreateTodo } from '../../domain/use-cases/todo/create-todo';
import { GetTodos } from '../../domain/use-cases/todo/getTodos-todos';
import { GetTodoById } from '../../domain/use-cases/todo/getTodobyid-todos';
import { UpdateTodo } from '../../domain/use-cases/todo/uupdate-todo';
import { DeleteTodo } from '../../domain/use-cases/todo/delete-todos';



export class TodoController {

    constructor( private readonly todorepositorie: TodoRepository ){}

    public getTodos = (req: Request, res: Response)=>{        
        new GetTodos(this.todorepositorie)
        .execute()
        .then(todo => res.json(todo))
        .catch(error => res.status(400).json({error})) 
    }
    public getTodoById = (req: Request, res: Response)=>{
        new GetTodoById(this.todorepositorie)
        .execute(+req.params.id)
        .then(todo=> res.json(todo))
        .catch(error => res.status(400).json({error}))
    }
    public createTodo = (req: Request, res: Response)=>{
        new CreateTodo(this.todorepositorie)
        .execute('texto uno')
        .then((todo) => res.json(todo))
        .catch((error) => res.status(400).json({error}));
    }
    public acteTodo = (req: Request, res: Response)=>{
        new UpdateTodo(this.todorepositorie)
        .execute(+req.params.id)
        .then( todo => res.json(todo) )
        .catch( error => res.status(400).json({error}) )
    }
    public delTodo = (req: Request, res: Response)=>{
        new DeleteTodo(this.todorepositorie)
        .execute(+req.params.id)
        .then(todo => res.json(todo))
        .catch(error => res.status(400).json({error}))
    }


}