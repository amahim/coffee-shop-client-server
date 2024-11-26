
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './CoffeeCard'
import { useState } from 'react'

function App() {

  const loadedCoffees = useLoaderData()
  const [coffees,setCoffees] = useState(loadedCoffees)

  return (
    <>
      <h1 className='tex-3xl text-center my-5 text-purple-500' >Coffee shop {loadedCoffees.length}</h1>

      <div className='grid grid-cols-3 gap-4'>
      {
      coffees.map(coffee=> <CoffeeCard coffees={coffees} setCoffees={setCoffees} coffee={coffee} key={coffee._id}></CoffeeCard>)
      }
      </div>
    </>
  )
}

export default App
