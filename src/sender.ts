import { Session } from "inspector";
import { start } from "repl";
import { isConstructorDeclaration } from "typescript";
import {create, Whatsapp, Message, SocketState} from "venom-bot";

class Sender {
    private client: Whatsapp

    constructor(){
        this.initialize()
    }

    async sendText(to: string, body: string) {
// formatação de número de telefone pelo wpp => "CÓDIGOPAÍS+DDD+NUMERO" Ex:=> 5571992380000

        await this.client.sendText(to, body)
    }

    private initialize() {
        const qr = (base64Qrimg: string ) => {
            console.log('base64 image string qrcode: ', base64Qrimg)
        }
        const status = (statusSession: string, session: string) => {
            
        }
        const start = (client: Whatsapp) => {
            this.client = client

            this.sendText("5571992386660@c.us", "olá isso é um teste.")
        }

        create('chatBot2', qr)
        .then((client) => start(client))
        .catch((error) => console.error(error))
    }
}

export default Sender