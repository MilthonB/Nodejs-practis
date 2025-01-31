import { TodoEntity } from "../../entities/todo.entities";
import { TodoRepository } from "../../repositories/todo.repositorie";


interface CreateUseCase{
    execute(text: string):Promise<TodoEntity>;
}


export class CreateTodo implements CreateUseCase{

    constructor( private TodoRepository: TodoRepository ){}

    execute(text: string): Promise<TodoEntity> {
        return this.TodoRepository.create(text);
    }

}