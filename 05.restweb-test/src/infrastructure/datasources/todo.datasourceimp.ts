import { TodoDataSource } from "../../domain/datasources/todo.datasources";
import { TodoEntity } from "../../domain/entities/todo.entities";



export class TodoDataSourcesImp extends TodoDataSource{
    async create( text: string ): Promise<TodoEntity> {
        const todoentity = TodoEntity.fromObjet({ id:1, text: text, completedAt: new Date()});
        return todoentity;
    }
    async getAll(): Promise<TodoEntity[]> {
        const todoEntity1 = TodoEntity.fromObjet({id:1, text:'Hola mundo 1', completedAt: new Date()});
        const todoEntity2 = TodoEntity.fromObjet({id:2, text:'Hola mundo 2', completedAt: new Date()});
        const todoEntity3 = TodoEntity.fromObjet({id:3, text:'Hola mundo 3', completedAt: new Date()});

        return [todoEntity1, todoEntity2, todoEntity3];


    }
    async findById(id: number): Promise<TodoEntity> {
        const todoEntity = TodoEntity.fromObjet({id:1,text:"find", completedAt: new Date() } );
        return todoEntity;
    }
    async updateById(id: number): Promise<TodoEntity> {
        const todoEntity = TodoEntity.fromObjet({id:1,text:"Update", completedAt: new Date() } );
        return todoEntity;
    }
    async deleteById(id: number): Promise<TodoEntity> {
        const todoEntity = TodoEntity.fromObjet({id:1,text:"Delete", completedAt: new Date() } );
        return todoEntity;
    }

}