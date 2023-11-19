import { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Registration from './Components/Registration'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Registration/>
    </>
  )
}

export default App
