import { Request, Response } from "express";
import { prisma } from "../../data/postgres";


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
        const {text} = req.body;
        if( !text ) res.status(404).json({error: 'text is required'});
        
        const todo = await prisma.todo.create(
            {
                data: { text: text}
            }
        );
        

        res.json(todo);
    }

    public actTodo = async(req: Request, res: Response) => {
        // hay que preguntar que el id sea un numero 
        const id = +req.params.id;
        if( isNaN(id) ) res.status(404).json({ error: `Id is invalid ${id}` });

        // const todo = todos.find( todo =>  todo.id === id );
        const todo = await prisma.todo.findFirst({where: {id:id}});
        if( !todo ) res.status(400).json({error: `Todo with id: ${id} not found`});
        
        const {text, completedAt} = req.body;
        
        const updatedData: any = [];

        if(text) updatedData.text =  text;
        
        if(completedAt) updatedData.completedAt =  completedAt === 'null' ? null: new Date(completedAt);

        const updateTodo =  await prisma.todo.update(
            {
                where: {id},
                data: {
                    text: text,
                    completedAt: completedAt
                }
            }
        )

        res.json(updateTodo);

        // if( todo !== undefined && todo !== null ){
        //     todo.text = text || todo.text;
        //         (completedAt === 'null')
        //         ? todo.completedAt = new Date()
        //         : todo.completedAt = new Date( completedAt || todo?.completedAt );
        // }
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