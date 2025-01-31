import { TodoEntity } from "../../entities/todo.entities";
import { TodoRepository } from "../../repositories/todo.repositorie";



interface UpdateTodoUseCase{
    execute(id: number): Promise<TodoEntity>
}


export class UpdateTodo implements UpdateTodoUseCase {
    
    constructor( private readonly todoRepository: TodoRepository ){}
    

    execute(id: number): Promise<TodoEntity> {
        return this.todoRepository.updateById(id);
    }

}