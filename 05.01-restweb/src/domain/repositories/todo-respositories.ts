import { TodoEntity } from "../entities/todo-entity";



export abstract class TodoRepositories{


    abstract getTodo (id:number): Promise<TodoEntity>;
    

}