


export class TodoEntity{

    constructor(private id: number, private text: string, private completed: Date ){}


    static fromObj( obj:{[key:string]:any} ): TodoEntity{
        return new TodoEntity(1,'Test',new Date());
    }

}