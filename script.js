'use strict';
window.onload = getAnimationName();

function getAnimationName() {
    document.getElementById("detail_elements").style.visibility = "visible";

    const e = document.querySelector("#target");
    const select = document.querySelector("#animationSelect");
    shuffle(select);
    e.className = "title";
    let value = select.options[select.selectedIndex].value;
    let text = select.options[select.selectedIndex].text;
    let dataLink = select.options[select.selectedIndex].dataset.link;
    let strArray = text.split("-");
    let animationName = document.querySelector("#animationName");
    let userName = document.querySelector("#userName");
    animationName.textContent = strArray[0];
    userName.textContent = strArray[1];
    userName.href = dataLink;
    e.classList.add(value);
}


// @description Shuffle function by Fisher-Yates (aka Knuth-shuffle).
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
