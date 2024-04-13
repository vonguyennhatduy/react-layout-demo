import React from 'react'
import { useDispatch } from 'react-redux'
import { btShoeShopActions } from '../store/btShoeShop/slice';

export const Cart = (props) => {
  const dispatch = useDispatch();
  const { carts } = props
  return (
    <div className="modal" id="modalCart" tabIndex={-1}>
        <div className="modal-dialog modal-xl">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Modal title</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                </div>
                <div className="modal-body">
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Mã sản phẩm</th>
                                <th>Tên sản phẩm</th>
                                <th>Hình ảnh</th>
                                <th>Giá</th>
                                <th>Số lượng</th>
                                <th>Tổng</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                carts.map((item, index) => {
                                    return (
                                        <tr key={item.id}>
                                            <td>{index + 1}</td>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>
                                                <img width={100} height={100} src={item.image} alt="..." />
                                            </td>
                                            <td>{item.price}</td>
                                            <td>
                                                <button className="btn btn-outline-dark" onClick={() => dispatch(btShoeShopActions.handleCartsDecrease(item))}>-</button>
                                                <span className='mx-3'>{item.cartQuantity}</span>
                                                <button className="btn btn-outline-dark" onClick={() => dispatch(btShoeShopActions.handleCartsIncrease(item))}>+</button>
                                            </td>
                                            <td>{item.price * item.cartQuantity}</td>
                                            <td>
                                                <button className="btn btn-outline-dark" onClick={() => dispatch(btShoeShopActions.handleCartsDeleteItem(item))}>X</button>
                                            </td>
                                            
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>  
                </div>
            </div>
        </div>
    </div>

  )
}
