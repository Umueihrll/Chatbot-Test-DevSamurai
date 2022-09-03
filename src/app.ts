import express, {Request, Response} from "express"

import Sender from "./sender"

import send from "./controllers/send/send"
const sender = new Sender()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/status', (req: Request, res: Response) => {})

app.post('/send', send ) 

app.listen(3000)