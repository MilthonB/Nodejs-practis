

import { envs } from './config/envs'

import { AppRouter } from './presentation/routes';

import { Server } from "./presentation/server";
 





(async ()=>{
    main();
})();



function main(){

    // inciar el serverdiro y mandar data al servidor instancia del servivodr 
    
    const server = new Server({
        port: envs.PORT,
        route: AppRouter.routes()
    });

    server.start();

}



