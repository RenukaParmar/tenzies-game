
import React from 'react'
import 'E:/renuka/tenzies-game/src/App.css';
import Confetti from 'react-confetti'
import Die from './Die'
import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';
const App = () => {
  const [dice, setDice] = useState(allNewDice())
  const[tenzies,setTenzies]=useState(false)

  useEffect(()=>{
    const allHeld=dice.every(die=>die.isheld)
    const firstValue=dice[0].value
    const allSameValue=dice.every(die=>die.value===firstValue)
    if(allHeld && allSameValue){
      setTenzies(true)
    }
  },[dice])

function generateNewDie(){
 return {
    value: Math.ceil(Math.random() * 6),
    isheld: false,
    id:nanoid()            
  }
}
function rollDice(){
      if(!tenzies){
        setDice((oldDice)=>oldDice.map((die)=>
         die.isheld ?
        die :
        generateNewDie()
        ))
      }
      else{
        setDice(allNewDice)
        setTenzies(false)
      }
    }
// console.log(rollDice())

  function allNewDice() {
    const newArray = []
    for (let i = 0; i < 10; i++) {
      newArray.push(generateNewDie())  
    }
    return newArray
  }
  function holdDice(id){
    setDice(prevDice=>prevDice.map(die=>{
      return die.id===id?
      {...die, isheld:!die.isheld}
      :die 
    }))
    }

  const diceElements = dice.map(die =>
   <Die key={die.id} 
   value={die.value} 
   isheld={die.isheld}
   holdDice={()=>holdDice(die.id)}
   />
  )
  return (
    
    <div className='mainBackground'>
      {tenzies && <Confetti/>}
      <h1 className='gameHead'>Tenzies</h1>
      <h4 className='instruction'>Roll untill all diceare the same.
        Click each die to freez it at its current value between rolls.</h4>
      <div className='mainDice'>
        {diceElements} 
        <button className='btn' onClick={rollDice}>{tenzies?"Reset now":"Roll"}</button>
        
      </div>

    </div>
  )
}

export default App

