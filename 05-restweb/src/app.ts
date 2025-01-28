// Importa las configuraciones de variables de entorno desde el archivo 'envs'
import { envs } from "./config/envs"; 

// Importa las rutas de la aplicación desde el archivo 'routes'
import { AppRoutes } from "./presentation/routes"; 

// Importa la clase 'Server' que se encargará de crear e iniciar el servidor
import { Server } from "./presentation/server";


// Ejecuta la función principal de manera asíncrona (auto invocada)
(async()=>{
    main(); // Llama a la función main() para ejecutar el proceso
})();


// Función principal que configura y arranca el servidor
function main(){
    // Crea una nueva instancia del servidor, pasando la configuración
    const server = new Server(
        {
            // El puerto donde se ejecutará el servidor (lo toma de las variables de entorno)
            port: envs.PORT, 
            
            // Las rutas de la aplicación (se toman de AppRoutes)
            routes: AppRoutes.route
        }
    );
    
    // Inicia el servidor
    server.start(); 
}
