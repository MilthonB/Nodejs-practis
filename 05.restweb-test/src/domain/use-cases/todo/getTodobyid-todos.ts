import { TodoEntity } from "../../entities/todo.entities";
import { TodoRepository } from "../../repositories/todo.repositorie";




interface GetTodoByIdUseCase{
    execute(id: number): Promise<TodoEntity>
}


export class GetTodoById implements GetTodoByIdUseCase{
    
    constructor( private readonly todoRepositroy : TodoRepository ){}
    
    execute(id: number): Promise<TodoEntity> {
        return this.todoRepositroy.findById(id);
    }

}