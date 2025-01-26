import { Request, Response } from "express";


const todos = [
    {id:1, text:'Buy milk', createdAt: new Date()},
    {id:2, text:'Buy bear', createdAt: new Date()},
];

export class TodosController {



    //* DI
    constructor(){

    }


    public getTodos = ( req: Request, res: Response) => {
        res.json(todos);
    }

    public getTodoById = (req: Request, res: Response) =>{
        const id = +req.params.id;
        if( isNaN(id) ) res.status(400).json( {error : `TODO with id not found ${req.params.id}`} );
        const todo =  todos.find(todo => todo.id == id);

        (todo)
        ? res.json(todo)
        : res.status(404).json({error : `TODO with id not found ${req.params.id}`})
    

    }

    public createTodo = (req: Request, res: Response) =>{
        const {text} = req.body;
        if( !text ) res.status(404).json({error: 'text is required'});
        const newTodo = { 
            id: todos.length + 1,
            text: text,
            createdAt: new Date()
        };

        todos.push(newTodo);

        res.json(newTodo);
    }

    public actTodo = (req: Request, res: Response) => {
        // hay que preguntar que el id sea un numero 
        const id = +req.params.id;
        if( isNaN(id) ) res.status(404).json({ error: `Id is invalid ${id}` });

        const todo = todos.find( todo =>  todo.id === id );
        if( !todo ) res.status(400).json({error: `Todo with id: ${id} not found`});
        
        const {text, completedAt} = req.body;
        
        if( todo !== undefined && todo !== null ){
            todo.text = text || todo?.text;
                (completedAt === 'null')
                ? todo.createdAt = new Date()
                : todo.createdAt = new Date( completedAt || todo?.createdAt );
        }
    }


    public delTodo = ( req: Request, res: Response ) => {

        const id = +req.params.id;
        if(isNaN(id)) res.status(404).json({error: "id not is number"});

        const todo = todos.find( todo => todo.id === id );
        if( !todo ) res.status(400).json( {eror: `todo with id ${id} not found` } );

        const todowithdelete = todos.filter( todo => todo.id !== id );
        // if(todo !== undefined){
        //     todos.slice( todos.indexOf(todo), 1);
        // }

        if( todo !== undefined ){
            todos.splice(todos.indexOf(todo),1)
        }


        res.json(todowithdelete);

        

    }

    




}