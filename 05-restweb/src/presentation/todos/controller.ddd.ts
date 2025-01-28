import { Request, Response } from "express";
import { prisma } from "../../data/postgres";
import { CreateTodoDtos, UpdateTodoDtos } from "../../domain/dtos";
import { TodoRepository } from "../../domain";


const todos = [
    {id:1, text:'Buy milk', createdAt: new Date()},
    {id:2, text:'Buy bear', createdAt: new Date()},
];

export class TodosController {



    //* DI
    constructor(  private readonly todoRepository: TodoRepository ){

    }


    public getTodos = async ( req: Request, res: Response) => {
        
        const todos = await this.todoRepository.getAll();
        // const todosDb =  await prisma.todo.findMany();
        // res.json(todosDb);
        res.json(todos);
    }

    public getTodoById = async (req: Request, res: Response) =>{
        const id = +req.params.id;

        try {
            const todo = await this.todoRepository.findById(id);
            res.json(todo);
            
        } catch (error) {
            res.status(400).json({error});
        }



    }

    public createTodo = async (req: Request, res: Response) =>{
        // const {text} = req.body;
        const [error, createTotoDto] = CreateTodoDtos.create(req.body);
        if(error) res.status(404).json({error});
        const todo = await this.todoRepository.create(createTotoDto!);
        res.json(todo);
    }


    

    public actTodo = async (req: Request, res: Response) => {
        // hay que preguntar que el id sea un numero 
        const id = +req.params.id;
        const [error, updateTodoDto] =  UpdateTodoDtos.create({...req.body, id})
        if(error) return res.status(400).json({error});
        
        const updatedTodo =  await this.todoRepository.updateById(updateTodoDto!);
        res.json(updatedTodo);

    }


    public delTodo = async ( req: Request, res: Response ) => { 
        const id = +req.params.id;
        const deletetodo = await this.todoRepository.deleteById(id);
        res.json(deletetodo);
    }

    




}