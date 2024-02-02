import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)
  const Increment = () => {

    setCounter((Counter) => Counter + 1)
    setCounter((Counter) => Counter + 1)
    setCounter((Counter) => Counter + 1)
    
  }
  const decrement = ()=>{
    counter> 0 ? setCounter(counter - 1) : counter
  }


  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Count : {counter}</h1>
      
      <button onClick={Increment}>Incremenet</button>
      <button onClick={decrement}>Decrement</button>
    </>
  )
}

export default App
