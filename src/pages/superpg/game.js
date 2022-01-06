import React,{useState} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//add stats page

const Game = () => {
    window.localStorage.setItem("invItems", "[1, 1, 1]");

    const getItem = (item, defaultForItem, constOrVar) => {
        if (constOrVar === "const") {
            const check = window.localStorage.getItem(item);
        } else if (constOrVar === "var") {
            var check = window.localStorage.getItem(item);
        }
        if (!check) {
            window.localStorage.setItem(item, defaultForItem);
            return 
        }   
        return window.localStorage.getItem(item);
    }

    const getItemArr = (item, defaultForItem) => {
        let check = window.localStorage.getItem(item);
        if (!check){
            window.localStorage.setItem(item, defaultForItem);
            check = window.localStorage.getItem(item);
        }
        check = JSON.parse(check);
        return check;
    }

    const [invCount, setInvCount] = useState(getItemArr("invCount", "[3,1,3,0,0,0]"));
    const invItems = ["coins","apples","fish_1","fish_2","wood_1","wood_2"];
    const [armor, setArmor] = useState(parseInt(getItem("armor", 0, "var")));
    const armorItems = ["no armor","fish armor","wolf armor","unicorn armor"]

//    window.localStorage.setItem("armor", 0);
//  const armorItemsEpic = ["demon armor","angel armor"]
//  const armorItemsMath = ["sine","cosine","tangent","cotangent","secant","cosecant"]
//  max armor??? 

//ALL ITEMS:
//*coins
//*apples
//*fish_1
//*fish_2
//*fish_3
//*wood_1
//*wood_2

    const changeInvCount = (newArr) => {
        setInvCount(newArr);
        const realNewArr = JSON.stringify(newArr);
        window.localStorage.setItem("invCount", realNewArr);
        return;
    }

    const changeArmor = (newArmor) => {
        setArmor(newArmor);
        window.localStorage.setItem("armor", newArmor);
        return;
    }

    const increaseInvCountByOne = (index) => {
        let newArr = [...invCount]
        newArr[index] = invCount[index] + 1
        changeInvCount(newArr);
    }

    const decreaseInvCountByOne = (index) => {
        let newArr = [...invCount]
        if (newArr[index] <= 0 ) {
            return;
        } else if (newArr[index] >= 1) {
            newArr[index] = invCount[index] - 1
            changeInvCount(newArr);
        }
    }

    const decreaseInvCount = (index, decreasyBy) => {
        let newArr = [...invCount]
        if (newArr[index] <= 0 ) {
            return;
        } else if (newArr[index] >= 1) {
            newArr[index] = invCount[index] - decreasyBy
            changeInvCount(newArr);
        }        
    }

    const increaseArmorByOne = () => {
        if (armor === 3){
            return;
        } if (armor === 0) {
            if (invCount[2] < 3) {
                return;
            } else if (invCount[2] >= 3) {
                decreaseInvCount(2, 3);
            }
            changeArmor(armor+1);
            return;
        }
    }

    const resetArmor = () => {
        changeArmor(0);
    }

    return(
        <div>
            <div>
                <h1>Equipment Inventory</h1>
                <h2>Armor: {armorItems[armor]}</h2>
                <button onClick={increaseArmorByOne}>Get better armor</button>
                <button onClick={resetArmor}>Reset armor</button>
            </div>
            <div>
                <h1>Items Inventory:</h1>
                {invCount.map((number, index) => (    
                    <h2>{number} {invItems[index]}</h2>
                ))}
                {invCount.map((number, index) => (
                    <button onClick={() => increaseInvCountByOne(index)}>Increase by one</button>
                ))}
                <div></div>
                {invCount.map((number, index) => (
                    <button onClick={() => decreaseInvCountByOne(index)}>Decrease by one</button>
                ))}            
            </div>
        </div>
    );
}

export default Game;