import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { btXucXacActions, btXucXacReducer } from '../store/BTXUCXAC/slice'

export const Ans = ({OnchangeSoLanChoi}) => {

  const {giaTriCuoc} = useSelector((state) => state.btXucXacReducer)
  const {soLanChoi} = useSelector((state) => state.btXucXacReducer)
  const dispatch = useDispatch();
  return (
    <div className='text-center'>

        <p className="fs-2">Bạn chọn: {giaTriCuoc ? 'Tài' : "Xỉu"} </p>
        <p className="fs-2">Số bàn thắng: 1</p>
        <p className="fs-2">Tổng số lần chơi: {soLanChoi}</p>
        <div className="mt-4">
            <div className="btn btn-success" onClick={OnchangeSoLanChoi} >Play</div>
        </div>

    </div>
  )
}
