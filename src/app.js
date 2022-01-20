/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let count = 10;
  let counter = setInterval(generateCard, 10000); //called every 10 seconds
  let countdown = setInterval(() => {
    count--;
    document.querySelector(".count").innerHTML = `${count}`;
    if (count == 0) count = 10;
  }, 1000);

  generateCard(); //initial generateCard call

  let btn = document.querySelector("#genCardBtn");
  /* 
    Generate card on button click and clear the counter and 
    countdown intervals. When the button is used to generate a
    card, cards will no longer generate every 10 seconds (until 
    page is refreshed). Will also set display to 'none' for t
    he counter DOM element.
  */
  btn.addEventListener("click", e => {
    clearInterval(counter); //clear counter
    clearInterval(countdown); //clear countdown
    document.querySelector(".counter").style.display = "none";
    let cardWidth = document.querySelector("#cardWidthInput").value;
    if (
      !cardWidth ||
      !Number.isInteger(parseInt(cardWidth)) ||
      cardWidth == "0"
    )
      cardWidth = "23";
    generateCard(cardWidth);
  });

  function generateCard(width = "23") {
    let cardArr = [2, 3, 4, 5, 6, 7, 8, 9, 10, "A", "J", "K", "Q"];
    let card = getRandomIntInclusive(0, cardArr.length - 1);
    let suitArr = ["&#9829;", "&#9827;", "&#9824;", "&#9830;"];
    let randomSuit = suitArr[getRandomIntInclusive(0, suitArr.length - 1)];
    let suitIcons = document.querySelectorAll(".suit-icon");

    document.querySelector(".card").style.maxWidth = `${width}rem`;
    document.querySelector(".card-num").innerHTML = cardArr[card];

    if (randomSuit == "&#9829;") {
      suitIcons.forEach(element => {
        element.innerHTML = "&#9829;";
      });
    }

    if (randomSuit == "&#9827;") {
      suitIcons.forEach(element => {
        element.innerHTML = "&#9827;";
      });
    }

    if (randomSuit == "&#9830;") {
      suitIcons.forEach(element => {
        element.innerHTML = "&#9830;";
      });
    }

    if (randomSuit == "&#9824;") {
      suitIcons.forEach(element => {
        element.innerHTML = "&#9824;";
      });
    }

    if (randomSuit == "&#9830;" || randomSuit == "&#9829;") {
      suitIcons.forEach(element => (element.style.color = "red"));
    } else {
      suitIcons.forEach(element => (element.style.color = "black"));
    }
  }

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }
};
