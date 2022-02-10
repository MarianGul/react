import { stock } from "../data/stock.js"

export const pedirDatos = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(stock)
        }, 1000)
    })
}