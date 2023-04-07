// import logo from './logo.svg';
// import './App.css';
// import Confetti from 'react-confetti'
// import Die from './Die'
// import { useState,useEffect } from 'react';
// function App() {
//   const[dice,setDice]=useState(allNewDice())
//   const[tenzies,setTenzies]=useState(false)
// useEffect(()=>{
// const firstValue=dice[0].value;
// const allHeld=dice.every(die=>die.held)
// const allSameNumber=dice.every(die=>die.value)
// if(allHeld && allSameNumber){
//   setTenzies(true)
// }
// },[dice])

//   function randomDieValue(){
//     return Math.ceil(Math.random()*6)
//   }
//   function allNewDice(){
//     const newArray=[]
//     for(let i=0 ; i<10 ; i++){
//       const newDie={
//         value:randomDieValue(),
//         held:false,
//         id:i+1
//       }
//       newArray.push(newDie)
//     }
//     return newArray
//   }
//   function rollUnheldDice(){
//     if(!tenzies){
//       setDice((oldDice)=>oldDice.map((die,i)=>
//       die.held ?
//       die :
//       {value:randomDieValue(),held:false,id:i+1}
//       ))
//     }
//     else{
//       setDice(allNewDice)
//       setTenzies(false)
//     }
//   }
//   function holdDice(){
//     setDice(prevDie=>prevDie.map(die=>{
//       return die.id === id ?
//       {...die,held:!die.held}:
//       die
//     }))
//   }
//   const diceElements=dice.map((die)=>
//     <Die key={die.id} {...die} hold={()=>holdDice()}/>
//   )
//   return (
//    <>
//    <main>
//     {tenzies && <Confetti/>}
//     <h1>Tenzies</h1>
//     <h4>Roll untill all diceare the same.
//       Click each die to freez it at its current value between rolls.</h4>
//       <div className=''>{diceElements}</div>
//       <button onClick={rollUnheldDice} type='submit'>Roll</button>
//       {tenzies ? "Reset now" : "Roll"}
//    </main>
//    </>
//   );
// }

// export default App;
import React from 'react'
import './App.css';
import Confetti from 'react-confetti'
import Die from './Die'
import { useState, useEffect } from 'react';
const App = () => {
  const [dice, setDice] = useState(allNewDice())
  // const[]
  //  useEffect(()=>{
  //   setDice()
  //  },[dice])

  
  function rollDice() {
    setDice(allNewDice())
  }
  function allNewDice() {
    const newArray = []
    for (let i = 0; i < 10; i++) {
      const element = {
        value: Math.ceil(Math.random() * 6),
        isheld: false,
        id:i+1
      }
      newArray.push(element)
    }
    return newArray
  }
  function holdDice(id){
    // console.log(id); 
  
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
      <h1 className='gameHead'>Tenzies</h1>
      <h4 className='instruction'>Roll untill all diceare the same.
        Click each die to freez it at its current value between rolls.</h4>
      <div className='mainDice'>
        {diceElements} 
        <button className='btn' onClick={rollDice}>Roll</button>
      </div>

    </div>
  )
}

export default App

