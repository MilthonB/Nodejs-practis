import { TodoDataSource } from "../../domain/datasources/todo.datasources";
import { TodoEntity } from "../../domain/entities/todo.entities";
import { TodoRepository } from "../../domain/repositories/todo.repositorie";


export class TodoRepositoryImp implements TodoRepository {

    constructor(private readonly todoDataSources: TodoDataSource){}

    create( text: string ): Promise<TodoEntity> {
        return this.todoDataSources.create(text);
    }
    getAll(): Promise<TodoEntity[]> {
        return this.todoDataSources.getAll();
    }
    findById(id: number): Promise<TodoEntity> {
        return this.todoDataSources.findById(id);
    }
    updateById(id: number): Promise<TodoEntity> {
        return this.todoDataSources.updateById(id);
    }
    deleteById(id: number): Promise<TodoEntity> {
        return this.todoDataSources.deleteById(1);
    }

}