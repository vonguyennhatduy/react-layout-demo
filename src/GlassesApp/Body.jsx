import React , {useState} from 'react'
import {Header} from './Header'
import { Background } from './Background'
import { Model } from './Model'
import { Items } from './Items'
import data from './dataGlasses.json'

export const Body = () => {
  console.log(data);
  const [glasses, setGlasses] = useState(data[0].url)

  const handleGlasses = (item) => {
      setGlasses(item);
  }

  const Index = (item) => {
    const idx = data.findIndex((val) => val.url === item);
    return idx;
  }

  return (
    <div>
        <Header/>
        <Background/>
        <Model Index={Index} data={data} glasses={glasses}/>
        <Items data={data} handleGlasses={handleGlasses}/>
    </div>
  )
}
