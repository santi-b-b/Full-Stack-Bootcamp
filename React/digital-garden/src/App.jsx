import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Plant from './Plant'

function App() {

  return (
    <>
      <Plant image={"https://www.ikea.com/de/de/images/products/fejka-topfpflanze-kuenstlich-drinnen-draussen-monstera__0614197_pe686822_s5.jpg?f=xl"} name = {"Monstera"} color = {"verde"} species = {"monstera"} />
    </>
  )
}

export default App
