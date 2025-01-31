import { TodoEntity } from "../../entities/todo.entities";
import { TodoRepository } from "../../repositories/todo.repositorie";


interface DeleteTodoUseCase{
    execute(id: number): Promise<TodoEntity>
}



export class DeleteTodo implements DeleteTodoUseCase{
    
    constructor(private readonly todoRepository: TodoRepository){}
    
    execute(id: number): Promise<TodoEntity> {
        return this.todoRepository.deleteById(id)
    }

}





