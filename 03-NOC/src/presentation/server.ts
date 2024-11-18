import { CheckService } from '../domain/use-case/check/check-service';
import {CronService} from './cron/cron-service';


export class Server {
    public static start(){
        console.log('Server stared')
        CronService.creatJob(
            '*/2 * * * * *',
            ()=>{
                new CheckService(
                    (error)=>console.log(error),
                    ()=>console.log('Success')
                ).execute('www.google.com');
            }
        );
    }
}



