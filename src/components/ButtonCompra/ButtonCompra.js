import { Button } from "react-bootstrap"
import { useState } from "react";


export const ButtonCompra = () => {
    let[amount, setAmount] = useState(1)

    const increase = () => {
        setAmount(amount + 1)
    }

    const decrease = () => {
        amount > 1 && setAmount(amount - 1)
    }

    return (
        <>
            <div className="amount">
                <Button variant="light" onClick={decrease} disabled={amount === 1}>-</Button>
                <div className="amountNumber">{amount}</div>
                <Button variant="light" onClick={increase}>+</Button>
            </div>
        </>

    )
}