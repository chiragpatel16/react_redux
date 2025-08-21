import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import AllRoutes from './Routing/AllRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='container'>
    <Navbar />

    <hr />

    <AllRoutes />


   </div>
  )
}

export default App