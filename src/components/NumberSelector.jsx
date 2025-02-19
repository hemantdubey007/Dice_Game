import { useState } from 'react';
import styled from 'styled-components'

const NumberSelector = ({error, selectedNumber, setSelectedNumber}) => {

    const arrNumber = [1, 2, 3, 4, 5, 6];
    

  return (
    <NumberSelectorContainer>
        <p className='error'>{error}</p>
        <div className='flex'>
        {
        arrNumber.map((value, i) => (
            <Box
            isSelected={value === selectedNumber}            
            key = {i} onClick={() => setSelectedNumber(value)}>{value}</Box>
        ))}
    </div>      
    <p>Select Number</p>
    </NumberSelectorContainer>
    
  )
}

export default NumberSelector

const NumberSelectorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    .error{
        color: red;
        font-size: 30px;
        
    }
    .flex{
        display: flex;
        gap: 24px;
    }
    p{
        font: 24px;
        font-weight: 800;
    }
`;

const Box = styled.div`
    height: 60px;
    width: 60px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 20px;
    font-weight: 800;
    cursor: pointer;
    background-color: ${(props) => (props.isSelected ? "black" : "white")};
    color: ${(props) => (!props.isSelected ? "black" : "white")};
`;

