// Definición de la clase CreateTodoDtos, que representa el DTO para la creación de un "todo"
export class CreateTodoDtos {

  // Constructor privado que inicializa el objeto con la propiedad "text"
  private constructor(
    public readonly text: string
  ) {}

  // Método estático "create" que valida los datos y crea una instancia de CreateTodoDtos
  // Retorna una tupla que puede contener un mensaje de error (si existe) o el DTO creado
  static create( props: {[key: string]: any} ): [string?, CreateTodoDtos?] {
    const { text } = props; // Extraemos la propiedad "text" del objeto de propiedades pasadas

    // Validación: si la propiedad "text" no está presente, retornamos un error
    if (!text) return ['Text property is required'];

    // Si la propiedad "text" está presente, creamos y retornamos una nueva instancia de CreateTodoDtos
    return [undefined, new CreateTodoDtos(text)];
  }
}
