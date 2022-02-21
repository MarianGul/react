import { BsCart2 } from "react-icons/bs";
import { Button } from 'react-bootstrap';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

export const CartWidget = () => {

    const {quantityCart} = useContext(CartContext)

    return (
        <>
        <Button as={Link} to='/cart' variant="outline-light" className="position-relative iconCart">
            <BsCart2 size='1.5em' />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-light">
                {quantityCart()}
            </span>
        </Button>
        </>
        
    )
}