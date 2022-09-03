import express, {Request, Response} from "express"
import Sender from "../../sender"

const sender = new Sender

const send = async (req: Request, res: Response) => {
    const { number, message, br, international} = req.body
    const {countryCode, localStateCode} = international
    let formattedNumber: string = ""
    try {
        if (br) {
            if (number.length < 11 || number.length > 11) {
                res.status(500).json({
                    message: "Favor inserir um número válido. (DDD + Número, sem espaços ex: 00912345678)"
                })
            } else {
                formattedNumber = `55${number}@c.us`
            }
        } else {
            //POSSIBILIDADE DE CONTATOS COM NUMEROS ESTRA
            // if (number.length < 9 || number.length > 9) {
            //     res.status(500).json({
            //         message: "Please insert a valid number. (Country code + Local State code + Number, without spaces ex: 912345678)"
            //     })
            // } else {
            //     formattedNumber = `${countryCode}${localStateCode}${number}@c.us`
            // }
        }
        await sender.sendText("5571992386660@c.us", "olá isso é um teste.")
        res.status(200).json({
            message: "mensagem enviada."
        })
    } catch (error) {
        console.log("error: ", error)
        res.status(500).json({
            status: "error",
            message: error
        })
    }
}

export default send