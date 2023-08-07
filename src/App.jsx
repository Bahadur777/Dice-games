
import { useState } from 'react'
import './App.css'
import Home from './pages/home/Home'
import GamePlay from './component/gamePlay/GamePlay';

function App() {
 const [isGameStart, setIsGameStart] = useState(false);
 const togglePlayGame  = () =>{
  setIsGameStart((prve) => !prve);
 }

  return (
    <>
     {
       isGameStart ? <GamePlay/> : <Home toggle = {togglePlayGame}/>
     }
    </>
  )
}

export default App
