import { promises } from "dns";
import { CreateTodoDtos, UpdateTodoDtos } from "../dtos";
import { TodoEntity } from "../entities/todo.entity";




export abstract class TodoDataSource {
    abstract create( createTodoDTO: CreateTodoDtos ): Promise<TodoEntity>;
    //todo: paginacion
    abstract getAll(): Promise<TodoEntity[]>;
    abstract findById( id: number ): Promise<TodoEntity>;
    abstract updateById( updateTodoDto: UpdateTodoDtos ): Promise<TodoEntity>;
    abstract deleteById( id: number ): Promise<TodoEntity>;

}