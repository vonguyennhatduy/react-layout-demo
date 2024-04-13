import React from 'react'
import shoeList from './data.json'
import { ProductList } from './ProductList'
import { Cart } from './Cart'
import { btShoeShop, btShoeShopActions } from '../store/btShoeShop/slice'
import {useSelector, useDispatch} from 'react-redux'

export const BTShoeShop = () => {

  console.log(shoeList);
  const {carts} = useSelector((state) => state.btShoeShop);
  const dispatch = useDispatch();

  return (
    <div>
        <div className="container mt-5">
          <div className='d-flex justify-content-between'>
            <h2 className='text-success'>BÀI TẬP GIỎ HÀNG SHOE SHOP</h2>
            <button className='fs-2 text-white fw-bold btn btn-danger' data-bs-toggle="modal" data-bs-target="#modalCart">
              GIỎ HÀNG
            </button>
          </div>
          <ProductList data={shoeList} handleCarts={btShoeShopActions.handleCarts}/>
          <Cart carts={carts} handleCarts={btShoeShopActions.handleCarts}/>
        </div>
    </div>
  )
}
