import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCart, delCart } from '../redux/action'

const CartItem = () => {
  const state = useSelector((state) => state.handleCart)
  const dispatch = useDispatch()
  console.log('cartItemstate', state)
  const [qty, setQty] = useState(0)

  const handleClose = (state) => {
    dispatch(delCart(state))
  }
  const addPlus = (state) => {
    dispatch(addCart(state))
  }

  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="px-4 my-5 bg-light rounded-3" key={state.id}>
            <div className="container py-4">
              <button
                className="btn-close float-end"
                aria-label="Close"
                onClick={() => handleClose(state)}
              ></button>

              <div className="row justify-content-center">
                <div className="col-md-4">
                  <img
                    src={state.image}
                    alt={state.title}
                    height="200px"
                    width="180px"
                  />
                </div>
                <div className="col-md-4">
                  <h3>{state.title}</h3>
                  <p className="lead fw-bold">
                    {state.price}$ x {qty} = {state.price * qty}$
                  </p>
                  <div className="form-outline">
                    <label
                      className="form-label lead fw-bold"
                      htmlFor="typeNumber"
                    >
                      Quantity
                    </label>
                    <input
                      onChange={(e) => setQty(e.target.value)}
                      value={qty}
                      type="number"
                      id="typeNumber"
                      className="form-control w-25"
                    />
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

export default CartItem
