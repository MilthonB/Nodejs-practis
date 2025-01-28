// Importa Express y Router desde la librería 'express'
import express, { Router } from 'express';

// Define una interfaz 'Options' para los parámetros que recibirá la clase 'Server'
interface Options {
    port: number;  // El puerto en el que el servidor va a escuchar
    routes: Router; // Las rutas que serán utilizadas por la aplicación
}

// La clase 'Server' maneja la configuración e inicialización del servidor Express
export class Server {

    // Instancia de la aplicación Express
    private app = express();

    // Variables de clase para el puerto y las rutas
    private readonly port: number; 
    private readonly routes: Router;

    // Constructor de la clase que recibe un objeto con las opciones de configuración
    constructor(opciones: Options) {
        // Desestructura las opciones para obtener el puerto y las rutas
        const { port, routes } = opciones;
        this.port = port;  // Asigna el puerto recibido al atributo 'port'
        this.routes = routes;  // Asigna las rutas recibidas al atributo 'routes'
    }

    // Método asíncrono para iniciar el servidor
    async start() {

        //* Middleware

        // Middleware que convierte el cuerpo de las peticiones a JSON
        // Esto es útil para que todas las solicitudes que lleguen al servidor sean procesadas como JSON
        this.app.use(express.json()); 
        
        // Middleware para parsear datos de formularios en URL-encoded
        // 'extended: true' permite que se pueda enviar objetos anidados en el cuerpo
        this.app.use(express.urlencoded({ extended: true }));

        //* Routes

        // Configura las rutas que recibe el servidor a través de la propiedad 'routes'
        // 'this.routes' es el Router que fue pasado al crear la instancia de la clase Server
        this.app.use(this.routes);

        //* SPA (Single Page Application)

        // Este middleware sirve archivos estáticos desde la carpeta 'public'
        // Si tienes archivos estáticos (como HTML, CSS, imágenes, etc.), este middleware los sirve
        this.app.use(express.static('public'));

        //* Inicia el servidor y comienza a escuchar en el puerto especificado

        // Llama a 'listen' para iniciar el servidor y hacer que escuche las solicitudes en el puerto configurado
        this.app.listen(this.port, () => {
            console.log('Server running on port 3000');  // Imprime un mensaje en la consola cuando el servidor está en ejecución
        });
    }
}
