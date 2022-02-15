import React from 'react'
import './product-item.scss'
const ProductItem = ({item}) => {
  return (
      <div className="col-lg-3">
        <div className="product-item">
          <img className='img-fluid' src={item.image} alt="" />
          <b>{item.price} azn</b>
          <h5>{item.title}</h5>
        </div>
      </div>
  )
}

export default ProductItem