import { Button } from "react-bootstrap"

export const ItemCount = ({max, min = 1, counter, setCounter}) => {
    //const [counter, setCounter] = useState(min)

    const handleIncrease = () => {
        counter < max && setCounter(counter + 1)
    }

    const handleDecrease = () => {
        counter > min && setCounter(counter - 1)
    }

    return (
        <>
            <div className="quantity">
                <Button variant="light" onClick={handleDecrease} disabled={counter === min}>-</Button>
                <p className="quantity__number">{counter}</p>
                <Button variant="light" onClick={handleIncrease} disabled={counter === max}>+</Button>
            </div>
        </>

    )
}