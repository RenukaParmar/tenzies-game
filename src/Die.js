import React from 'react'

const Die =  (props) => {
  return (
    <>
    <div 
    onClick={props.holdDice}
    className=' dice'
     style={{backgroundColor: props.isheld?"green":"white"}}
     >
       {props.value}
    </div> 
    </>
  )
}

export default Die
