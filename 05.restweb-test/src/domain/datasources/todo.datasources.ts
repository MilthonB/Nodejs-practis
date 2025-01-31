import { TodoEntity } from "../entities/todo.entities";

export abstract class TodoDataSource{
    
    abstract create(text: string):Promise<TodoEntity>;
    abstract getAll():Promise<TodoEntity[]>;
    abstract findById(id: number):Promise<TodoEntity>;
    abstract updateById(id: number):Promise<TodoEntity>;
    abstract deleteById(id: number):Promise<TodoEntity>;

}  