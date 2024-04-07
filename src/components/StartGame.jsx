import React from 'react'
import './StartGame.css'

const StartGame = ({toggle}) => {
  return (
    <div className='main'>
        <div className='left'>
            <img src="../src/images/dice.png" alt="dices" />            
        </div>

        <div className='right'>
            <h1>Dice Game</h1>
            <button onClick={toggle}>Play Now</button>
        </div>      
    </div>
  )
}

export default StartGame;
