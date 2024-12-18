import { useState } from 'react'
import './App.css'

function App() {

  // const [price, setPrice] = useState(10)
  // const price = 10

  // const increaseClick = () => {
  //   price = price + 1
  // }

  const [myName, setName] = useState('shanto')

  return (
  //  <div>
  //     <h1>Price: {price} </h1>
  //     <button onClick={()=> setPrice(price + 1)} className='m-5 bg-green-400 p-3'>Increase</button>
  //     <button onClick={()=> setPrice(price - 1)} className='m-5 bg-green-400 p-3'>Decrease</button>
  //     <button onClick={()=> setPrice(0)} className='m-5 bg-green-400 p-3'>Reset</button>
  //     <h1>Price: {price}</h1>
  //     <h1>Price: {price}</h1>
  //  </div>

    <div>
      <h1>My name is {myName} </h1>
      <button onClick={()=> setName('mahfuz')} className='m-5 bg-green-400 p-3'>Mahfuz</button>
    </div>
  )
}

export default App
