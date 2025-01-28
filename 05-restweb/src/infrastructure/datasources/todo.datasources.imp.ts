import { prisma } from "../../data/postgres";
import { CreateTodoDtos, TodoDataSource, TodoEntity, UpdateTodoDtos } from "../../domain";





export class TodoDataSourceImp implements TodoDataSource{

    async create(createTodoDTO: CreateTodoDtos): Promise<TodoEntity> {
        const todo = await  prisma.todo.create({data:createTodoDTO});
        return TodoEntity.fromObject(todo);
    }
    async getAll(): Promise<TodoEntity[]> {
        const todos =  await prisma.todo.findMany();

        return todos.map(todos => TodoEntity.fromObject(todos));
    }
    async findById(id: number): Promise<TodoEntity> {
        const todo =  await prisma.todo.findFirst({where: {id}});
        if( !todo ) throw `todo with id ${id} not found `;
        return TodoEntity.fromObject(todo);
    }
    async updateById(updateTodoDto: UpdateTodoDtos): Promise<TodoEntity> {
        await this.findById( updateTodoDto.id );
        const updateTodo =  await prisma.todo.update(
            {
                where: {id: updateTodoDto.id},
                data: updateTodoDto!.values
            }
        )

        return  TodoEntity.fromObject(updateTodo)
    }
    async deleteById(id: number): Promise<TodoEntity> {
        await prisma.todo.findFirst({where:{id}});

        const deletetodo =  await prisma.todo.delete({where:{id}});

        return TodoEntity.fromObject(deletetodo);
    }
}