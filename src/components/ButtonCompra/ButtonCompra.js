import { Button } from "react-bootstrap"
import { useState } from "react";


export const ButtonCompra = () => {
    let[clicks, setClicks] = useState(0)

    const increase = () => {
        setClicks(clicks + 1)
    }

    const decrease = () => {
        setClicks(clicks - 1)
    }

    return (
        <>
            <div className="amount">
                <Button variant="light" onClick={decrease}>-</Button>
                <div className="amountNumber">{clicks}</div>
                <Button variant="light" onClick={increase}>+</Button>
            </div>
            <Button className="btn-compra">Comprar</Button>
        </>

    )
}