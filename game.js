"use strict";

// When a button is clicked, display the intended game
//   document.getElementById("guess").style.display = "none";
//   document.getElementById("calculator").style.display = "none";
//   document.getElementById("abc").style.display = "none";
//   document.getElementById("tipCalc").style.display = "none";
//   document.getElementById("todo").style.display = "none";

//   const displayTab = function(btn){
//       document.getElementById(btn).onclick = function () {
//           if(btn1){
//             document.getElementById("guess").style.display = "block";
//           }else if(btn2){
//             document.getElementById("abc").style.display = "block";
//           }else if(btn3){
//             document.getElementById("calculator").style.display = "block";
//           }else if(btn4){
//             document.getElementById("tipCalc").style.display = "block";
//           }else{
//             document.getElementById("todo").style.display = "block";
//           }
//       }
//   }

// When Button 1 is clicked

document.getElementById("btn1").onclick = function () {
  document.getElementById("guess").style.display = "block";
  document.getElementById("calculator").style.display = "none";
  document.getElementById("tipCalc").style.display = "none";
  document.getElementById("todo").style.display = "none";
  document.getElementById("cart").style.display = "none";
};

// When Button 2 is clicked
// document.getElementById("btn2").onclick = function () {
//   document.getElementById("abc").style.display = "block";
//   document.getElementById("guess").style.display = "none";
//   document.getElementById("calculator").style.display = "none";
//   document.getElementById("tipCalc").style.display = "none";
//   document.getElementById("todo").style.display = "none";
//   document.getElementById("cart").style.display = "none";
// };

// When Button 3 is clicked
document.getElementById("btn3").onclick = function () {
  document.getElementById("calculator").style.display = "block";
  document.getElementById("guess").style.display = "none";
  document.getElementById("tipCalc").style.display = "none";
  document.getElementById("todo").style.display = "none";
  document.getElementById("cart").style.display = "none";
};

// When Button 4 is clicked
document.getElementById("btn4").onclick = function () {
  document.getElementById("tipCalc").style.display = "block";
  document.getElementById("guess").style.display = "none";
  document.getElementById("calculator").style.display = "none";
  document.getElementById("todo").style.display = "none";
  document.getElementById("cart").style.display = "none";
};

// When Button 5 is clicked
document.getElementById("btn5").onclick = function () {
  document.getElementById("todo").style.display = "block";
  document.getElementById("guess").style.display = "none";
  document.getElementById("calculator").style.display = "none";
  document.getElementById("tipCalc").style.display = "none";
  document.getElementById("cart").style.display = "none";
};

// When Button 6 is clicked
document.getElementById("btn6").onclick = function () {
  document.getElementById("cart").style.display = "block";
  document.getElementById("guess").style.display = "none";
  document.getElementById("calculator").style.display = "none";
  document.getElementById("tipCalc").style.display = "none";
  document.getElementById("todo").style.display = "none";
};

// GUESS MY AGE GAME
let myAge = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
document.getElementById("submit").onclick = function () {
  let age = Number(document.querySelector("#age").value);
  Number(document.querySelector("#age").value = "");

  if(age === ''){
    document.querySelector(".error-msg").textContent = "⛔Please Enter a Number";
  }
  
// When number is equal to guessed number
  else if (age === myAge) {
    document.getElementById("results").style.display = "block";
    document.getElementById("results").innerHTML = `You Got it! 😎`;
    document.querySelector(".score").textContent = score;
    document.querySelector(".correct").textContent = age;
    document.querySelector(".correct").style.background = "var(--color4)";
    document.querySelector(".correct").style.color = "#ffffff";
    document.querySelector(".hr-number").style.background = "var(--color4)";
    document.querySelector(".correct").style.border = "none";
    if(score > highscore){
        highscore = score;
    document.querySelector(".highscore").textContent = score;
    }
  } 
//   When number is NOT equal to guessed number
  else if (age !== myAge) {
    document.querySelector("#error-msg").style.display = "block";
    document.querySelector("#error-msg").textContent =
      age < myAge
        ? `Eeehh!😒 The number is higher than ${age} Try Again!`
        : `Oops!😜 The number is lower than ${age}. Try Again!`;
    if (score > 0) {
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".error-msg").textContent = "You Lose 😞";
    }
  }


