import { CronJob } from "cron";


type CronTime = string | Date;
type OnTick = () => void ;
export class CronService{

    static creatJob(cronTIme: CronTime, onTick: OnTick){
        const job = new CronJob(
            cronTIme, // cronTime
            onTick, // onTick
            null, // onComplete
            true, // start
            'America/Los_Angeles' // timeZone
        );
        job.start();
    }

}