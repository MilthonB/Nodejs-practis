// Definición de la clase UpdateTodoDtos, que representa el DTO para la actualización de un "todo"
export class UpdateTodoDtos {

  // Constructor privado que inicializa los valores del DTO (id, text, completedAt)
  private constructor(
    public readonly id: number,           // ID del "todo" (obligatorio)
    public readonly text?: string,        // Texto del "todo" (opcional)
    public readonly completedAt?: string // Fecha de finalización (opcional)
  ) {}

  // Propiedad "values" que retorna un objeto con los valores que deben ser actualizados
  get values() {
    const returnObj: {[key: string]: any} = {}; // Objeto que almacenará las propiedades a retornar

    // Si text está definido, lo añadimos al objeto de retorno
    if (this.text) returnObj.text = this.text;
    // Si completedAt está definido, lo añadimos al objeto de retorno
    if (this.completedAt) returnObj.completedAt = this.completedAt;

    // Retornamos el objeto con los valores que fueron modificados
    return returnObj;
  }

  // Método estático "create" que valida los datos de entrada y crea una instancia de UpdateTodoDtos
  // Retorna una tupla que contiene un mensaje de error (si ocurre) o el DTO creado
  static create( props: {[key: string]: any} ): [string?, UpdateTodoDtos?] {
    const { id, text, completedAt } = props; // Extraemos las propiedades del objeto de entrada
    let newCompletedAt = completedAt; // Inicializamos la fecha de completado con el valor recibido

    // Validación: si no se proporciona un ID válido (debe ser un número), retornamos un error
    if (!id || isNaN(Number(id))) {
      return ['id must be a valid number'];
    }

    // Si completedAt se proporciona, validamos que sea una fecha válida
    if (completedAt) {
      newCompletedAt = new Date(completedAt); // Convertimos el valor de completedAt en un objeto Date
      // Si la fecha es inválida, retornamos un error
      if (newCompletedAt.toString() === 'Invalid Date') {
        return ['CompletedAt must be a valid date'];
      }
    }

    // Si todo es válido, retornamos undefined (sin error) y el nuevo DTO creado
    return [undefined, new UpdateTodoDtos(id, text, newCompletedAt)];
  }
}
