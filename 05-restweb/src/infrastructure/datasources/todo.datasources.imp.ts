// Importaciones necesarias para interactuar con la base de datos (prisma), DTOs y entidades
import { prisma } from "../../data/postgres"; // Prisma es una herramienta de ORM para interactuar con la base de datos
import { CreateTodoDtos, TodoDataSource, TodoEntity, UpdateTodoDtos } from "../../domain"; // Importación de los DTOs y la entidad Todo

// Implementación concreta del datasource para manejar los "todos" con la base de datos
export class TodoDataSourceImp implements TodoDataSource {

    // Método para crear un nuevo "todo"
    async create(createTodoDTO: CreateTodoDtos): Promise<TodoEntity> {
        // Usando Prisma para crear un nuevo "todo" en la base de datos con los datos proporcionados
        const todo = await  prisma.todo.create({data: createTodoDTO});
        
        // Se convierte el objeto creado en una instancia de TodoEntity y se retorna
        return TodoEntity.fromObject(todo);
    }

    // Método para obtener todos los "todos" de la base de datos
    async getAll(): Promise<TodoEntity[]> {
        // Usamos Prisma para obtener todos los "todos" en la base de datos
        const todos = await prisma.todo.findMany();

        // Convertimos cada "todo" obtenido en una instancia de TodoEntity y lo retornamos
        return todos.map(todo => TodoEntity.fromObject(todo));
    }

    // Método para encontrar un "todo" por su ID
    async findById(id: number): Promise<TodoEntity> {
        // Usamos Prisma para encontrar un "todo" con el ID proporcionado
        const todo = await prisma.todo.findFirst({where: {id}});
        
        // Si no se encuentra el "todo", lanzamos un error
        if (!todo) throw `todo with id ${id} not found`;

        // Convertimos el "todo" encontrado en una instancia de TodoEntity y lo retornamos
        return TodoEntity.fromObject(todo);
    }

    // Método para actualizar un "todo" por su ID
    async updateById(updateTodoDto: UpdateTodoDtos): Promise<TodoEntity> {
        // Verificamos que el "todo" con el ID especificado exista
        await this.findById(updateTodoDto.id);

        // Usamos Prisma para actualizar el "todo" en la base de datos con los nuevos valores
        const updateTodo = await prisma.todo.update({
            where: {id: updateTodoDto.id},
            data: updateTodoDto!.values // Actualizamos con los nuevos valores proporcionados en el DTO
        });

        // Convertimos el "todo" actualizado en una instancia de TodoEntity y lo retornamos
        return TodoEntity.fromObject(updateTodo);
    }

    // Método para eliminar un "todo" por su ID
    async deleteById(id: number): Promise<TodoEntity> {
        // Primero verificamos si el "todo" existe
        await prisma.todo.findFirst({where: {id}});

        // Usamos Prisma para eliminar el "todo" de la base de datos
        const deletetodo = await prisma.todo.delete({where: {id}});

        // Convertimos el "todo" eliminado en una instancia de TodoEntity y lo retornamos
        return TodoEntity.fromObject(deletetodo);
    }
}
