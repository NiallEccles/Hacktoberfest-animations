"use strict";

const
  select = document.getElementById('animationSelect'),
  target = document.getElementById("target"),
  animationName = document.getElementById('animationName'),
  userName = document.getElementById('userName');

/**
 * Set the title, author and name of the selected animation.
 */
function getAnimationName(rand) {
  rand = rand || false;
  target.className = "title";
  const
    index = rand ? Math.floor(Math.random() * (select.length + 1)) : select.selectedIndex,
    value = select.options[index].value,
    text = select.options[index].text,
    dataLink = select.options[index].dataset.link,
    strArray = text.split("·");
  animationName.textContent = strArray[0];
  userName.textContent = strArray[1];
  userName.href = dataLink;
  target.classList.add(value);

  // If rand is true, also change the selected value on the select
  if(rand)
    select.selectedIndex = index;
}

/**
 * Sort all animations by name.
 * @param { Array } animations the animations from 'window.animations'.
 */
function sortAnimationByName(animations){
  animations.sort(function(a, b){
    if(a.name > b.name) return 1
    if(a.name < b.name) return -1
    return 0
  })
  return animations
}


/**
 * Inject the css file containing the animation properties.
 * @param { string } animationName the animation file name.
 */
function injectStylesheet(animationName){
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = 'animations/' + animationName + '.css'
  document.head.appendChild(link)
}

/**
 * Insert a new option to the select with the animation data.
 * @param { Object } animation the object containing the animation name and the author.
 */
function insertAnimationOptionToSelect(animation){
  const animationWithAuthorName = animation.name + ' · ' + animation.author
  const option = new Option(animationWithAuthorName, animation.name)
  option.dataset.link = 'https://github.com/' + animation.author
  select.options.add(option)
}


function loadAnimations(){
  for(let animation of sortAnimationByName(window.animations)){
    injectStylesheet(animation.name)
    insertAnimationOptionToSelect(animation)
  }
  getAnimationName(true);
}

document.addEventListener('DOMContentLoaded', function(){
  loadAnimations()
  // select.addEventListener('change', ())
})
