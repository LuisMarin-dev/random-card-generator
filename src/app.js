/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here

  let getRandomNumber = () => {
    let numbers = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];
    let indexNumbers = Math.floor(Math.random() * numbers.length);

    return numbers[indexNumbers];
  };

  let getRandomSuit = () => {
    let suit = ["clubs", "diamonds", "hearts", "spades"];
    let indexSuit = Math.floor(Math.random() * suit.length);

    return suit[indexSuit];
  };
  document.querySelector(".card").classList.add(getRandomSuit());
  document.querySelector(".number").innerHTML = getRandomNumber();
};
