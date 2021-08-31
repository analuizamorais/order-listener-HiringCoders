import { 
    ExternalClient,
    InstanceOptions,
    IOContext
} from '@vtex/api'

interface emailGet { 
    email: string;
}
//Indica a url para a api aws criada e seu cabeçalho
export default class AWSClient extends ExternalClient {
    private routes = { leads: ({email}: emailGet) => `/leads/${email}`, }
    constructor(ctx: IOContext, options?: InstanceOptions) {
        super('https://9ldn2ihztb.execute-api.sa-east-1.amazonaws.com', ctx, {
            ...options, 
            retries: 3, 
            headers: { 
                Accept: 'application/json'
            } 
        })
    }
    //Busca a lead através do email na tabela do DynamoDB
    public leadList({email}: emailGet){
        return this.http.get(
            this.routes.leads({email}), {
                metric: "leadss"
            }
        )
    } 
    //Insere uma lead na tabela do DynamoDB
    public leadListPost({email}: emailGet){
        return this.http.post(
            this.routes.leads({email}), {
                metric: "leadss"
            }
        )
    }
    public leadListUpdate({email}: emailGet){
        return this.http.patch(
            this.routes.leads({email}), {
                metric: "leadss"
            }
        )
    }
}


