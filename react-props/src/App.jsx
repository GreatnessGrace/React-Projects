import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: 'Grace',
    age: 23
  }

  return (
    <>
    <h1 className='bg-green-500 mb-5'>The Concept of Props in React</h1>
    <Card name='Grace' someObj= {myObj} btnText='click me'/>
    <Card name='Unstoppable' btnText='visit me'/>

    </>
  )
}

export default App