//   RESET BUTTON TO PLAY AGAIN
document.querySelector('#reset').addEventListener('click', function(){
    score = 20;
    document.querySelector(".score").textContent = score;
    document.getElementById("results").style.display = "none";
    document.querySelector(".correct").textContent = '?';
    document.querySelector(".correct").style.background = "#fff";
    document.querySelector(".correct").style.color = "#000";
    document.querySelector(".hr-number").style.background = "var(--color2)";
    document.querySelector(".correct").style.border = "5px solid var(--color2)";
    Number(document.querySelector("#age").value = "");
    document.querySelector(".error-msg").style.display = "none";
    myAge = Math.trunc(Math.random() * 20 + 1);

});


// //   If NO number is entered
//   else if(age == ''){
//     document.querySelector(".error-msg").textContent = "⛔Please Enter a Number";
//   }else{
//     document.querySelector(".error-msg").textContent = "⛔Please Enter a Number";
//   }
};
//     if(age < myAge) {
//         if(score > 1){
//             document.querySelector("#error-msg").style.display = "block";
//             document.querySelector("#error-msg").textContent  = `Eeehh!😒 The number is higher than ${age} Try Again!`;
//             score--;
//             document.querySelector('.score').textContent = score;
//         }

//     }else if(age > myAge) {
//         if(score > 0){
//             document.getElementById("error-msg").style.display = "block";
//             document.getElementById("error-msg").innerHTML = `Oops!😜 The number is lower than ${age}. Try Again!`;
//             score--;
//             document.querySelector('.score').textContent = score;
//         }else {
//             document.querySelector('.error-msg').textContent = "You Lose 😞";
//         }

//     }

// BALLOONS GAME


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

// When Calculate BMI button is clicked
document.getElementById("calcbmi").onclick = function () {
  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value;
  const bmi = weight / (height * height);

  document.getElementById("bmiResults").innerHTML = bmi.toFixed(1);
  document.getElementById('index').style.display = "block";  
  // document.getElementById('image').style.display = "block"; 
  let image = document.querySelectorAll('image1');
  // When weight is underweight
  if(bmi < 18.5){
    document.getElementById('index').innerHTML = "Underweight = <18.5";
    document.getElementById('index').style.backgroundColor = "#06D4B5";
    document.getElementById('index').style.color = "white";
    document.getElementById('image1').style.display = "block";
  }
  // When weight is normal
  else if(bmi >= 18.5 && bmi <= 24.9){
    document.getElementById('index').innerHTML = "Normal weight = 18.5–24.9";
    document.getElementById('index').style.backgroundColor = "var(--color4)";
    document.getElementById('index').style.color = "white";
    document.getElementById('image2').style.display = "block";
  }
  // When weight is overweight
    else if(bmi >= 25 && bmi <= 29.9){
      document.getElementById('index').innerHTML = "Overweight = 25–29.9";
      document.getElementById('index').style.backgroundColor = "var(--color2)";
      document.getElementById('index').style.color = "white";
      document.getElementById('image3').style.display = "block";
    }
    // When weight is obesity
    else if(bmi >= 30){
      document.getElementById('index').innerHTML = "Obese = BMI of 30 or greater";
      document.getElementById('index').style.backgroundColor = "red";
      document.getElementById('index').style.color = "white";
      document.getElementById('image4').style.display = "block";
    }
};

// When Reset button is clicked
document.getElementById('resetbmi').onclick = function(){
  weight = document.getElementById("weight").innerHTML = "";
  height = document.getElementById("height").innerHTML = "";
  document.getElementById('image').style.display = "none"; 
  document.getElementById('index').style.display = "none";
}

//TIP CALCULATOR

document.getElementById("calcTip").onclick = function () {
  function calcTip(bill) {
    return bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
  }
  const bill = document.getElementById("bill").value;
  const tip = calcTip(bill);
  const finalValue = Number(bill) + Number(tip);
  bill === ""
    ? alert("Please Enter a bill amount first to calculate tip!")
    : (document.getElementById("billDisplay").innerHTML = "$" + bill);
  document.getElementById("tipDisplay").innerHTML = "$" + tip;
  document.getElementById("totalDisplay").innerHTML = "$" + finalValue;
};

// TODO LIST APP

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("todoList").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("You must write something!");
  } else {
    document.getElementById("todos").appendChild(li);
  }
}
document.getElementById("todoList").value = "";

// var span = document.createElement("SPAN");
// var txt = document.createTextNode("\u00D7");
// span.className = "close";
// span.appendChild(txt);
// li.appendChild(span);

for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

// SHOPPING CART
// const itemPrice1  = 750;
// const itemPrice2 = 550;
// const itemPrice3 = 650;
// let viewCart = 0;

document.getElementById("viewcart").onclick = function () {
  document.getElementById('showcart').style.display = "block";
  document.getElementById('cartCount').innerHTML = "X";
};
