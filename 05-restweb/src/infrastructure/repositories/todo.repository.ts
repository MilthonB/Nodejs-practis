import { CreateTodoDtos, TodoDataSource, TodoEntity, TodoRepository, UpdateTodoDtos } from "../../domain";



export class TodoRepositoryImp implements TodoRepository{

    constructor( private readonly datasource: TodoDataSource ){

    }
    create(createTodoDTO: CreateTodoDtos): Promise<TodoEntity> {
        return this.datasource.create(createTodoDTO);
    }
    getAll(): Promise<TodoEntity[]> {
        return  this.datasource.getAll();
    }
    findById(id: number): Promise<TodoEntity> {
        return this.datasource.findById(id);
    }
    updateById(updateTodoDto: UpdateTodoDtos): Promise<TodoEntity> {
        return this.updateById(updateTodoDto);
    }
    deleteById(id: number): Promise<TodoEntity> {
        return this.datasource.deleteById(id);
    }
}