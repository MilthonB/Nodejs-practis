import { TodoDataSources } from "../../domain/datasources/todo-datasources";
import { TodoEntity } from "../../domain/entities/todo-entity";



export class TodoDataSourcesImp implements TodoDataSources{
    async getTodo(id: number): Promise<TodoEntity> {
        return TodoEntity.fromObj({id:1, text:'Hola mundo', completedAt: new Date()});
    }

}