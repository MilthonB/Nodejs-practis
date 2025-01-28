import { CreateTodoDtos, UpdateTodoDtos } from "../dtos";
import { TodoEntity } from "../entities/todo.entity";
import { TodoDataSource } from "../datasources/todo.datasource";




export abstract class TodoRepository {
    abstract create( createTodoDTO: CreateTodoDtos ): Promise<TodoEntity>;
    //todo: paginacion
    abstract getAll(): Promise<TodoEntity[]>;
    abstract findById( id: number ): Promise<TodoEntity>;
    abstract updateById( updateTodoDto: UpdateTodoDtos ): Promise<TodoEntity>;
    abstract deleteById( id: number ): Promise<TodoEntity>;

}