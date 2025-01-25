import express  from 'express';


interface Options {

    port: number;

}



export class Server{


    private app = express();

    private readonly port : number; 


    constructor(opciones: Options){
        const {port} = opciones;
        this.port =  port;
    }

 
    
    
    async start() {
        this.app.use( express.static('public') );
        this.app.listen(this.port, ()=>{
            console.log('Server runngin 3000')
        })
    }

}