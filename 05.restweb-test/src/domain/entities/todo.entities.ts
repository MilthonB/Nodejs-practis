

export class TodoEntity{

    constructor(
        private id: number,
        private text: string,
        private completedAt: Date | null
    ){}


    public static fromObjet(obj: {[key:string]: any}): TodoEntity {
        const {id, text,completedAt} = obj;
        return new TodoEntity(id, text,completedAt);

    }


}