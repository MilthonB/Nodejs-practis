import { TodoDataSources } from "../../domain/datasources/todo-datasources";
import { TodoEntity } from "../../domain/entities/todo-entity";
import { TodoRepositories } from "../../domain/repositories/todo-respositories";



export class TodoRepositoriesImp implements TodoRepositories{
    
    constructor(private  readonly todoDataSources: TodoDataSources){}

    getTodo(id: number): Promise<TodoEntity> {
        return this.todoDataSources.getTodo(id);
    }

}