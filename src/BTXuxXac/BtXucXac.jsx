import React from 'react'
import {Game} from './Game'
import {Ans} from './Ans'
import { useDispatch, useSelector } from 'react-redux'
import { btXucXacActions, btXucXacReducer } from '../store/BTXUCXAC/slice'

export const BtXucXac = () => {
  const { number } = useSelector((state) => state.btXucXacReducer);
  const dispatch = useDispatch();
  return (
    <div className='container'>
      <h2>BTXucXac</h2>
      <h1 className='text-center'>GAME ĐỔ XÚC XẮC</h1>
      <div className="mt-4">
        <Game/>
      </div>
      <div className="mt-4">
        <Ans OnchangeSoLanChoi={() => {
          dispatch(btXucXacActions.play(1))
        }}/>
      </div>
    </div>
  )
}
