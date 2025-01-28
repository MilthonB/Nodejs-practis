// Definición de la clase TodoEntity, que representa la entidad "Todo" en el sistema
export class TodoEntity {

    // Constructor de la clase, inicializa las propiedades id, text y completedAt
    constructor(
        public id: number,               // ID del "todo"
        public text: string,             // Texto del "todo"
        public completedAt: Date | null  // Fecha de completado, puede ser nula si no está completado
    ) {}

    // Getter "isCompleted" que devuelve un valor booleano indicando si el "todo" está completado
    // Utiliza la doble negación (!!) para convertir cualquier valor truthy/falsy en un booleano
    get isCompleted() {
        return !!this.completedAt; // Devuelve true si completedAt tiene un valor, false si es null
    }

    // Método estático "fromObject" que crea una instancia de TodoEntity a partir de un objeto
    public static fromObject( obj: {[key: string]: any} ): TodoEntity {
        // Desestructuramos el objeto para obtener las propiedades id, text y completedAt
        const { id, text, completedAt } = obj;

        // Validamos que el id esté presente
        if (!id) throw "Id is required";
        // Validamos que el texto esté presente
        if (!text) throw "Text is required";

        // Si completedAt está presente, validamos que sea una fecha válida
        let newCompletedAt;

        if (!completedAt) {
            newCompletedAt = new Date(completedAt); // Intentamos convertir completedAt en un objeto Date
            // Si la fecha no es válida, lanzamos un error
            if (isNaN(newCompletedAt.getTime())) {
                throw 'CompletedAt is not a valid date'; // Lanzamos error si la fecha es inválida
            }
        }

        // Creamos una nueva instancia de TodoEntity con los datos validados
        const todoEntity = new TodoEntity(id, text, completedAt);

        // Retornamos la instancia de la entidad
        return todoEntity;
    }
}
