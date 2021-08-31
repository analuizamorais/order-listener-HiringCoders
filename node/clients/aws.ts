import { 
    ExternalClient,
    InstanceOptions,
    IOContext
} from '@vtex/api'

interface emailGet { 
    email: string;
}

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

    public leadList({email}: emailGet){
        return this.http.get(
            this.routes.leads({email}), {
                metric: "leadss"
            }
        )
    } //opcional
}



//super(`https://${ctx.account}.vtexcommercestable.com.br`, ctx, { ...options, retries: 3, headers: { VtexIdclientAutCookie: ctx.authToken, 'Proxy-Authorization': ctx.authToken, 'Content-Type': 'application/json', Accept: 'application/json', }, })