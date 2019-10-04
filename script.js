"use strict";

const
  select = document.getElementById('animationSelect'),
  target = document.getElementById("target"),
  animationName = document.getElementById('animationName'),
  userName = document.getElementById('userName');

/**
 * Set the title, author and name of the selected animation.
 */
function getAnimationName() {
  target.className = "title";
  const
    value = select.options[select.selectedIndex].value,
    text = select.options[select.selectedIndex].text,
    dataLink = select.options[select.selectedIndex].dataset.link,
    strArray = text.split("-");
  animationName.textContent = strArray.slice(0, 1);
  userName.textContent = strArray.slice(1, strArray.length).join('-');
  userName.href = dataLink;
  target.classList.add(value);
}


/**
 * Inject the css file containing the animation properties.
 * @param { string } animationName the animation file name.
 */
function injectStylesheet(animationName){
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = '/animations/' + animationName + '.css'
  document.head.appendChild(link)
}

/**
 * Insert a new option to the select with the animation data.
 * @param { Object } animation the object containing the animation name and the author.
 */
function insertAnimationOptionToSelect(animation){
  const animationWithAuthorName = animation.name + ' - ' + animation.author
  const option = new Option(animationWithAuthorName, animation.name)
  option.dataset.link = 'https://github.com/' + animation.author
  select.options.add(option)
}


function loadAnimations(){
  for(let animation of window.animations){
    injectStylesheet(animation.name)
    insertAnimationOptionToSelect(animation)
  }
  getAnimationName();
}

document.addEventListener('DOMContentLoaded', function(){
  loadAnimations()
  // select.addEventListener('change', ())
})
