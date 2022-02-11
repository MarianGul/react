import { BsCart2 } from "react-icons/bs";
import { Button } from 'react-bootstrap';
export const CartWidget = () => {
    return (
        <>
        <Button variant="outline-light" className="position-relative iconCart">
            <BsCart2 size='1.5em' />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-light">
                0
            </span>
        </Button>
        </>
        
    )
}