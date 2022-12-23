import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { addCart, closeCart, delCart } from '../redux/action'

const Cart = () => {
  const state = useSelector((state) => state.handleCart)
  const dispatch = useDispatch()
  console.log('cartstate', state)

  const cartItems = (cartItem) => {
    const delItem = (item) => {
      dispatch(delCart(item))
    }
    const increaseItem = (item) => {
      dispatch(addCart(item))
    }
    const closeItem = (item) => {
      dispatch(closeCart(item))
    }

    return (
      <>
        <div className="row">
          <div className="col-md-12">
            <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
              <div className="container py-4">
                <button
                  className="btn-close float-end"
                  aria-label="Close"
                  onClick={() => closeItem(cartItem)}
                ></button>

                <div className="row justify-content-center">
                  <div className="col-md-4">
                    <img
                      src={cartItem.image}
                      alt={cartItem.title}
                      height="200px"
                      width="180px"
                    />
                  </div>
                  <div className="col-md-4">
                    <h3>{cartItem.title}</h3>
                    <p className="lead fw-bold">
                      {cartItem.price}$ x {cartItem.qty} ={' '}
                      {cartItem.price * cartItem.qty}$
                    </p>
                    <div className="btn-group">
                      <button
                        onClick={() => increaseItem(cartItem)}
                        className="btn btn-success mx-2"
                      >
                        +
                      </button>
                      <button
                        onClick={() => delItem(cartItem)}
                        className="btn btn-danger"
                      >
                        -
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }

  const emptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4">
          <div className="row">
            <h3 className="lead fw-bolder">CART IS EMPTY</h3>
          </div>
        </div>
      </div>
    )
  }

  var total = 0
  const priceList = (price) => {
    var productprc = price.qty * price.price

    total = total + productprc
    return (
      <ul className="list-group mb-3">
        <li className="list-group-item d-flex justify-content-between lh-sm">
          <div>
            <h6 className="my-0">
              {price.title}--{price.price}$ x {price.qty}
            </h6>
          </div>
          <span className="text-muted">{price.price * price.qty}$</span>
        </li>
      </ul>
    )
  }

  return (
    <>
      <div className="row">
        <div className="col-md-8">
          {state.length === 0 && emptyCart()}

          {state.length !== 0 && state.map(cartItems)}
        </div>
        <div className="col-md-4 my-5">
          <div className="row">
            <div className="col-12 mb-5">
              <h1 className="text-center display-6 fw-bolder">Cart Total</h1>
              <hr />
            </div>
          </div>
          {state.length !== 0 && state.map(priceList)}

          <li className="bg-danger rounded list-group-item d-flex justify-content-between lh-sm mb-5">
            <strong>Total </strong>
            <strong>{total.toFixed(2)}$</strong>
          </li>
        </div>
      </div>
    </>
  )
}

export default Cart
