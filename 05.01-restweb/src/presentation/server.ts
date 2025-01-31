import express, { Router } from 'express';



interface Options{
    port: number
    routes: Router
}


export class Server{

    private readonly port: number;
    private readonly routes: Router;

    constructor(optiosn: Options){
        const {port, routes} =  optiosn;
        this.port = port;
        this.routes =  routes;
    }


    private app = express();
    public start(){
        
        this.app.use(express.json());

        this.app.use(express.urlencoded({extended:true}));


        this.app.use(this.routes);


        this.app.listen(this.port, () => {
            console.log(`Serbver running in: ${this.port}`);
        })

    }




}