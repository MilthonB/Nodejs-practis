import { TodoRepositoryImp } from "../../../infrastructure/repositories/todo.repositoriesimp";
import { TodoEntity } from "../../entities/todo.entities";
import { TodoRepository } from "../../repositories/todo.repositorie";



interface GetTodosCaseUse{
    execute(): Promise<TodoEntity[]>
}


export class GetTodos implements  GetTodosCaseUse{
    constructor( private readonly todoRepository: TodoRepository ){}
    execute(): Promise<TodoEntity[]> {
        return this.todoRepository.getAll();
    } 

}



