import React from 'react';
import './App.css';
import Body from './conponents/Body';

function App() {

    const [randomNum, setRandomNum] = React.useState()
    const [adviceId, setAdviceId] = React.useState()
    const [adviceText, setAdviceText] = React.useState()

    function randomNumber() {
        const num = Math.floor(Math.random() * 199) + 1
        setRandomNum(num)
    }
    
    async function getAdvice() {
        const url = `https://api.adviceslip.com/advice/${randomNum}`
        const response = await fetch(url)
        const responseJson = await response.json()
        console.log(responseJson)
        setAdviceId(responseJson.slip.id)
        setAdviceText(responseJson.slip.advice)
    }
    
    React.useEffect(() => {
      randomNumber()
    },[])

    React.useEffect(() => {
        getAdvice()
    },[randomNum])
    
  
  return (
    <div>
      <Body 
        adviceId={adviceId}
        adviceText={adviceText}
        randomNumber={randomNumber}
      />
    </div>
  );
}

export default App;
