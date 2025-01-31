
import express, { Router } from 'express';

interface Options{
    port: number
    route: Router
}

export class Server {


    private readonly port: number;
    private readonly router: Router;

    constructor(options: Options){
        const {port, route} = options;
        this.port = port;
        this.router =  route;
    }

    private app = express();
    async start(){
        
        this.app.use(express.json());

        this.app.use(express.urlencoded({extended: true}));

        this.app.use(this.router);


        this.app.listen(this.port, ()=>{
            console.log(`Server runnign in: ${this.port}` );
        });
        
        

    }

}