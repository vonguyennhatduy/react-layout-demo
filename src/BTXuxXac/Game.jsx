import React from 'react'
import { DatCuoc } from './DatCuoc'
import { useDispatch, useSelector } from 'react-redux'
import { btXucXacActions, btXucXacReducer } from '../store/BTXUCXAC/slice'
import cn from 'classnames'

export const Game = () => {

  const {giaTriCuoc} = useSelector((state) => state.btXucXacReducer);
  const dispatch = useDispatch();

  return (
    <div className='d-flex justify-content-around'>
        <DatCuoc text="Tài" className={cn({
          'bg-success': giaTriCuoc,

        })}
        onChangeGiaTriCuoc={()=> {
          dispatch(btXucXacActions.setGiaTriCuoc(true));
        }}
        />
        <div>
            <img width={40} height={40} src="./images/1.png" alt="..." />
            <img width={40} height={40} src="./images/2.png" alt="..." />
            <img width={40} height={40} src="./images/3.png" alt="..." />

            <div className="mt-3 text-center">
              <b>
                <p>Từ 4-10: Xỉu</p>
                  
                <p>Từ 11-17: Tài</p>
              </b>
            </div>
        </div>
        <DatCuoc text="Xỉu" className={cn({
          'bg-success': !giaTriCuoc,
        })}
        onChangeGiaTriCuoc={()=> {
          dispatch(btXucXacActions.setGiaTriCuoc(false));
        }}
        />
    </div>
  )
}
