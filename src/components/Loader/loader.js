import './loader.scss'
import { Spinner } from 'react-bootstrap'

export const Loader = () => {

    return (
        <>
        <div className='loader-container d-flex justify-content-center align-items-center'>
        <Spinner animation="border" variant="success" />
        </div>
        </>
   
    )
}