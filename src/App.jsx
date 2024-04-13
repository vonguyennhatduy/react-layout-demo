import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BaiTapGlasses } from './GlassesApp/BaiTapGlasses'
import { BtXucXac } from './BTXuxXac/BtXucXac'
import { BTShoeShop } from './BTShoeShop/BTShoeShop'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BTShoeShop/>
    </>
  )
}

export default App
