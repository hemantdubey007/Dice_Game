import styled from 'styled-components'
import NumberSelector from './NumberSelector';
import TotalScore from './TotalScore';
import RoleDice from './RoleDice';
import { useState, useSyncExternalStore } from 'react';

const GamePlay = () => {
    const [score, setScore] = useState(0)
    const [currentDice, setCurrentDice] = useState(1);
    const [selectedNumber, setSelectedNumber] = useState()
    const [error, setError] = useState("")

    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    };

    const roleDice = () =>{
        if(!selectedNumber){
            setError("You have't Selected Any Number")
            return;
        } 
        setError("")
        const randomNumber =  generateRandomNumber(1,7);
        setCurrentDice((prev) => randomNumber)

        if(selectedNumber === randomNumber){
            setScore((prev) => prev + randomNumber);
        }else{
            setScore((prev) => prev - 2)
        }

        setSelectedNumber(undefined)
    }


  return (
    <MainContainer>
        <div className='top-section'>
            <TotalScore score={score}/>   
            <NumberSelector 
            error={error}
            selectedNumber={selectedNumber}
            setSelectedNumber={setSelectedNumber}/>
        </div>
        <RoleDice currentDice={currentDice}
        roleDice={roleDice}/>
    </MainContainer>

  )
}

export default GamePlay;

const MainContainer = styled.main`
.top-section{
    display: flex;
    justify-content: space-between;
    align-items: end;
    max-width: 1280px;
    padding-top: 30px;
    margin: 0 auto;
}
`;
