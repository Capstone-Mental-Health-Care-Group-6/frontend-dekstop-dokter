import { useState } from 'react'
import './App.css'
import Layouts from './components/layouts/Layouts'
import Routing from './Routes/Routing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Layouts>
    <Routing/>
    </Layouts>
    </>
  )
}

export default App

