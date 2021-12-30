import { randomInt } from 'mathjs';
import React,{useState} from 'react';

function getItem(item, defaultForItem){
  const checkFor = window.localStorage.getItem(item);
  if (!checkFor){
    window.localStorage.setItem(item, defaultForItem);
  }
  return window.localStorage.getItem(item);
}  

const Poker_Main = () => {
  const inLeftHand = useState(parseInt(getItem("inLeftHand", 0)));
  const inRightHand = useState(parseInt(getItem("inLeftHand", 0)));
//  const printCard = (type, number) => {
//    if (type === )
//  }

  
  const deck = {"Diamonds":[1,2,3,4,5,6,7,8,9],"Clubs":[1,2,3,4,5,6,7,8,9],"Spades":[1,2,3,4,5,6,7,8,9],"Hearts":[1,2,3,4,5,6,7,8,9],}

  const anotherDeck = {1 : "Diamonds",
                       2 : "Clubs",
                       3 : "Spades",
                       4 : "Hearts"}
  
  function returnAnotherElement(props) {
    const randomNumber = randomInt(1,9);
    const randomCardType = randomInt(1,4)
    const hi = <h1>HI</h1>
    return <h1>HI, {props.name}</h1>;
  }

  const returnL = () => {
    return <h1>HI</h1> 
  }

  const anotherElement = <h1>The random card is: {deck[anotherDeck[randomInt(1,4)]][randomInt(1,9)]}</h1>                     
  const element = <h1>Hello, world! {deck["Diamonds"][2-1]}</h1>;

  return (
  
    <div>
      <div>{anotherElement}</div>
      <div>{element}</div>
      <div>{returnL}</div>
    </div>
  );
};
  
export default Poker_Main;
