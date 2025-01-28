// Importa la configuración de variables de entorno de un archivo .env
import 'dotenv/config';

// Importa el método 'get' de 'env-var' para acceder a las variables de entorno
import { get } from 'env-var';

// Configuración de las variables de entorno de la aplicación
export const envs = {
    // Define el puerto en el que el servidor escuchará
    // Obtiene la variable de entorno 'PORT', que debe estar definida en el archivo .env
    // Si no está definida, lanzará un error porque la propiedad '.required()' está siendo utilizada
    // '.asPortNumber()' convierte el valor de la variable a un número (en este caso, un puerto válido)
    PORT: get('PORT').required().asPortNumber(),
}
