import React from 'react'
import { btShoeShopActions } from '../store/btShoeShop/slice';
import {useSelector,useDispatch} from 'react-redux'

export const ProductItems = (props) => {

  const {carts} = useSelector((state) => state.btShoeShop);
  const { shoe } = props;
  const {onChangeCarts} = props;

  console.log('carts: ',carts);

  return (
    <div className='card my-2'>
      <img width={400} height={400} className='img-fluid' src={shoe.image} alt="..." />
      <div className="card-body">
        <p className='fw-bold'>{shoe.name}</p>
        <p className='fw-bold'>${shoe.price}</p>
        <button className="btn btn-dark" onClick={onChangeCarts}>
          Add To Cart
        </button>
      </div>
      
    </div>
  )
}
