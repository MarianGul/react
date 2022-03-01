import { collection, addDoc, writeBatch, query, where, documentId, getDocs } from 'firebase/firestore';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useContext, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Navigate, Link } from 'react-router-dom';
import * as Yup from "yup";
import { CartContext } from '../../context/CartContext';
import { db } from '../../firebase/config';
import { ThankYou } from './ThankYou';
 
 export const CheckOut = () => {

    const {cart, totalPurchase, emptyCart} = useContext(CartContext)

    const [outStockMessage, setOutStockMessage] = useState('')

    const [orderId, setOrderId] = useState(null)

    const [values, setValues] = useState({
        name: '',
        lastname: '',
        email:'',
        phone:'',
        address:'',
        postalcode:''
    })


    const generateOrder = async (values) => {
        const order = {
            client: values,
            items: cart,
            total: totalPurchase(),
        }

        const batch = writeBatch(db)
        const orderRef = collection (db, "orders")
        const productsRef = collection (db, "productos")
        const q = query(productsRef, where(documentId(), 'in', cart.map((item) => item.id)))

        const products = await getDocs(q)
        const outOfStock = []
        products.docs.forEach((doc) => {
            const prodUpdate = cart.find((item) => item.id === doc.id)

            if(doc.data().stock >= prodUpdate.quantity) {
                batch.update(doc.ref, {
                    stock: doc.data().stock - prodUpdate.quantity

                })
            } else {
                outOfStock.push(prodUpdate)
            }
        })

        if(outOfStock.length === 0) {
            addDoc(orderRef, order)
            .then((doc) => {
                batch.commit()
                setOrderId(doc.id)
                emptyCart()
            })
        } else {
            const itemsOutOfStock = [...outOfStock]
            setOutStockMessage(
                `Hay items sin stock: ${itemsOutOfStock.map((item) => item.name)}`
            )
        }


    }
     const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
     const validationSchema = Yup.object({
         name: Yup.string().required("El nombre es obligatorio"),
         lastname: Yup.string().required("El apellido es obligatorio"),
         email: Yup.string().email("No es un email valido").required("El email es obligatorio"),
         phone: Yup.string().matches(phoneRegExp, 'El teléfono no es valido').required("El teléfono es obligatorio"),
         address: Yup.string().required("La dirección es obligatoria"),
         postalcode: Yup.string().required("El código postal es obligatorio")
         
     })
    

    const handleSubmit = ({values}) => {

        setValues(preValues => ({...preValues,...values }));
        generateOrder(values)
    }
    
    if(orderId) {
        return (
        <ThankYou orderId={orderId} values={values} />
        )
    }

    if(cart.length === 0) {
        return <Navigate to="/" />
    }

   return (
       <section className='checkout'>
           <Container>
               <h4 className='fw-bold mb-5'>CheckOut</h4>
               <p></p>
               <Formik initialValues={values} validationSchema={validationSchema} onSubmit={values => handleSubmit({values})}>
               {({ errors }) => (
                   <Form>
                       <Row className='mb-3'>
                       <Col md={6}>
                           <label htmlFor='name' className='form-label'>Nombre*</label>
                           <Field type="text" name="name" className={`form-control ${errors.name ? "errorText" : ''}`} id="name" />
                           <div className='error'><ErrorMessage name='name' /></div>
                       </Col>
                       <Col md={6}>
                           <label htmlFor='lastname' className='form-label'>Apellido*</label>
                           <Field type="text" name="lastname" className={`form-control ${errors.lastname ? "errorText" : ''}`} id="lastname" />
                           <div className='error'><ErrorMessage name='lastname' /></div>  
                       </Col>
                       <Col md={6}>
                           <label htmlFor='email' className='form-label'>Email*</label>
                           <Field type="text" name="email" className={`form-control ${errors.email ? "errorText" : ''}`} id="email" />
                           <div className='error'><ErrorMessage name='email' /></div>
                       </Col>
                       <Col md={6}>
                           <label htmlFor='phone' className='form-label'>Teléfono*</label>
                           <Field type="text" name="phone" className={`form-control ${errors.phone ? "errorText" : ''}`} id="phone" />
                           <div className='error'><ErrorMessage name='phone' /></div>
                       </Col>
                       <Col md={6}>
                           <label htmlFor='address' className='form-label'>Dirección*</label>
                           <Field type="text" name="address" className={`form-control ${errors.address ? "errorText" : ''}`} id="address" />
                           <div className='error'><ErrorMessage name='address' /></div>  
                       </Col>
                       <Col md={6}>
                           <label htmlFor='postalcode' className='form-label'>Código Postal*</label>
                           <Field type="text" name="postalcode" className={`form-control ${errors.postalcode ? "errorText" : ''}`} id="postalcode" />
                           <div className='error'><ErrorMessage name='postalcode' /></div>  
                       </Col>
                       </Row>
                       <Row>
                       <Col md={6}>
                            <Button as={Link} to="/cart" className='btn-compra me-2'>Volver</Button>
                            <Button className='btn-terminar' type="submit">Confirmar Compra</Button>
                       </Col>
                       <Col md={6}>
                           <div className={outStockMessage ? 'outStockMessage' : ''}>{outStockMessage}</div>
                       </Col>
                       </Row>
                   </Form>
               )}
               </Formik>
           </Container>
       </section>
   );
 };