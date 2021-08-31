import { IOClients } from "@vtex/api"
import  AWSClient  from "./aws"
import { OMS } from '@vtex/clients'

// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {
    public get oms() {
        return this.getOrSet('oms', OMS)
      }
    public get aws() {
        return this.getOrSet('aws', AWSClient)
    }
}

