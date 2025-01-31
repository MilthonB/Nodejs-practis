


import { envs } from './config/todo-env';
import { AppRoute } from './presentation/routes';
import { Server } from './presentation/server';


(async ()=>{
    main();
})();


function main(){

    // inciar el servidor 

    const server = new Server(
        {
            port: envs.port,
            routes: AppRoute.routes()
        }
    );

    server.start();


}