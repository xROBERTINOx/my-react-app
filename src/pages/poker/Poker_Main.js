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
  const deckCorr = {"Diamonds":[1,2,3,4,5,6,7,8,9],"Clubs":[1,2,3,4,5,6,7,8,9],"Spades":[1,2,3,4,5,6,7,8,9],"Hearts":[1,2,3,4,5,6,7,8,9],}
  const deckType = {1 : "Diamonds",2 : "Clubs",3 : "Spades",4 : "Hearts"}
  const [inLeftHand, setInLeftHand] = useState(parseInt(getItem("inLeftHand", 0)));
  const [inRightHand, setInRightHand] = useState(parseInt(getItem("inLeftHand", 0)));

//change to inLeftHand_type and inLeftHand_corr
  const changeLocalStorageItem = (item, newValue) => {
    window.localStorage.setItem(item, newValue);
    return;
  }
  
  const changeInLeftHand = (newValue) => {
    setInLeftHand(newValue);
    changeLocalStorageItem("inLeftHand", newValue);
    return;
  }

  const changeInRightHand = (newValue) => {
    setInRightHand(newValue);
    changeLocalStorageItem("inRightHand", newValue);
    return;
  }
  
  
  const getRandomInt = (min, max) => {
    const randomNumber = randomInt(min, max);
    return randomNumber;
  }



  const checkIf2CardsInHand = () => {
    if (inLeftHand === 0 && inRightHand === 0) {
      const card = getCard()
    }
  }

  const getCard = () => {
    const randomNumber = randomInt(1,9);
    const randomCardType = randomInt(1,4);
    const cardNumber = 1
    const card = deckCorr[deckType[randomCardType]][randomNumber];
    return card;
  }

  const setCardAfterGet = (card) => {
    if (inLeftHand === 0){
      setInLeftHand(card);
      return;
    } else if (inLeftHand != 0 && inRightHand === 0){
      setInRightHand(card);
      return;
    }
  }

//After Game ends, set InLeftHand and InRightHand to 0
  if (inLeftHand === 0 && inRightHand === 0){
    return(
      <button onClick={getCard}>yuh</button>
    );
  } else {
  return (
    <div>
      <h2></h2>
      <button onClick={checkIf2CardsInHand}>Get A card</button>
    </div>
  );
  }
};
  
export default Poker_Main;
