import { Request, Response } from "express";
import { prisma } from "../../data/postgres";
import { CreateTodoDtos, UpdateTodoDtos } from "../../domain/dtos";


const todos = [
    {id:1, text:'Buy milk', createdAt: new Date()},
    {id:2, text:'Buy bear', createdAt: new Date()},
];

export class TodosController {



    //* DI
    constructor(){

    }


    public getTodos = async ( req: Request, res: Response) => {
        const todosDb =  await prisma.todo.findMany();
        res.json(todosDb);
    }

    public getTodoById = async (req: Request, res: Response) =>{
        const id = +req.params.id;
        if( isNaN(id) ) res.status(400).json( {error : `TODO with id not found ${req.params.id}`} );
        
        const todo =  await prisma.todo.findFirst({where: {id: id}});
        
        (todo)
        ? res.json(todo)
        : res.status(404).json({error : `TODO with id not found ${req.params.id}`})
    

    }

    public createTodo = async (req: Request, res: Response) =>{
        // const {text} = req.body;
        const [error, createTotoDto] = CreateTodoDtos.create(req.body);
        if(error) res.status(404).json({error});
        
        const todo = await prisma.todo.create(
            {
                data: createTotoDto!
            }
        );
        res.json(todo);
    }

    public actTodo = async(req: Request, res: Response) => {
        // hay que preguntar que el id sea un numero 
        const id = +req.params.id;
        const [error, updateTodoDto] =  UpdateTodoDtos.create({...req.body, id})
        if(error) return res.status(400).json({error});
        
        const todo = await prisma.todo.findFirst({where: {id:id}});
        if( !todo ) res.status(400).json({error: `Todo with id: ${id} not found`});
        
        const updateTodo =  await prisma.todo.update(
            {
                where: {id},
                data: updateTodoDto!.values
            }
        )

        res.json(updateTodo);

    }


    public delTodo = async ( req: Request, res: Response ) => {

        const id = +req.params.id;
        if(isNaN(id)) res.status(404).json({error: "id not is number"});

        const todo = prisma.todo.findFirst({where:{id}});
        if( !todo ) res.status(400).json( {eror: `todo with id ${id} not found` } );


        const deletetodo = await prisma.todo.delete({where:{id}})

        res.json(deletetodo);

        

    }

    




}