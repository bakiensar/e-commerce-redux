import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const state = useSelector((state) => state.handleCart)
  console.log('cartstate', state)
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light bg-gray py-3">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" to="/">
            COLLECTION
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="buttons">
              <NavLink to="" className="btn btn-outline-dark mx-2">
                {' '}
                <i className="fa fa-sign-in me-1"></i>
                Login
              </NavLink>
              <NavLink to="register" className="btn btn-outline-dark mx-2">
                {' '}
                <i className="fa fa-user-plus me-1"></i>
                Register
              </NavLink>
              <NavLink to="/cart" className="btn btn-outline-dark mx-2">
                {' '}
                <i className="fa fa-cart-arrow-down me-2"></i>
                Cart ({state.length})
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
