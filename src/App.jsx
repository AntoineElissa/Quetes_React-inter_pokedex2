import { useState } from 'react'
import Card from './Components/Card'
import './App.css'
import pokemons from './data'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <div className="Header">
      <h1> Pokédex 2.0 </h1>
    </div>

    <div className ="wrap-cards">

    {pokemons.map((elem, index) => {

      return(
      <Card key={index} pokemons = {elem} className="cards"/>
      
      )
    
    })}

  </div>
    </>
  )
}

export default App
