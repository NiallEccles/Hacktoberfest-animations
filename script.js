"use strict";
window.onload = getAnimationName(true);

function getAnimationName(rand) {
  rand = rand || false;
  document.getElementById("detail_elements").style.visibility = "visible";

  const e = document.querySelector("#target");
  const select = document.querySelector("#animationSelect");
  const index = (rand) ? Math.floor(Math.random() * (select.length + 1)) : select.selectedIndex;
  e.className = "title";
  let value = select.options[index].value;
  let text = select.options[index].text;
  let dataLink = select.options[index].dataset.link;
  let strArray = text.split("-");
  let animationName = document.querySelector("#animationName");
  let userName = document.querySelector("#userName");
  animationName.textContent = strArray[0];
  userName.textContent = strArray[1];
  userName.href = dataLink;
  e.classList.add(value);
  // If rand is true, also change the selected value on the select
  if(rand){
    select.selectedIndex = index;
  }
}
