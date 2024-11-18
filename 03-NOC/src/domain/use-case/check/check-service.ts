


interface CheckServiceUseCase{
    execute: (url: string)=>Promise<boolean>;
}

type CallBackError = (mensaje: string)=>void;
type CallBackSuccess = ()=>void;

export class CheckService implements CheckServiceUseCase{

    constructor(private readonly callBackError: CallBackError,
        private readonly callBackSuccess: CallBackSuccess){}

    async execute(url: string): Promise<boolean> {

        try {
            const res = await fetch("http://localhost:3000/");
            if(!res.ok){
                this.callBackError("No hubo respuesta")
                // throw new Error("No hubo respuesta");
            }

            this.callBackSuccess();
            return res.ok;
        } catch (error) {
            this.callBackError("Ocuurrio un error");
            // throw new Error("Ocuurrio un error");
            
        }
        return Promise.resolve(false);  // Devuelve una promesa con el valor booleano `false`
    }
    
}