import { TodoEntity } from "../entities/todo-entity";
import { TodoRepositories } from "../repositories/todo-respositories";



interface GetTodosUseCase{
    execute(id: number): Promise<TodoEntity>
}



export class GetTodos implements GetTodosUseCase{
    constructor(private readonly todoRepositorie: TodoRepositories){}

    execute(id: number): Promise<TodoEntity> {
        return this.todoRepositorie.getTodo(id);
    }

}