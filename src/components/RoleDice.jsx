import styled from 'styled-components'


const RoleDice = ({roleDice, currentDice}) => {

  return (
    <DiceContainer>
        <div className='dice' onClick={roleDice}>
            <img src={`../src/images/dice/dice_${currentDice}.png`} alt="dice-1"/>
        </div>
        <p>Click On The Dice To Roll</p>
      
    </DiceContainer>
  )
}

export default RoleDice

const DiceContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;

    .dice{
        cursor: pointer;
    }

    p{
        font-size: 24px;
        font-weight: bold;
    }
`;
