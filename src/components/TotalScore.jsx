import styled from 'styled-components'
const TotalScore = ({score}) => {
  return (
    <ScoreContainer>
        <h1>{score}</h1>
        <p>Total Score</p>
    </ScoreContainer>        
  )
}

export default TotalScore

const ScoreContainer = styled.div`
    
    align-items: center;
    text-align: center;
    max-width: 200px;

    h1{
        font-size: 100px;
        margin: 0;
        align-items: center;
        font-weight: bold;
    }

    p{
        font-size: 20px;
        font-weight: bold;
        margin: 0;
    }



`;
