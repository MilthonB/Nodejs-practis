const winston = require('winston');
const {combine, timestamp, json} = winston.format;



const logger = winston.createLogger({
    level: 'info',
    format: combine(
        timestamp(),
        json()
    ),
    // defaultMeta: {service: 'user-service'},
    transports:  [
        

        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'Combined.log' })



        
    ]
});




module.exports = function buildLogger(service){
    return {
        log: (menssage)=> {
            logger.log('info', {menssage, service});
        },
        error: (menssage)=> {
            logger.log('error', {menssage, service});
        }
    }
}


