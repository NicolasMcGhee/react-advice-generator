import React from 'react';
import '../index.css';
import diceImg from '../images/icon-dice.svg';
import dividerImg from '../images/pattern-divider-desktop.svg';


const Body = (props) => {

    // const [randomNum, setRandomNum] = React.useState()
    // const [adviceId, setAdviceId] = React.useState()
    // const [adviceText, setAdviceText] = React.useState()

    // function randomNumber() {
    //     const num = Math.floor(Math.random() * 199) + 1
    //     setRandomNum(num)
    // }
    
    // async function getAdvice() {
    //     const url = `https://api.adviceslip.com/advice/${randomNum}`
    //     const response = await fetch(url)
    //     const responseJson = await response.json()
    //     console.log(responseJson)
    //     setAdviceId(responseJson.slip.id)
    //     setAdviceText(responseJson.slip.advice)
    // }
    
    // React.useEffect(() =>{
    //     getAdvice()
    // },[randomNum])

    return (
        <div className="container">
            <div className='flex'>
                 <h3>Advice #{props.adviceId}</h3>
                <p>"{props.adviceText}"</p>
                <img className='dividerImg' src={dividerImg} alt="" />
                <button onClick={props.randomNumber}>
                    <img className='diceImg' src={diceImg}/>
                </button>
            </div>
        </div>
    );
};

export default Body;