import { Request, Response } from "express";
import { prisma } from "../../data/postgres";
import { CreateTodoDtos, UpdateTodoDtos } from "../../domain/dtos";
import { CreateTodo, DeleteTodo, GetTodo, GetTodos, TodoRepository, UpdateTodo } from "../../domain";


const todos = [
    {id:1, text:'Buy milk', createdAt: new Date()},
    {id:2, text:'Buy bear', createdAt: new Date()},
];

export class TodosController {

    //* DI
    constructor(  private readonly todoRepository: TodoRepository ){}


    public getTodos = ( req: Request, res: Response) => {
        new GetTodos( this.todoRepository )
        .execute()
        .then( todo => res.json(todos))
        .catch(error => res.status(400).json({error})); 
    }

    public getTodoById = (req: Request, res: Response) =>{
        const id = +req.params.id;

        new GetTodo(this.todoRepository)
        .execute(id)
        .then(todo => res.json(todo))
        .catch(error => res.status(400).json({error}))



    }

    public createTodo = async (req: Request, res: Response) =>{
        // const {text} = req.body;
        const [error, createTotoDto] = CreateTodoDtos.create(req.body);
        if(error) res.status(404).json({error});
        
        new CreateTodo(this.todoRepository)
        .execute(createTotoDto!)
        .then(todo => res.json(todo))
        .catch( error => res.status(400).json({error}) )

    }


    

    public acteTodo = (req: Request, res: Response) => {
        const id = +req.params.id;
        const [ error, updateTodoDto ] = UpdateTodoDtos.create( { ...req.body, id } );
        if ( error ) res.status( 404 ).json( { error } );
        
    
        new UpdateTodo( this.todoRepository )
          .execute( updateTodoDto! )
          .then( todo => res.json( todo ) )
          .catch( error => res.status( 400 ).json( { error } ) );

    }


    public delTodo = async ( req: Request, res: Response ) => { 
        const id = +req.params.id;
        new DeleteTodo(this.todoRepository)
        .execute(id)
        .then(todo => res.json(todo))
        .catch(error => res.status(400).json({error}))
    }

    




}