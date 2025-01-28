


export class TodoEntity {

    constructor(
        public id: number,
        public text: string,
        public completedAt: Date | null
    ){}


    get isCompleted() {
        return !!this.completedAt; // doble negacion
    }

    public static fromObject( obj:{[key: string]: any} ) : TodoEntity {
        const {id, text, completedAt} = obj;
        if( !id ) throw "Id is required";
        if(!text) throw "Text is required";

        let newCompletedAt;

        if( !completedAt ){
            newCompletedAt =  new Date(completedAt);
            if(isNaN(newCompletedAt.getTime())) {
           throw 'CompletedAt is not a valid date'
            }
        }
        const todoentidad = new TodoEntity(id, text, completedAt);

        return todoentidad;

        
    }



}






