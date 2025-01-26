import express, { Router }  from 'express';


interface Options {

    port: number;
    routes: Router;
}



export class Server{


    private app = express();

    private readonly port : number; 
    private readonly routes: Router;
    constructor(opciones: Options){
        const {port, routes} = opciones;
        this.port =  port;
        this.routes =  routes;
    }

 
    
    
    async start() {



        //* Middleware
        this.app.use(express.json()); //  todo lo que me manden tiene que ser un json
        this.app.use( express.urlencoded({extended: true}) )

        
        //* Routes
        this.app.use(this.routes);
        
        //* SPA
        this.app.use( express.static('public') );
        
        
        
        this.app.listen(this.port, ()=>{
            console.log('Server runngin 3000')
        })
    }

}