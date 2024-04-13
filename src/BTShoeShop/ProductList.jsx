import React from 'react'
import {ProductItems} from './ProductItems'
import { btShoeShop } from '../store/btShoeShop/slice'
import {useDispatch,useSelector} from 'react-redux'

export const ProductList = (props) => {

  const { data } = props;
  const {carts} = useSelector((state) => state.btShoeShop);
  const {handleCarts} = props;
  const dispatch = useDispatch();

  return (
    <div>
      <div className="row">
        {
          data.map((shoe) => {
            return (
              <div className="col-4 mt-4" key={shoe.id}>
                <ProductItems shoe={shoe} onChangeCarts={() => dispatch(handleCarts(shoe))}/>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
