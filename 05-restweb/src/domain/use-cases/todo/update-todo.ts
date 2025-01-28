import { CreateTodoDtos, UpdateTodoDtos } from "../../dtos";
import { TodoEntity } from "../../entities/todo.entity";
import { TodoRepository } from "../../repositories/todo.repository";


export interface UpdateTodoUseCase {
    execute( dto: UpdateTodoDtos ): Promise<TodoEntity>
}


export class UpdateTodo implements UpdateTodoUseCase{

    constructor( private readonly repository: TodoRepository ){}


    execute(dto:  UpdateTodoDtos): Promise<TodoEntity> {
        return this.repository.updateById(dto);
    }

}

