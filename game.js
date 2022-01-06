'use strict'

// When a button is clicked, display the intended game


// When Button 1 is clicked
document.getElementById('btn1').onclick = function() {
    document.getElementById('guess').style.display = "block";
    document.getElementById('calculator').style.display = "none";
    document.getElementById('abc').style.display = "none";
    document.getElementById('tipCalc').style.display = "none";
    document.getElementById('todo').style.display = "none";
}

// When Button 2 is clicked
document.getElementById('btn2').onclick = function() {
        document.getElementById('abc').style.display = "block";
        document.getElementById('guess').style.display = "none";
        document.getElementById('calculator').style.display = "none";
        document.getElementById('tipCalc').style.display = "none";
        document.getElementById('todo').style.display = "none";
}

// When Button 3 is clicked
document.getElementById('btn3').onclick = function() {
    document.getElementById('calculator').style.display = "block";
    document.getElementById('abc').style.display = "none";
    document.getElementById('guess').style.display = "none";
    document.getElementById('tipCalc').style.display = "none";
    document.getElementById('todo').style.display = "none";
}

// When Button 4 is clicked
document.getElementById('btn4').onclick = function() {
    document.getElementById('tipCalc').style.display = "block";
    document.getElementById('abc').style.display = "none";
    document.getElementById('guess').style.display = "none";
    document.getElementById('calculator').style.display = "none";
    document.getElementById('todo').style.display = "none";
}

// When Button 5 is clicked
document.getElementById('btn5').onclick = function() {
    document.getElementById('todo').style.display = "block";
    document.getElementById('abc').style.display = "none";
    document.getElementById('guess').style.display = "none";
    document.getElementById('calculator').style.display = "none";
    document.getElementById('tipCalc').style.display = "none";
}

// GUESS MY AGE GAME 
const myAge = 50;
document.getElementById("submit").onclick = function() {
    let age = parseInt(document.getElementById("age").value);
    if(age < myAge) {
        document.getElementById("error-msg").style.display = "block";
        document.getElementById("error-msg").innerHTML  = `Eeehh!😒 The number is higher than ${age} Try Again!`;
    }else if(age > myAge) {
        document.getElementById("error-msg").style.display = "block";
        document.getElementById("error-msg").innerHTML = `Oops!😜 The number is lower than ${age}. Try Again!`;
    }else if(age == myAge) {
        document.getElementById("results-box").style.display = "block";
        document.getElementById("results").innerHTML = `You Got it! 😎 The number is ${age}`;
    }else if(age !== "") {
        alert("You are kidding, right 😁. Please enter a number");
    }
    else {
        document.getElementById("error-msg").innerHTML = `You are kidding, right 😁`;
    }
}

// BALLOONS GAME

document.getElementById('a').onclick = function() {
    document.getElementById('a').style.display = "none";
    // alert(`🍎 A for Apple`);
}

document.getElementById('b').onclick = function() {
    document.getElementById('b').style.display = "none";
    // alert(`B for Ball ⚽`);
}

document.getElementById('c').onclick = function() {
    document.getElementById('c').style.display = "none";
    // alert(`C for Cat 🐈`);
}

document.getElementById('d').onclick = function() {
    document.getElementById('d').style.display = "none";
    // alert(`D for Dog 🐕`);
}

document.getElementById('e').onclick = function() {
    document.getElementById('e').style.display = "none";
    // alert(`E for Egg 🥚`);
}

document.getElementById('f').onclick = function() {
    document.getElementById('f').style.display = "none";
    // alert(`F for Fish 🐟`);
}

document.getElementById('g').onclick = function() {
    document.getElementById('g').style.display = "none";
    // alert(`G for Giraffe 🦒`);
}

document.getElementById('h').onclick = function() {
    document.getElementById('h').style.display = "none";
    // alert(`H for House 🏠`);
}

document.getElementById('i').onclick = function() {
    document.getElementById('i').style.display = "none";
    // alert(`I for Inkpot`);
}

document.getElementById('j').onclick = function() {
    document.getElementById('j').style.display = "none";
    // alert(`J for Jug`);
}

document.getElementById('k').onclick = function() {
    document.getElementById('k').style.display = "none";
    // alert(`<h2>K for Kite 🪁</h2>`);
}

document.getElementById('l').onclick = function() {
    document.getElementById('l').style.display = "none";
    // alert(`L for Lion 🦁`);
}

document.getElementById('m').onclick = function() {
    document.getElementById('m').style.display = "none";
    // alert(`M for Mango 🥭`);
}

document.getElementById('n').onclick = function() {
    document.getElementById('n').style.display = "none";
    // alert(`N for Net 🥅`);
}

document.getElementById('o').onclick = function() {
    document.getElementById('o').style.display = "none";
}

document.getElementById('p').onclick = function() {
    document.getElementById('p').style.display = "none";
}

document.getElementById('q').onclick = function() {
    document.getElementById('q').style.display = "none";
}

document.getElementById('r').onclick = function() {
    document.getElementById('r').style.display = "none";
}

document.getElementById('s').onclick = function() {
    document.getElementById('s').style.display = "none";
}

document.getElementById('t').onclick = function() {
    document.getElementById('t').style.display = "none";
}

document.getElementById('u').onclick = function() {
    document.getElementById('u').style.display = "none";
}

document.getElementById('v').onclick = function() {
    document.getElementById('v').style.display = "none";
}

document.getElementById('w').onclick = function() {
    document.getElementById('w').style.display = "none";
}

document.getElementById('x').onclick = function() {
    document.getElementById('x').style.display = "none";
}

document.getElementById('y').onclick = function() {
    document.getElementById('y').style.display = "none";
}

document.getElementById('z').onclick = function() {
    document.getElementById('z').style.display = "none";
}

// // Count Function
// const num1 = document.getElementById('z').onclick = function() {
//     document.getElementById('z').style.display = "none";
// };
// const num2 = document.getElementById('y').onclick = function() {
//     document.getElementById('y').style.display = "none";
// };
// const num3 = document.getElementById('x').onclick = function() {
//     document.getElementById('y').style.display = "none";
// };
// const nums = [num1, num2, num3];

// function popCount() {
//     let count = 0;
//     for(let i = 0; i < nums.length; i++ ){
//         if(nums[i] == target) count++
//     }
//     return count;
// }
// console.log(popCount());

// BMI CALCULATOR

document.getElementById("calcbmi").onclick = function() {
    let weight = document.getElementById("weight").value;
    const height = document.getElementById('height').value;
    const bmi = weight / (height * height);
   document.getElementById('bmiResults').innerHTML = Math.round(bmi);
    console.log(weight);
}

//TIP CALCULATOR


document.getElementById("calcTip").onclick = function() {
    function calcTip(bill) {
        return bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
    }
    const bill = document.getElementById("bill").value;
    const tip = calcTip(bill);
    const finalValue = bill + tip;
    bill === "" ? alert("Please Enter a bill amount first to calculate tip!") : 
    document.getElementById("billDisplay").innerHTML = "$" + bill;
    document.getElementById("tipDisplay").innerHTML = "$" + tip;
    document.getElementById("totalDisplay").innerHTML = "$" + finalValue;
};

// TODO LIST APP
document.getElementById("addList").onclick = function(){
    var item = document.getElementById("todoList").value;
    var todoItems = document.querySelectorAll('#todos > li');
    for(var i = 0; i < todoItems.length; i++) {
        todoItems[i].innerHTML = (i+1) + "." + item;
    }
}



