import React from 'react'
import { Link } from 'react-router-dom'
import './header.scss'
const Header = () => {
  return (
    <header>
        <div className="container">
            <div className="row justify-content-between align-items-center">
                <div className="col-lg-3">
                    <div className="logo">
                        <Link to="/"><h4>Logo</h4></Link>
                    </div>
                </div>
                <div className="col-auto">
                    <nav className="menu">
                        <ul className='m-0 p-0 list-unstyled d-flex'>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/products">Products</Link>
                            </li>
                            <li>
                                <Link to="/cart">Cart</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header