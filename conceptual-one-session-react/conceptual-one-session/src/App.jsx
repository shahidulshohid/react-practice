import Products from './components/products/products'
import './App.css'
import { useEffect, useState } from 'react'

function App() {
  
  const [status, setStatus] = useState(false)
  const handleStatus = () => {
    setStatus(!status)
  }
  console.log(status)

  // const information = {
  //   message: 'secret',
  //   phone: 23433456676
  // }
  // const [state, setState] = useState(0)
  // const [state1, setState1] = useState(0)

  // useEffect(()=> {
  //   console.log('hello from useEffect')
  // }, [state])

  // let storageVar = 0
  
  // const handleVariableCount = () => {
  //   storageVar = storageVar + 1
  //   console.log(storageVar)
  // }

  // const handleState = () => {
  //   setState(state + 1)
  //   console.log(state)
  // }

  // const handleState1 = () => {
  //   setState1(state1 + 1)
  //   console.log(state1)
  // }


  return (
    <>
    {/* <div>
      <h3>this is store count {state}</h3>
      <h3>this is store count {state1}</h3> */}
      {/* <h3>this is variable count {storageVar}</h3> */}
    {/* </div> */}
    {/* <button onClick={handleState}>this is store count</button>
    <button onClick={handleState1}>this is store count</button> */}
    {/* <button onClick={handleVariableCount}>this is variable count</button> */}
    <br/>
    {/* <button onClick={()=>handleHeroAlom('Ok boss')}>Just for Hero Alom</button> */}
      {/* <Products info={information}></Products> */}

      <button onClick={handleStatus}>handle Status</button>
      <h1>Hello APp.jsx</h1>
    </>
  )
}

export default App
