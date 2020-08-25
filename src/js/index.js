/* eslint-disable */

import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  document.querySelector(".number").innerHTML = generateRandomNumber();
  document.querySelectorAll("#symbol").classList.add(generateRandomSuite());
  //   document.querySelector(".symbolbottom").innerHTML = generateRandomSuite();
};

let generateRandomNumber = () => {
  let array = [
    "A",
    "K",
    "Q",
    "J",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10"
  ];
  let indexNumbers = Math.floor(Math.random() * array.length);
  return array[indexNumbers];
};

let generateRandomSuite = () => {
  let suites = ["diamond", "ace", "spade", "club"];
  let indexSuites = Math.floor(Math.random() * suites.length);
  return suites[indexSuites];
};
