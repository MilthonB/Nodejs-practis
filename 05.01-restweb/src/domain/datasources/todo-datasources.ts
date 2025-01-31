import { TodoEntity } from "../entities/todo-entity";



export abstract class TodoDataSources{
    abstract getTodo (id:number): Promise<TodoEntity>;
}