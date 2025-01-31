import { TodoEntity } from "../../entities/todo.entities";
import { TodoRepository } from "../../repositories/todo.repositorie";



interface FindByIdCaseUse{
    execute(id: number): Promise<TodoEntity>
}


export class FindById implements FindByIdCaseUse{
    
    constructor(private readonly todoRepository: TodoRepository){}

    execute(id: number): Promise<TodoEntity> {
        return this.todoRepository.findById(id);
    }

}