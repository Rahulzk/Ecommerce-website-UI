import React from 'react'
import '../style/cart.css'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import { Col, Container, Row } from 'reactstrap'
import { cartActions } from '../redux/slice/cartSlice'
import { motion } from 'framer-motion'


import Img from '../assets/images/arm-chair-01.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

const Cart = () => {

  const dispatch = useDispatch()

  const cartItems = useSelector(state => state.cart.cartItems);

  const deleteFromCart = (id) => {
    console.log('huha');
    dispatch(cartActions.removeItem({id}));
    toast.success('item removed succesfully')
  }

  return (
    <Helmet title="Cart">
      <CommonSection title="Shopping Cart" />
      <section>
        <Container>
          <Row>
            <Col lg="9">
              {cartItems.length === 0 ? (
                <h2 className="fs-4 text-center">No item added to Cart</h2>
              ) : (
                <table className="table bordered">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item, index) => (
                      <tr>
                        <td>
                          <img src={item.imgUrl} alt="" />
                        </td>
                        <td>{item.productName}</td>
                        <td>${ item.price}</td>
                        <td>{ item.quantity}</td>
                        <motion.td whileTap={{ scale: 1.1 }} onClick={()=>deleteFromCart(item.id)}>
                          <i className="ri-delete-bin-line"></i>
                        </motion.td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </Col>
            <Col lg="3"></Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default Cart